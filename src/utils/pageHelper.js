import { baseName } from "./path";

export const pageLinks = {
    tv: {
        firstRow: '/api/tv/domestic',
        secondRow: '/api/tv/show',
        thirdRow: '/api/tv/american',
        types: '/api/tv/types',
        detail: '/api/tv/detail'
    },
    movie: {
        firstRow: '/api/movie/showing',
        secondRow: '/api/movie/free',
        thirdRow: '/api/movie/latest',
        types: '/api/movie/types',
        detail: '/api/movie/detail'
    },
    book: {
        firstRow: '/api/book/real',
        secondRow: '/api/book/list',
        thirdRow: '/api/book/unreal',
        types: '/api/book/types',
        detail: '/api/book/detail'
    },
    music: {
        firstRow: '/api/music/cn',
        secondRow: '/api/music/uero',
        thirdRow: '/api/music/japan',
        types: '/api/music/types',
        detail: '/api/music/detail'
    }
}


export const selectionData = {
    music: {
        firstRow: {
            title: '国内音乐',
            sort: baseName(pageLinks.music.firstRow)
        },
        secondRow: {
            title: '欧米音乐',
            sort: baseName(pageLinks.music.secondRow)
        },
        thirdRow: {
            title: '日韩音乐',
            sort: baseName(pageLinks.music.thirdRow)
        }
    },
    tv: {
        firstRow: {
            title: '近期值得看的国产',
            sort: baseName(pageLinks.tv.firstRow)
        },
        secondRow: {
            title: '近期值得看的综艺',
            sort: baseName(pageLinks.tv.secondRow)
        },
        thirdRow: {
            title: '近期值得看的美剧',
            sort: baseName(pageLinks.tv.thirdRow)
        }
    },
    movie: {
        firstRow: {
            title: '影院热映',
            sort: baseName(pageLinks.movie.firstRow)
        },
        secondRow: {
            title: '免费在线观影',
            sort: baseName(pageLinks.movie.secondRow)
        },
        thirdRow: {
            title: '新片速递',
            sort: baseName(pageLinks.movie.thirdRow)
        }
    },
    book: {
        firstRow: {
            title: '最受关注图书|虚构类',
            sort: baseName(pageLinks.book.firstRow)
        },
        secondRow: {
            title: '最受关注图书|非虚构类',
            sort: baseName(pageLinks.book.secondRow)
        },
        thirdRow: {
            title: '豆瓣图书',
            sort: baseName(pageLinks.book.thirdRow)
        }
    }
}

export const pageNames = {
    home: {
        MAIN: 'home',
        DETAIL: 'detail'
    },
    tv: {
        MAIN: 'tv',
        DETAIL: 'tvDetail',
        MORE: 'tvMore',
    },
    movie: {
        MAIN: 'movie',
        DETAIL: 'movieDetail',
        MORE: 'movieMore',
        rows: {
            firstRow: 'showing',
            secondRow: 'free',
            thirdRow: 'latest'
        }
    },
    book: {
        MAIN: 'book',
        DETAIL: 'bookDetail',
        MORE: 'bookMore'
    },
    music: {
        MAIN: 'music',
        DETAIL: 'musicDetail',
        MORE: 'musicMore'
    },
}

