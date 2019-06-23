<template>
  <div class="page-movie">
    <MovieSection class="movie-hot" from="hot" :movieList="hotList" title="影院热映" link="/a/b"/>
    <MovieSection
      class="movie-latest"
      from="latest"
      title="免费在线观影"
      link="/a/b"
      :movieList="freeList"
    />
    <MovieSection class="movie-free" from="free" :movieList="latestList" title="新片速递" link="/a/b"/>
    <type-list :types="types"/>
    <page-footer/>
  </div>
</template>
<script>
import MovieSection from "./MovieSection";
import { getTransferedImage } from ".././../utils/files";
export default {
  name: "movie",
  data() {
    return {
      hotList: [],
      latestList: [],
      freeList: [],
      types: []
    };
  },
  components: {
    MovieSection
  },
  mounted() {
    this.getHotMovie();
    this.getLatestMovie();
    this.getFreeMovie();
    this.getTypes();
  },
  methods: {
    async getHotMovie() {
      const result = await this.$ajax({
        url: "/api/movie/showing"
      });
      this.hotList = result.data.subject_collection_items;
    },
    async getLatestMovie() {
      const result = await this.$ajax({
        url: "/api/movie/latest"
      });

      this.latestList = result.data.subject_collection_items;
    },
    async getFreeMovie() {
      const result = await this.$ajax({
        url: "/api/movie/free"
      });
      this.freeList = result.data.subject_collection_items;
    },
    async getTypes() {
      const result = await this.$ajax({
        url: "/api/movie/types"
      });
      if (result.data.length % 2 !== 0) {
        result.data.push({
          name: "",
          link: "javascrip:;"
        });
      }

      this.types = result.data;
    }
  }
};
</script>
<style lang="scss" scoped>
.page-movie {
  margin-top: 20px;
  box-sizing: border-box;
  padding: 0 18px;
  font-size: 14px;
}
</style>
