<template>
  <div class="common-section">
    <CommonTitle :title="title" :link="link"/>
    <CommonList :commonList="commonList" :name="name"/>
  </div>
</template>
<script>
import CommonList from "./CommonList";
import CommonTitle from "./CommonTitle";
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    commonList: {
      type: Array,
      default: () => []
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

