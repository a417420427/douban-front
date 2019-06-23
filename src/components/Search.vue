<template>
  <div class="page-search">
    <div class="search-header dp-f">
      <div class="search-close" @click="$emit('click', false)">关闭</div>
      <div class="search-content">
        <b-input @click="iconVisiable=false" @blur="iconVisiable=false"/>
        <FontIcon v-if="iconVisiable" name="search"/>
      </div>
    </div>
    <div class="search-list">
      <ul class="menu dp-f">
        <li @click="itemClick(item.link)" v-for="item in menu" :key="item.name">
          <a :href="item.href" class="name" :style="{color: item.color}">{{item.name}}</a>
          <p class="desc">{{item.desc}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      iconVisiable: true,
      menu: []
    };
  },
  methods: {
    async getMenu() {
      const result = await this.$ajax({
        url: "/api/home/menu"
      });
      this.menu = result.data;
    },
    itemClick(name) {
      this.$router.push({ name });
      this.$emit("click", false);
    }
  },
  mounted() {
    this.getMenu();
  }
};
</script>

<style lang="scss" scoped>
.page-search {
  position: fixed;
  z-index: createIndex(9, 0);
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 18px;
  background: #fff;
  .search-header {
    height: 48px;
    align-items: center;
  }
  .search-close {
    margin-right: 20px;
    color: #42bd56;
    font-size: 16px;
  }
  .search-content {
    position: relative;
    height: 100%;
    flex: 1;
    svg {
      position: absolute;
      left: 50%;
      top: 14px;
      margin-left: -10px;
      width: 20px;
      height: 20px;
      color: #666;
    }
    input {
      margin-top: 8px;
      width: 100%;
      height: 30px;
      background: #f4f4f4;
    }
  }
  .search-list {
    width: 100%;
    .menu {
      margin: 10px 0 20px;
      flex-wrap: wrap;
      width: 100%;
    }
    li {
      width: 33%;
      padding-top: 20px;
      text-align: center;
    }
    .name {
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
    }
    .desc {
      color: #999;
      line-height: 18px;
      font-size: 12px;
      letter-spacing: 1px;
    }
  }
}
</style>

