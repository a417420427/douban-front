<template>
  <div class="page-header dp-f">
    <div class="pg-hd-left">
      <div class="logo">
        <img src="../assets/images/douban.png" alt>
      </div>
    </div>
    <div class="pg-hd-right dp-f">
      <FontIcon class="search" name="sousuo" @click="$emit('click', true)"/>
      <div class="client">打开豆瓣App</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppHeader",
  data() {
    return {
      searchVisiable: false
    };
  },
  methods: {
    showSearch() {}
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  position: fixed;
  z-index: createIndex(9, 0);
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  padding: 0 24px;
  box-sizing: border-box;
  align-items: center;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  .pg-hd-left {
    margin-right: 24px;
    .logo {
      img {
        height: 22px;
      }
    }
  }
  .pg-hd-right {
    flex: 1;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    .search {
      color: #51b334;
    }
    .client {
      background-color: #42bd56;
      color: #fff;
      font-size: 12px;
      line-height: 1;
      padding: 8px 13px;
      border-radius: 6px;
      font-weight: 500;
    }
  }
}
</style>

