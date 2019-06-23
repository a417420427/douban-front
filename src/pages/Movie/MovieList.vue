<template>
  <div class="movie-list-wrap">
    <ul
      class="movie-list clearfix"
      :style="{
          width: movieList.length * 120 + 'px'
      }"
    >
      <li @click="enterMovie(item.id)" class="fl-l" v-for="item in movieList" :key="item.id">
        <div class="item-pic" :style="background(item.cover.url)"></div>
        <h4 class="item-title css-ellipsis">{{item.title}}</h4>
        <div class="item-rate dp-f" v-if="item.rating">
          <rate class="item-rate-visual" :rate="item.rating.value*10" :totalWidth="50"/>
          <span class="rate-number">{{item.rating.value}}</span>
        </div>
        <div class="item-rate-none" v-else>暂无评分</div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getBackground } from "../../utils/files";

export default {
  props: {
    movieList: {
      type: Array,
      default: []
    }
  },
  methods: {
    background(src) {
      return getBackground(src);
    },
    enterMovie(id) {
      this.$router.push({
        name: "movieDetail",
        params: {
          id
        }
      });
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.movie-list-wrap {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}
.movie-list {
  margin-top: 18px;
  height: 188px;
  li {
    height: 188px;
    width: 100px;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
  .item-pic {
    height: 142px;
    background-size: cover;
  }
  .item-title {
    margin-top: 8px;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    width: 100%;
    text-align: center;
  }
  .item-rate {
    box-sizing: border-box;
    padding: 5px 10px 0;
    width: 100%;
    align-items: center;
  }
  .item-rate-none {
    margin-top: 5px;
    width: 100%;
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    color: #aaa;
  }
  .item-rate-visual {
    width: 80px;
    margin: 0 auto;
  }
  .rate-number {
    font-size: 12px;
    color: #aaa;
  }
}
</style>


