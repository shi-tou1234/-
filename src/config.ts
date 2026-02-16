import type {
    SiteConfig,
    ProfileConfig,
    LicenseConfig
} from "./types/config"

import type { FriendLink } from "./types/friend"

export const siteConfig: SiteConfig = {
    title: "石头的博客",
    subTitle: "记录技术与生活",

    favicon: "/favicon/favicon.ico", // Path of the favicon, relative to the /public directory

    pageSize: 6, // Number of posts per page
    toc: {
        enable: true,
        depth: 3 // Max depth of the table of contents, between 1 and 4
    },
    blogNavi: {
        enable: true // Whether to enable blog navigation in the blog footer
    },
    comments: {
        enable: true, // Whether to enable comments
        backendUrl: "https://api-momo.motues.top" // 替换为你自己部署的 Momo-Backend 地址
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

export const friendLinkConfig: FriendLink[] = [
    {
        name: 'GitHub',
        avatar: 'https://avatars.githubusercontent.com/u/9919',
        url: 'https://github.com/shi-tou1234',
        description: '我的 GitHub 主页'
    }
    // Add more friend links here
]