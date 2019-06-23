<template>
  <div class="subject-mark dp-f">
    <a href="javascript:;" class="wish">想看</a>
    <a href="javascript:;" class="watched">看过</a>
  </div>
</template>
<script>
export default {
  name: "subject-mark"
};
</script>

<style lang="scss" scoped>
.subject-mark {
  a {
    flex: 1;
    height: 30px;
    line-height: 30px;
    display: block;
    border: 1px solid #ffb712;
    border-radius: 3px;
    margin-right: 10px;
    color: #ffb712;
    font-size: 15px;
    text-align: center;
  }
}
</style>
