import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/index.vue'
import Movie from '../pages/Movie/index.vue'
import Book from '../pages/Book/index.vue'
import BookDetail from '../pages/BookDetail/index.vue'
import Tv from '../pages/Tv/index.vue'
import TvDetail from '../pages/TvDetail/index.vue'
import MovieDetail from '../pages/MovieDetail/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/movie',
      component: Movie,
      name: 'movie'
    },
    {
      path: '/movie/:id',
      component: MovieDetail,
      name: MovieDetail.name
    },
    {
      path: '/book',
      component: Book,
      name: 'book'
    },
    {
      path: '/book/:id',
      component: BookDetail,
      name: BookDetail.name
    },
    {
      path: '/tv',
      component: Tv,
      name: 'tv'
    },
    {
      path: '/tv/:id',
      component: TvDetail,
      name: TvDetail.name
    },
  ]
})
