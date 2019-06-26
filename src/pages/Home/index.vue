<template>
  <div class="page-home" @scroll="pageScroll">
    <div class="page-home-main">
      <ul class="page-home-banner dp-f">
        <li>
          <a href="/movie" class="hot">影院热映</a>
        </li>
        <li>
          <a href="/user" class="user">我的</a>
        </li>
        <li>
          <a href="/time" class="time">豆瓣时间</a>
        </li>
        <li>
          <a href="/app" class="app">试用豆瓣APP</a>
        </li>
      </ul>
      <ul class="recommend-list">
        <li
          class="base-item"
          v-for="item in recommendList"
          :key="item.id"
          is="BaseItem"
          :content="item.content"
        ></li>
      </ul>
    </div>
  </div>
</template>
<script>
import BaseItem from "./BaseItem";
import debounce from "lodash.debounce";
import { scrollHandler } from "../../utils/files";

// 每次列表增加数量
const BASE_COUNT = 20;
export default {
  name: "Home",
  data() {
    return {
      recommendList: [],
      start: 0
    };
  },
  components: {
    BaseItem
  },
  methods: {
    getRecommend(start, count) {},
    pageScroll: scrollHandler(() => {
      this.getHomeList({
        start: this.start,
        count: BASE_COUNT
      });
    }),
    async getHomeList(params = {}) {
      this.$loading.show();
      const result = await this.$ajax({
        url: "/api/home/list",
        params
      });
      this.recommendList = [...this.recommendList, ...result.data.items];
      this.start += result.data.count;
      this.$loading.hide();
    }
  },
  mounted() {
    this.getHomeList();
  }
};
</script>

<style lang="scss" scoped>
.page-home {
  overflow-y: auto;
  .page-home-banner {
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: center;
    li {
      box-sizing: border-box;
      width: 50%;
      padding: 5px;
    }
    a {
      display: block;
      width: 100%;
      font-size: 16px;
      line-height: 44px;
      text-align: center;
      background: #f6f6f6;
      color: #494949;
    }
  }
  .page-home-main {
    .base-item {
      margin: 25px 20px;
      border-bottom: 1px solid #e3e3e3;
    }
  }
}
</style>

