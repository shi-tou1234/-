import type { Translation } from "@i18n/key";

const translation: Translation = {
    site: {
        title: "cmchen's Blog",
    },
    header: {
        home: "Home",
        archive: "Archive",
        categories: "Categories",
        about: "About",
        tools: "Tools",
    },
    cover: {
        title: {
            home: "Welcome to cmchen's blog",
            archive: "Archive",
            categories: "Categories",
            about: "About",
            tools: "Tools",
        },
        subTitle: {
            home: "Life is colorful!",
            archive: "Total of {count} articles",
            about: "",
            tools: "Quick access to useful tools and site links",
        }
    },
    toc: "Contents",
    pageNavigation: {
        previous: "Prev",
        next: "Next",
        currentPage: "Page {currentPage} of {totalPages}",
    },
    search: {
        placeholder: "Enter keywords to start searching",
        searching: "Searching...",
        noresult: "No results found.",
        error: "Search error occurred. Please try again later."
    },
    license: {
        author: "Author",
        license: "License",
        publishon: "Published on"
    },
    readingTime: {
        minutes: "{minutes} min read"
    },
    blogNavi: {
        next: "Next Blog",
        prev: "Previous Blog"
    },
    langNote: {
        note: "Note: ",
        description: "This page does not support English, using the default language version"
    }
}

export default translation;