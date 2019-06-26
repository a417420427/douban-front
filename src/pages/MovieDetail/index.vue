<template>
  <CommonDetail name="movie"/>
</template>
<script>
import CommonDetail from "../../components/CommonDetail";
import { pageNames } from "../../utils/pageHelper";
export default {
  name: pageNames.movie.DETAIL,
  components: {
    CommonDetail
  }
};
</script>

