import type { BlogEntryWithLocaleStatus } from '@utils/content-utils';

const CATEGORY_PARAM_PREFIX = 'b64-';

export function getUncategorizedLabel(lang: string): string {
  return lang.toLowerCase().startsWith('zh') ? '未分类' : 'Uncategorized';
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
  const legacyCategories = Array.isArray(post.data.categories)
    ? post.data.categories.map((item) => String(item).trim()).filter(Boolean)
    : [];
  const singleCategory = String(post.data.category || '').trim();
  const merged = [...legacyCategories, ...(singleCategory ? [singleCategory] : [])];
  const unique = [...new Set(merged)];
  return unique.length > 0 ? unique : [uncategorized];
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