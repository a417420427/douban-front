<template>
  <div class="common-section">
    <CommonTitle :row="row" :name="name"/>
    <CommonList :commonList="commonList" :name="name"/>
  </div>
</template>
<script>
import CommonList from "./CommonList";
import CommonTitle from "./CommonTitle";
export default {
  props: {
    commonList: {
      type: Array,
      default: () => []
    },
    row: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  components: {
    CommonTitle,
    CommonList
  }
};
</script>
<style lang="scss" scoped>
.common-section {
  padding-bottom: 20px;
}
</style>

