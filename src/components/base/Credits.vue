<template>
  <div class="credits-container">
    <h3 class="title">影人</h3>
    <ul class="credits-list dp-f">
      <li v-for="credit in creditsList" :key="credit.id">
        <img :src="credit.cover_url" class="cover">
        <p class="name">{{credit.name}}</p>
        <span class="role">{{credit.roles[0]}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "credits",
  props: {
    creditsList: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.credits-container {
  width: 100%;
  overflow-y: auto;
  .title {
    font-size: 15px;
    color: #aaa;
  }
  .credits-list {
    margin-top: 15px;
    font-size: 14px;
    li {
      margin-left: 8px;
      width: 75px;
      &:first-child {
        margin-left: 0;
      }
      img {
        width: 75px;
      }
      span,
      p {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        font-size: 14px;
        line-height: 1.5;
        white-space: normal;
        text-align: center;
        color: #494949;
        margin-top: 8px;
      }
      span {
        color: #aaa;
      }
    }
  }
}
</style>

