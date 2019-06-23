<template>
  <div class="movie-title dp-f">
    <span class="title">{{title}}</span>
    <a class="more" :href="link">更多</a>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.movie-title {
  width: 100%;
  font-size: 18px;
  justify-content: space-between;
  align-items: center;
  .more {
    color: $mainColor;
    font-size: 16px;
  }
}
</style>

