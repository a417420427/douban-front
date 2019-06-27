<template>
  <div class="movie-title dp-f">
    <span class="title">{{title}}</span>
    <a href="javascript:;" class="more" @click="loadMore">更多</a>
  </div>
</template>
<script>
import { pageNames, selectionData } from "../../../utils/pageHelper";

export default {
  props: {
    row: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    title() {
      return selectionData[this.name][this.row].title;
    },
    sort() {
      return selectionData[this.name][this.row].sort;
    }
  },
  methods: {
    loadMore() {
      this.$router.push({
        name: pageNames[this.name].MORE,
        params: {
          sort: this.sort
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

