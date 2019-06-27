import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/index.vue'
import HomeDetail from '../pages/HomeDetail/index.vue'
import Movie from '../pages/Movie/index.vue'
import MovieMore from '../pages/MovieMore/index.vue'
import MovieDetail from '../pages/MovieDetail/index.vue'
import Book from '../pages/Book/index.vue'
import BookMore from '../pages/BookMore/index.vue'
import BookDetail from '../pages/BookDetail/index.vue'
import Tv from '../pages/Tv/index.vue'
import TvMore from '../pages/TvMore/index.vue'
import TvDetail from '../pages/TvDetail/index.vue'
import Music from '../pages/Music/index.vue'
import MusicMore from '../pages/MusicMore/index.vue'
import MusicDetail from '../pages/MusicDetail/index.vue'
import { pageNames } from '../utils/pageHelper';

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: pageNames.home.MAIN
    },
    {
      path: '/note/:id',
      component: HomeDetail,
      name: pageNames.home.DETAIL
    },
    {
      path: '/movie',
      component: Movie,
      name: pageNames.movie.MAIN
    },
    {
      path: '/movie/:id',
      component: MovieDetail,
      name: pageNames.movie.DETAIL
    },
    {
      path: '/movie/more/:sort',
      component: MovieMore,
      name: pageNames.movie.MORE
    },
    {
      path: '/book',
      component: Book,
      name: pageNames.book.MAIN
    },
    {
      path: '/book/:id',
      component: BookDetail,
      name: pageNames.book.DETAIL
    },
    {
      path: '/book/more/:sort',
      component: BookMore,
      name: pageNames.book.MORE
    },
    {
      path: '/tv',
      component: Tv,
      name: pageNames.tv.MAIN
    },
    {
      path: '/tv/:id',
      component: TvDetail,
      name: pageNames.tv.DETAIL
    },
    {
      path: '/tv/more/:sort',
      component: TvMore,
      name: pageNames.tv.MORE
    },
    {
      path: '/music',
      component: Music,
      name: pageNames.music.MAIN
    },
    {
      path: '/music/:id',
      component: MusicDetail,
      name: pageNames.music.DETAIL
    },
    {
      path: '/music/more/:sort',
      component: MusicMore,
      name: pageNames.music.MORE
    }
  ]
})
