<template>
  <div class="page-more" @scroll="pageScroll">
    <h1 class="title">标题</h1>
    <ul>
      <li v-for="item in sortList" :key="item.id" class="dp-f">
        <div class="more-left">
          <img :src="getTransferedImage(item.cover.url)" alt>
        </div>
        <div class="more-right">
          <h3 class="title">{{item.title}}</h3>
          <rate v-if="item.rating" :rate="item.rating.value*10" :totalWidth="70"/>
          <span v-else>暂无评分</span>
          <div class="info">{{item.info}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { pageNames, pageLinks } from "../../utils/pageHelper";
import { getTransferedImage, scrollHandler } from "../../utils/files";
const SORT_COUNT = 20;
export default {
  data() {
    return {
      sortList: [],
      start: 0
    };
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  beforeCreate() {
    console.log(this);
  },
  computed: {
    sort() {
      return this.$route.params.sort;
    }
  },
  mounted() {
    this.getSortData();
  },
  methods: {
    getTransferedImage,
    pageScroll: scrollHandler(() => {
      this.getSortData({
        start: this.start,
        count: SORT_COUNT
      });
    }),
    async getSortData(start = 0, count = 20) {
      this.$loading.show();
      const result = await this.$ajax({
        url: pageLinks[this.name][this.sort],
        params: {
          start,
          count
        }
      });
      this.sortList = [
        ...this.sortList,
        ...result.data.subject_collection_items
      ];
      this.start += result.data.count;
      this.$loading.hide();
    }
  }
};
</script>
<style lang="scss" scoped>
.page-more {
  font-size: 14px;
  overflow-y: auto;
  .more-left {
    width: 100px;
    img {
      width: 100px;
    }
  }
  .more-right {
    flex: 1;
  }
}
</style>
