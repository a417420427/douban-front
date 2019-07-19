<template>
  <div class="page-home" ref="pageHome">
    <div class="page-home-main" @scroll="e => console.log(e, 'xss')">
      <ul class="page-home-banner dp-f">
        <li>
          <router-link to="/movie/more/showing" class="hot">影院热映</router-link>
        </li>
        <li>
          <router-link to="/user" class="user">我的</router-link>
        </li>
        <li>
          <router-link to="/time" class="time">豆瓣时间</router-link>
        </li>
        <li>
          <router-link to="/app" class="app">试用豆瓣APP</router-link>
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
      start: 0,
      isend: false
    };
  },
  components: {
    BaseItem
  },
  methods: {
    getRecommend(start, count) {},
    pageScroll: scrollHandler(function() {
      this.getHomeList(this.start, BASE_COUNT);
    }),
    async getHomeList(start = 0, count = 20) {
      if (this.isend) return;
      this.$loading.show();
      const result = await this.$ajax({
        url: "/api/home/list",
        params: {
          start,
          count
        }
      });
      this.$loading.hide();
      this.recommendList = [...this.recommendList, ...result.data.items];
      this.start += result.data.count;
      this.isend = result.data.count > result.data.new_item_count;
    }
  },
  mounted() {
    this.$refs.pageHome.addEventListener("scroll", this.pageScroll);
    this.getHomeList();
  },
  beforeDestroy() {
    this.$refs.pageHome.removeEventListener("scroll", this.pageScroll);
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
      &:last-child {
        border-bottom: 1px solid transparent;
      }
    }
  }
}
</style>

