import type {
    SiteConfig,
    ProfileConfig,
    LicenseConfig,
    ExternalUrlsConfig
} from "./types/config"

export const siteConfig: SiteConfig = {
    title: "cmchen的博客",
    subTitle: "记录技术与生活",

    favicon: "/favicon/favicon.ico", // Path of the favicon, relative to the /public directory

    pageSize: 6, // Number of posts per page
    blogNavi: {
        enable: true // Whether to enable blog navigation in the blog footer
    }
}

export const profileConfig: ProfileConfig = {
    avatar: "assets/Motues.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    name: "shi-tou1234",
    description: "分享编程、工具和日常记录",
    indexPage: "https://shi-tou1234.github.io/-/",
    startYear: 2026,
}

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const externalUrlsConfig: ExternalUrlsConfig = {
	githubApi: "https://api.github.com",
	githubRepo: "shi-tou1234/-",
	giscusRepoId: "R_kgDORRKvYA",
	geoDataVBase: "https://geo.datav.aliyun.com/areas_v3/bound",
	geoDataVBaseLegacy: "https://geo.datav.aliyun.com/areas/bound",
};