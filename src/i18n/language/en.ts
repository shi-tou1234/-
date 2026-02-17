import type { Translation } from "@i18n/key";

const translation: Translation = {
    header: {
        home: "Home",
        archive: "Archive",
        categories: "Categories",
        about: "About",
        friends: "Friends",
    },
    cover: {
        title: {
            home: "Welcome to cmchen's blog",
            archive: "Archive",
            categories: "Categories",
            about: "About",
            friends: "Friends",
            page404: "Secret",
        },
        subTitle: {
            home: "Life is colorful!",
            archive: "Total of {count} articles",
            categories: "Total {count} categories",
            about: "",
            friends: "Interesting Souls",
            page404: "Congratulations on finding a new world, this world is still under construction, please wait a bit longer."
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