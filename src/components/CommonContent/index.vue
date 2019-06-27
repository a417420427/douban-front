<template>
  <div class="page-music">
    <CommonSection
      v-for="row in rows"
      :key="row"
      :name="name"
      :row="row"
      :commonList="listDatas[row]"
    />
    <type-list :types="types"/>
    <page-footer/>
  </div>
</template>
<script>
import CommonSection from "./CommonSection";
import { pageNames, pageLinks } from "../../utils/pageHelper";

export default {
  name: "CommonContent",
  data() {
    return {
      listDatas: {
        firstRow: [],
        secondRow: [],
        thirdRow: []
      },
      types: [],
      rows: ["firstRow", "secondRow", "thirdRow"]
    };
  },
  props: {
    name: {
      type: String,
      required: true
    }
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
      this.listDatas.firstRow = await this.getRow({
        url: pageLinks[this.name].firstRow
      });
    },
    async getSecondRow() {
      this.listDatas.secondRow = await this.getRow({
        url: pageLinks[this.name].secondRow
      });
    },
    async getThirdRow() {
      this.listDatas.thirdRow = await this.getRow({
        url: pageLinks[this.name].thirdRow
      });
    },
    async getTypes() {
      const result = await this.$ajax({
        url: pageLinks[this.name].types
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
