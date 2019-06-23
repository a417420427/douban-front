<template>
  <div class="movie-section">
    <MovieTitle :title="title" :link="link"/>
    <MovieList :movieList="movieList"/>
  </div>
</template>
<script>
import MovieList from "./MovieList";
import MovieTitle from "./MovieTitle";
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    movieList: {
      type: Array,
      default: []
    }
  },
  components: {
    MovieTitle,
    MovieList
  }
};
</script>
<style lang="scss" scoped>
.movie-section {
  padding-bottom: 20px;
}
</style>

