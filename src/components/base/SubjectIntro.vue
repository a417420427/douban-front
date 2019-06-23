<template>
  <div class="subject-intro" v-if="subjectIntro">
    <h3 class="title" v-html="subjectIntro.title"></h3>
    <p v-html="subjectIntro.content"></p>
  </div>
</template>
<script>
export default {
  name: "subject-intro",
  props: {
    subjectIntro: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.subject-intro {
  h3 {
    color: #aaa;
    font-size: 15px;
  }
  p {
    margin-top: 15px;
    font-size: 15px;
    line-height: 22px;
    color: #494949;
  }
}
</style>
