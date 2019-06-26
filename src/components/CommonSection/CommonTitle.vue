<template>
  <div class="movie-title dp-f">
    <span class="title">{{title}}</span>
    <a href="javascript:;" class="more" @click="loadMore">更多</a>
  </div>
</template>
<script>
import { pageNames } from "../../utils/pageHelper";

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: [String, Object],
      required: true
    }
  },
  methods: {
    loadMore() {
      console.log(this.link, "xxxx");
      this.$router.push({
        name: pageNames[this.link.name].MORE,
        params: {
          sort: this.link.sort
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.movie-title {
  width: 100%;
  font-size: 18px;
  justify-content: space-between;
  align-items: center;
  .more {
    color: $mainColor;
    font-size: 16px;
  }
}
</style>

