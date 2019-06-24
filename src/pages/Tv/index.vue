<template>
  <div class="page-tv">
    <CommonSection name="tv" from="hot" :commonList="firstRow" title="近期值得看的国产" link="/a/b"/>
    <CommonSection name="tv" from="latest" title="近期值得看的综艺" link="/a/b" :commonList="secondRow"/>
    <CommonSection name="tv" from="free" :commonList="thirdRow" title="近期值得看的美剧" link="/a/b"/>
    <type-list :types="types"/>
    <page-footer/>
  </div>
</template>
<script>
import CommonSection from "../../components/CommonSection";
export default {
  name: "tv",
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
    this.getFirstRow();
    this.getThirdRow();
    this.getSecondRow();
    this.getTypes();
  },
  methods: {
    async getRow({ url }) {
      const result = await this.$ajax({ url });
      return result.data.subject_collection_items;
    },
    async getFirstRow() {
      this.firstRow = await this.getRow({ url: "/api/tv/domestic" });
    },
    async getSecondRow() {
      this.secondRow = await this.getRow({ url: "/api/tv/show" });
    },
    async getThirdRow() {
      this.thirdRow = await this.getRow({ url: "/api/tv/american" });
    },
    async getTypes() {
      const result = await this.$ajax({
        url: "/api/tv/types"
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
.page-tv {
  margin-top: 20px;
  box-sizing: border-box;
  padding: 0 18px;
  font-size: 14px;
}
</style>
