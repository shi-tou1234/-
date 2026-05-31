import type { BlogEntryWithLocaleStatus } from '@utils/content-utils';

const CATEGORY_PARAM_PREFIX = 'b64-';
export const STUDY_NOTE_CATEGORY = '学习笔记';
const STUDY_NOTE_SUBCATEGORIES = new Set(['电路', '高数', '数电', '大物', '复变函数', '英语笔记']);

export function getUncategorizedLabel(lang: string): string {
  return lang.toLowerCase().startsWith('zh') ? '未分类' : 'Uncategorized';
}

export function normalizeCategoryItems(categories: string[]): string[] {
  const unique = [...new Set(categories.map((item) => String(item).trim()).filter(Boolean))];

  if (unique.length === 1 && STUDY_NOTE_SUBCATEGORIES.has(unique[0])) {
    return [STUDY_NOTE_CATEGORY, unique[0]];
  }

  return unique;
}

export function encodeCategoryParam(category: string): string {
  return `${CATEGORY_PARAM_PREFIX}${Buffer.from(category, 'utf-8').toString('base64url')}`;
}

export function decodeCategoryParam(categoryParam: string): string {
  if (!categoryParam) return '';

  if (categoryParam.startsWith(CATEGORY_PARAM_PREFIX)) {
    const encoded = categoryParam.slice(CATEGORY_PARAM_PREFIX.length);
    if (encoded) {
      try {
        return Buffer.from(encoded, 'base64url').toString('utf-8');
      } catch {
      }
    }
  }

  try {
    return decodeURIComponent(categoryParam);
  } catch {
    return categoryParam;
  }
}

export function getPostCategories(
  post: Pick<BlogEntryWithLocaleStatus, 'data'>,
  lang: string,
): string[] {
  const uncategorized = getUncategorizedLabel(lang);
  const legacyCategories = Array.isArray(post.data.categories) ? post.data.categories : [];
  const singleCategory = String(post.data.category || '').trim();
  const normalized = normalizeCategoryItems([...legacyCategories, ...(singleCategory ? [singleCategory] : [])]);
  return normalized.length > 0 ? normalized : [uncategorized];
}

export function buildCategoriesMap(posts: BlogEntryWithLocaleStatus[], lang: string) {
  return posts.reduce((acc, post) => {
    getPostCategories(post, lang).forEach((category) => {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(post);
    });
    return acc;
  }, {} as Record<string, BlogEntryWithLocaleStatus[]>);
}