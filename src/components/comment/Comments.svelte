<script lang="ts">
  import { onMount } from 'svelte';
  import { siteConfig } from '@/config.ts';
  import CommentItem from './CommentItem.svelte';
  import i18nit from '../../i18n/translation.ts';

  export let postSlug: string;
  export let language: string = 'zh-cn';
  export let postTitle: string;

  const t = i18nit(language);

  const apiUrl = siteConfig.comments.backendUrl;

  let comments: any[] = [];
  let loading = true;
  let error = '';
  let page = 1;
  let limit = 20;
  let hasMore = false;
  const LOAD_TIMEOUT_MS = 6000;
  let loadingMore = false;
  let loadMoreError = '';
  let statusMessage = '';
  let statusType: 'success' | 'error' | 'warning' | '' = '';
  let statusTimer: ReturnType<typeof setTimeout> | null = null;

  // 顶层评论表单数据
  let author = '';
  let email = '';
  let url = '';
  let content = '';

  // 防止重复提交
  let submitting = false;

  // 当前正在回复的评论ID
  let replyingToId: number | null = null;

  // 本地存储键名
  const STORAGE_KEY = 'comment_user_info';

  // 从本地存储加载用户信息
  function loadUserInfoFromStorage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const userInfo = JSON.parse(stored);
        author = userInfo.author || '';
        email = userInfo.email || '';
        url = userInfo.url || '';
      }
    } catch (e) {
      console.warn('Failed to load user info from localStorage:', e);
    }
  }

  // 保存用户信息到本地存储
  function saveUserInfoToStorage() {
    try {
      const userInfo = { author, email, url };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userInfo));
    } catch (e) {
      console.warn('Failed to save user info to localStorage:', e);
    }
  }

  // 计算内容字数
  function getWordCount(text: string): { chars: number; words: number } {
    const chars = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    return { chars, words };
  }

  // 检查字数是否超出限制
  function isContentWithinLimit(text: string): boolean {
    const { chars, words } = getWordCount(text);
    return chars <= 2000 && words <= 1000;
  }

  function showStatus(message: string, type: 'success' | 'error' | 'warning' = 'success') {
    statusMessage = message;
    statusType = type;
    if (statusTimer) {
      clearTimeout(statusTimer);
    }
    statusTimer = setTimeout(() => {
      statusMessage = '';
      statusType = '';
    }, 2200);
  }

  function isSubmitFailureMessage(message: string): boolean {
    if (!message) return false;
    const lower = message.toLowerCase();
    const successHints = ['success', 'submitted', '提交成功', '已提交'];
    if (successHints.some((hint) => lower.includes(hint))) {
      return false;
    }
    const failureHints = ['limit', 'exceeded', 'too many', 'failed', 'error', '频繁', '失败', '稍后'];
    return failureHints.some((hint) => lower.includes(hint));
  }

  async function loadComments(options: { append?: boolean; showLoading?: boolean } = {}) {
    const { append = false, showLoading = true } = options;

    if (showLoading) {
      loading = true;
      error = '';
    }
    if (append) {
      loadingMore = true;
      loadMoreError = '';
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), LOAD_TIMEOUT_MS);
    try {
      if (!apiUrl) {
        comments = [];
        hasMore = false;
        error = '';
        if (!append) {
          showStatus('评论服务暂不可用，已切换为空评论模式', 'warning');
        }
        return;
      }

      const res = await fetch(
        `${apiUrl}/api/comments?post_slug=${encodeURIComponent(postSlug)}&nested=true&page=${page}&limit=${limit}`,
        {
          signal: controller.signal,
          cache: 'no-store',
        }
      );
      if (!res.ok) {
        if (append) {
          loadMoreError = t('comments.loadMoreFailed') || '加载更多失败，请重试';
        } else {
          comments = [];
          hasMore = false;
          error = '';
          showStatus('评论服务暂时不可用，已切换为空评论模式', 'warning');
        }
        return;
      }
      const data = await res.json();
      const nextComments = Array.isArray(data?.data) ? data.data : [];
      comments = append ? [...comments, ...nextComments] : nextComments;
      hasMore = Boolean(data?.pagination?.total > page * limit);
    } catch (err: any) {
      if (append) {
        loadMoreError = t('comments.loadMoreFailed') || '加载更多失败，请重试';
      } else {
        comments = [];
        hasMore = false;
        error = '';
        showStatus('评论服务暂时不可用，已切换为空评论模式', 'warning');
      }
    } finally {
      window.clearTimeout(timeoutId);
      if (showLoading) {
        loading = false;
      }
      if (append) {
        loadingMore = false;
      }
    }
  }

  async function handleLoadMore() {
    if (loadingMore) return;
    const nextPage = page + 1;
    page = nextPage;
    await loadComments({ append: true, showLoading: false });
    if (loadMoreError) {
      page = nextPage - 1;
    }
  }

  async function submitComment(parentId: number | null = null, replyData: any = null) {
    // 防止重复提交
    if (submitting) return;
    
    let submitAuthor, submitEmail, submitUrl, submitContent;
    
    if (replyData) {
      // 处理回复评论
      submitAuthor = replyData.author;
      submitEmail = replyData.email;
      submitUrl = replyData.url;
      submitContent = replyData.content;
    } else {
      // 处理顶层评论
      submitAuthor = author;
      submitEmail = email;
      submitUrl = url;
      submitContent = content;
    }

    if (!submitAuthor || !submitEmail || !submitContent) {
      showStatus(t('comments.fillRequired') || '请填写昵称、邮箱和评论内容', 'warning');
      return;
    }

    // 检查字数限制
    if (!isContentWithinLimit(submitContent)) {
      showStatus(t('comments.contentTooLong') || '评论内容超出限制：不超过2000汉字或1000单词', 'warning');
      return;
    }

    // 只有在提交顶层评论时才设置 submitting 状态
    if (!parentId) {
      submitting = true;
    }
    
    try {
      const res = await fetch(`${apiUrl}/api/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          post_slug: postSlug,
          author: submitAuthor,
          email: submitEmail,
          url: submitUrl || null,
          content: submitContent,
          parent_id: parentId,
          post_url: window.location.href, // 添加当前页面的URL
          post_title: postTitle,
        }),
      });
      const data = await res.json().catch(() => ({}));
      const serverMessage = String(data?.message || '').trim();

      if (!res.ok || isSubmitFailureMessage(serverMessage)) {
        throw new Error(serverMessage || t('comments.submitFailed') || '提交失败，请稍后再试');
      }
      showStatus(serverMessage || t('comments.submitSuccess') || '提交成功', 'success');
      
      // 重置表单
      if (!replyData) {
        content = '';
        // 保存用户信息到本地存储
        saveUserInfoToStorage();
      }
      replyingToId = null;
      
      // 重新加载评论
      await loadComments();
    } catch (err: any) {
      showStatus(String(err?.message || t('comments.submitFailed') || '提交失败，请稍后再试'), 'error');
    } finally {
      // 只有在提交顶层评论时才重置 submitting 状态
      if (!parentId) {
        submitting = false;
      }
    }
  }

  // 删除评论后的处理函数
  async function handleCommentDelete(e: CustomEvent) {
    // 重新加载评论以反映删除
    await loadComments();
  }

  function setReplyingTo(id: number | null) {
    replyingToId = id;
  }

  onMount(() => {
    loadUserInfoFromStorage();
    loadComments({ append: false, showLoading: true });
  });
</script>

<div class="mt-4 max-w-3xl mx-auto border-t border-[var(--button-border-color)]">
  <!-- <div class="my-6 border border-[var(--text-color)]/70"></div> -->
  <!-- 评论输入 -->
  <div data-aos="fade-up" class="mt-4">
    {#if statusMessage}
      <p class={`mb-3 rounded border px-3 py-2 text-sm ${
        statusType === 'warning' || statusType === 'error'
          ? 'border-[var(--warning-border-color)] bg-[var(--warning-bg-color)] text-[var(--warning-text-color)]'
          : 'border-[var(--button-border-color)] text-[var(--text-color)]/80'
      }`}>
        {statusMessage}
      </p>
    {/if}

    <form on:submit|preventDefault={() => submitComment()} class="space-y-4">
      <div class="grid grid-cols-3 gap-3">
        <div>
          <label for="author" class="block text-sm text-[var(--text-color)] mb-1">{t('comments.name')}<span class="text-red-500">*</span></label>
          <input id="author" type="text" placeholder={t('comments.required')} bind:value={author}
            class="rounded w-full text-[var(--text-color)] border border-[var(--button-border-color)]  focus:outline-none focus:border-[var(--link-color)] text-sm p-2" />
        </div>
        <div>
          <label for="email" class="block text-sm text-[var(--text-color)] mb-1">{t('comments.email')}<span class="text-red-500">*</span></label>
          <input id="email" type="email" placeholder={t('comments.required')} bind:value={email}
            class="rounded w-full text-[var(--text-color)] border border-[var(--button-border-color)]  focus:outline-none focus:border-[var(--link-color)] text-sm p-2" />
        </div>
        <div>
          <label for="url" class="block text-sm text-[var(--text-color)] mb-1">{t('comments.site')}</label>
          <input id="url" type="url" placeholder={t('comments.optional')} bind:value={url}
            class="rounded w-full text-[var(--text-color)] border border-[var(--button-border-color)]  focus:outline-none focus:border-[var(--link-color)] text-sm p-2" />
        </div>
      </div>

      <div>
        <textarea placeholder={t('comments.welcome')}
          class="rounded w-full border text-[var(--text-color)] border-[var(--button-border-color)]  focus:outline-none focus:border-[var(--link-color)] text-sm p-3 min-h-[100px]"
          bind:value={content}></textarea>
        <div class="text-right text-sm text-[var(--text-color)]/80 mt-1">
          <!-- {getWordCount(content).chars} {t('comments.characters')} / {getWordCount(content).words} {t('comments.words')} -->
          {#if !isContentWithinLimit(content)}
            <span class="text-red-500 ml-2">{t('comments.contentTooLong') || '内容超出限制'}</span>
          {/if}
        </div>
      </div>

      <div class="flex justify-end gap-3">
        <button type="submit" disabled={submitting || !isContentWithinLimit(content)}
          class="rounded px-4 py-2 text-sm font-medium text-[var(--text-color)] border border-[var(--button-border-color)] hover:bg-[var(--button-hover-color)] disabled:opacity-50">
          {submitting ? t('comments.sending') : t('comments.send')}
        </button>
      </div>
    </form>
  </div>

  <!-- 评论区 -->
  <div class="">
    {#if loading}
      <p data-aos="fade-up" class="text-[var(--text-color)] text-center">{t('comments.loading') || '正在加载评论...'}</p>
    {:else if error}
      <div data-aos="fade-up" class="text-center">
        <p class="text-[var(--warning-text-color)]">{error}</p>
        <button
          class="mt-3 rounded px-3 py-1.5 text-sm border border-[var(--button-border-color)] text-[var(--text-color)] hover:bg-[var(--button-hover-color)]"
          on:click={() => loadComments({ append: false, showLoading: true })}
        >
          {t('comments.retry') || '重试'}
        </button>
      </div>
    {:else}
      <h4 data-aos="fade-up" class="text-[var(--text-color)] text-base font-semibold mb-4">{comments.length} {t('comments.comments')}</h4>

      {#if comments.length === 0}
        <p data-aos="fade-up" class="text-[var(--text-color)]/80 text-sm text-center mb-4">暂无评论，欢迎抢沙发</p>
      {/if}

      <div class="space-y-6">
        {#each comments as c}
          <CommentItem {c} {postSlug} {author} {email} {url} {language}
            on:reply={(e) => setReplyingTo(e.detail)} 
            on:cancel={() => setReplyingTo(null)}
            on:submit={async (e) => {
              await submitComment(e.detail.parentId, e.detail);
            }}
            on:delete={handleCommentDelete}
            replyingToId={replyingToId} />
        {/each}
      </div>

      {#if hasMore}
        <div data-aos="fade-up" class="flex justify-center mt-6">
          <div class="text-center">
            <button
              on:click={handleLoadMore}
              disabled={loadingMore}
              class="rounded px-3 py-1.5 text-sm border border-[var(--button-border-color)] text-[var(--text-color)] hover:bg-[var(--button-hover-color)] disabled:opacity-50"
            >
              {loadingMore ? (t('comments.loadingMore') || '加载中...') : (t('comments.loadMore') || '加载更多')}
            </button>
            {#if loadMoreError}
              <p class="mt-2 text-xs text-[var(--warning-text-color)]">{loadMoreError}</p>
            {/if}
          </div>
        </div>
      {/if}
    {/if}
  </div>
</div>