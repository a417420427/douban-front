<template>
  <div class="page-book">
    <CommonSection name="book" from="hot" :commonList="firstRow" title="最受关注图书|虚构类" link="/a/b"/>
    <CommonSection
      name="book"
      from="latest"
      title="最受关注图书|非虚构类"
      link="/a/b"
      :commonList="secondRow"
    />
    <CommonSection name="book" from="free" :commonList="thirdRow" title="豆瓣图书" link="/a/b"/>
    <type-list :types="types"/>
    <page-footer/>
  </div>
</template>
<script>
import CommonSection from "../../components/CommonSection";
export default {
  name: "book",
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
      this.firstRow = await this.getRow({ url: "/api/book/real" });
    },
    async getSecondRow() {
      this.secondRow = await this.getRow({ url: "/api/book/list" });
    },
    async getThirdRow() {
      this.thirdRow = await this.getRow({ url: "/api/book/unreal" });
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
