<template>
  <div class="page-movie">
    <CommonSection
      name="movieDetail"
      from="hot"
      :commonList="firstRow"
      title="影院热映"
      :link="{name: 'movie', sort: 'showing'}"
    />
    <CommonSection
      name="movieDetail"
      from="latest"
      title="免费在线观影"
      :link="{name: 'movie', sort: 'free'}"
      :commonList="secondRow"
    />
    <CommonSection
      name="movieDetail"
      from="free"
      :commonList="thirdRow"
      title="新片速递"
      :link="{name: 'movie', sort: 'latest'}"
    />
    <type-list :types="types"/>
    <page-footer/>
  </div>
</template>
<script>
import CommonSection from "../../components/CommonSection";
import { pageNames } from "../../utils/pageHelper";
// 当前页面所需请求
const LINKS = ["showing", "free", "latest"];
export default {
  name: pageNames.movie.MAIN,
  data() {
    return {
      firstRow: [],
      secondRow: [],
      thirdRow: [],
      types: []
    };
  },
  components: {
    CommonSection
  },
  mounted() {
    this.$loading.show();
    Promise.all([
      this.getFirstRow(),
      this.getThirdRow(),
      this.getSecondRow()
    ]).then(() => {
      this.$loading.hide();
    });
    this.getTypes();
  },
  methods: {
    async getRow({ url }) {
      const result = await this.$ajax({ url });
      return result.data.subject_collection_items;
    },
    async getFirstRow() {
      this.firstRow = await this.getRow({ url: "/api/movie/showing" });
    },
    async getSecondRow() {
      this.secondRow = await this.getRow({ url: "/api/movie/free" });
    },
    async getThirdRow() {
      this.thirdRow = await this.getRow({ url: "/api/movie/latest" });
    },
    async getTypes() {
      const result = await this.$ajax({
        url: "/api/movie/types"
      });
      if (result.data.length % 2 !== 0) {
        result.data.push({
          name: "",
          link: "javascrip:;"
        });
      }
      this.types = result.data;
    }
  }
};
</script>
<style lang="scss" scoped>
.page-movie {
  margin-top: 20px;
  box-sizing: border-box;
  padding: 0 18px;
  font-size: 14px;
}
</style>
