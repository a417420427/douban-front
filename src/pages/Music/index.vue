<template>
  <div class="page-music">
    <CommonSection
      :name="'musicDetail'"
      :commonList="firstRow"
      title="国内音乐"
      :link="{name: 'music', sort: 'real'}"
    />
    <CommonSection
      :name="'musicDetail'"
      title="欧米音乐"
      :link="{name: 'music', sort: 'list'}"
      :commonList="secondRow"
    />
    <CommonSection
      :name="'musicDetail'"
      :commonList="thirdRow"
      title="日韩音乐"
      :link="{name: 'music', sort: 'latest'}"
    />
    <type-list :types="types"/>
    <page-footer/>
  </div>
</template>
<script>
import CommonSection from "../../components/CommonSection";
import { pageNames, pageLinks } from "../../utils/pageHelper";

export default {
  name: pageNames.music.MAIN,
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
    this.initPage();
  },
  methods: {
    async getRow({ url }) {
      const result = await this.$ajax({ url });
      return result.data.subject_collection_items;
    },
    async getFirstRow() {
      this.firstRow = await this.getRow({ url: pageLinks.music.firstRow });
    },
    async getSecondRow() {
      this.secondRow = await this.getRow({ url: pageLinks.music.secondRow });
    },
    async getThirdRow() {
      this.thirdRow = await this.getRow({ url: pageLinks.music.thirdRow });
    },
    async getTypes() {
      const result = await this.$ajax({
        url: "/api/music/types"
      });
      if (result.data.length % 2 !== 0) {
        result.data.push({
          name: "",
          link: "javascrip:;"
        });
      }
      this.types = result.data;
    },
    async initPage() {
      this.$loading.show();
      await Promise.all([
        this.getFirstRow(),
        this.getThirdRow(),
        this.getSecondRow(),
        this.getTypes()
      ]).catch(err => {
        console.log(err);
      });
      this.$loading.hide();
    }
  }
};
</script>
<style lang="scss" scoped>
.page-music {
  margin-top: 20px;
  box-sizing: border-box;
  padding: 0 18px;
  font-size: 14px;
}
</style>
