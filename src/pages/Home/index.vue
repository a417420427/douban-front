<template>
  <div class="page-home">
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
    <div class="page-home-main">
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
export default {
  name: "Home",
  data() {
    return {
      recommendList: []
    };
  },
  components: {
    BaseItem
  },
  methods: {
    getRecommend(start, count) {}
  },
  mounted() {
    this.$ajax({
      url: "/api/home/list"
    }).then(res => {
      this.recommendList = res.data.items;
    });
  }
};
</script>

<style lang="scss" scoped>
.page-home {
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
    overflow-y: auto;
    .base-item {
      margin: 25px 20px;
      border-bottom: 1px solid #e3e3e3;
    }
  }
}
</style>

