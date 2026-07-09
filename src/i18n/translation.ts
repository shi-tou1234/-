import zhCN from "./language/zh-cn.ts";

const translation = zhCN;

function i18nit(_language: string): (key: string, params?: Record<string, string | number>) => string {
	const getValue = (key: string): unknown =>
		key.split('.').reduce<unknown>((acc, k) =>
			acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[k] : undefined,
			translation);

	const t = (key: string, params?: Record<string, string | number>) =>
		(getValue(key) as string)?.replace(/\{(\w+)\}/g, (_, param) => String(params?.[param] ?? param)) ?? key;

	return t;
}

export default i18nit;