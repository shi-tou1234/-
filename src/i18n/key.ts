export interface Translation {
    header: {
        home: string;
        archive: string;
        categories: string;
        about: string;
        friends: string;
    };
    cover: {
        title: {
            home: string;
            archive: string;
            categories: string;
            about: string;
            friends: string;
            page404: string;
        };
        subTitle: {
            home: string;
            archive: string;
            categories: string;
            about: string;
            friends: string;
            page404: string;
        };
    };
    toc:string;
    pageNavigation: {
        previous: string;
        next: string;
        currentPage: string;
    };
    search: {
        placeholder: string;
        searching: string;
        noresult: string;
        error: string;
    };
    license: {
        author: string;
        license: string;
        publishon: string;
    };
    readingTime: {
        minutes: string;
    };
    blogNavi: {
        next: string;
        prev: string;
    };
    langNote: {
        note: string;
        description: string;
    }
}