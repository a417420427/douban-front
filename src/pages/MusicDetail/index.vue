<template>
  <CommonDetail name="book"/>
</template>
<script>
import CommonDetail from "../../components/CommonDetail";
import { pageNames } from "../../utils/pageHelper";
export default {
  name: pageNames.book.DETAIL,
  components: {
    CommonDetail
  }
};
</script>

