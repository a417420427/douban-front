<template>
  <div class="page-tv">
    <CommonSection
      name="tvDetail"
      :commonList="firstRow"
      title="近期值得看的国产"
      :link="{name: 'tv', sort: 'domestic'}"
    />
    <CommonSection
      name="tvDetail"
      title="近期值得看的综艺"
      :link="{name: 'tv', sort: 'show'}"
      :commonList="secondRow"
    />
    <CommonSection
      name="tvDetail"
      :commonList="thirdRow"
      title="近期值得看的美剧"
      :link="{name: 'tv', sort: 'american'}"
    />
    <type-list :types="types"/>
    <page-footer/>
  </div>
</template>
<script>
import CommonSection from "../../components/CommonSection";
import { pageLinks, pageNames } from "../../utils/pageHelper.js";
export default {
  name: pageNames.tv.MAIN,
  data() {
    return {
      firstRow: [],
      secondRow: [],
      thirdRow: [],
      types: [],
      links: {}
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
      this.firstRow = await this.getRow({ url: pageLinks.tv.domestic });
    },
    async getSecondRow() {
      this.secondRow = await this.getRow({ url: pageLinks.tv.show });
    },
    async getThirdRow() {
      this.thirdRow = await this.getRow({ url: pageLinks.tv.american });
    },
    async getTypes() {
      const result = await this.$ajax({
        url: pageLinks.tv.types
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
