import zhCN from "./language/zh-cn.ts";

const translations = { "zh-cn": zhCN };

function i18nit(_language: string): (key: string, params?: Record<string, string | number>) => string {
	const getValue = (key: string) =>
		key.split('.').reduce((translation, key) => translation?.[key], (translations as any)["zh-cn"]);

	const t = (key: string, params?: Record<string, string | number>) =>
		(getValue(key) as string)?.replace(/\{(\w+)\}/g, (_, param) => String(params?.[param] ?? param)) ?? key;

	return t;
}

export default i18nit;