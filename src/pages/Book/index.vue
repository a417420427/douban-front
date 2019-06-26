<template>
  <div class="page-book">
    <CommonSection
      :name="'bookDetail'"
      :commonList="firstRow"
      title="最受关注图书|虚构类"
      :link="{name: 'book', sort: 'real'}"
    />
    <CommonSection
      :name="'bookDetail'"
      title="最受关注图书|非虚构类"
      :link="{name: 'book', sort: 'list'}"
      :commonList="secondRow"
    />
    <CommonSection
      :name="'bookDetail'"
      :commonList="thirdRow"
      title="豆瓣图书"
      :link="{name: 'book', sort: 'latest'}"
    />
    <type-list :types="types"/>
    <page-footer/>
  </div>
</template>
<script>
import CommonSection from "../../components/CommonSection";
import { pageNames, pageLinks } from "../../utils/pageHelper";

export default {
  name: pageNames.book.MAIN,
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
      this.firstRow = await this.getRow({ url: pageLinks.book.real });
    },
    async getSecondRow() {
      this.secondRow = await this.getRow({ url: pageLinks.book.list });
    },
    async getThirdRow() {
      this.thirdRow = await this.getRow({ url: pageLinks.book.unreal });
    },
    async getTypes() {
      const result = await this.$ajax({
        url: "/api/book/types"
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
      ]);
      this.$loading.hide();
    }
  }
};
</script>
<style lang="scss" scoped>
.page-book {
  margin-top: 20px;
  box-sizing: border-box;
  padding: 0 18px;
  font-size: 14px;
}
</style>
