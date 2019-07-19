<template>
  <div class="page-more" ref="pageMore" @scroll.native="pageScroll">
    <h1 class="title">{{title}}</h1>
    <ul>
      <li v-for="item in sortList" :key="item.id">
        <a @click="getDetail" href="javascript:;" class="dp-f">
          <div class="more-left">
            <img :src="getTransferedImage(item.cover.url)" alt>
          </div>
          <div class="more-right">
            <h3 class="title">{{item.title}}</h3>
            <div v-if="item.rating" class="rate dp-f">
              <rate :rate="item.rating.value*10" :totalWidth="55"/>
              <span>{{item.rating.value}} 分</span>
            </div>
            <span v-else>暂无评分</span>
            <div class="info">{{item.info}}</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { pageNames, pageLinks, selectionData } from "../../utils/pageHelper";
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
    row() {
      const page = selectionData[this.name];
      const currentRow = Object.keys(page).find(
        row => page[row].sort === this.$route.params.sort
      );
      return currentRow;
    },
    link() {
      return pageLinks[this.name][this.row];
    },
    title() {
      return selectionData[this.name][this.row].title;
    }
  },
  mounted() {
    if (!this.row) {
      // TODO 未找到当前分类
      console.log("....");
    }
    this.$refs.pageMore.addEventListener("scroll", this.pageScroll);
    this.getSortData();
  },
  beforeDestroy() {},
  methods: {
    getTransferedImage,
    pageScroll: scrollHandler(function() {
      console.log(this, "xxxx");
      if (this.$loading.isLoaded) {
        this.getSortData(this.start, SORT_COUNT);
      }
    }),
    async getSortData(start = 0, count = 20) {
      if (this.start >= this.total) return;
      this.$loading.show();

      const result = await this.$ajax({
        url: this.link,
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
      this.total = result.data.total;
      this.$loading.hide();
    },
    getDetail() {}
  }
};
</script>
<style lang="scss" scoped>
.page-more {
  box-sizing: border-box;
  font-size: 14px;
  overflow-y: auto;
  padding: 0 2%;
  .more-left {
    width: 100px;
    img {
      width: 100px;
    }
  }
  .more-right {
    flex: 1;
  }
  > .title {
    font-size: 24px;
    padding-top: 20px;
    padding-left: 4%;
    font-weight: normal;
  }
  > ul {
    padding: 0 4%;
    > li {
      padding: 20px 0;
      border-bottom: 1px solid #ccc;
      > a {
        color: $dark;
      }
    }
    .more-left {
      margin-right: 20px;
    }
    .more-right {
      padding-top: 5px;
      > .title {
        font-size: 17px;
      }
      > .rate {
        margin-top: 5px;
        align-items: center;
        line-height: 20px;
        > span {
          margin-left: 5px;
          font-size: 12px;
          color: $light;
        }
      }
      > .info {
        margin-top: 5px;
        color: $light;
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
}
</style>
