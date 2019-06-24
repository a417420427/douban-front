<template>
  <div class="movie-discuss discuss-container">
    <h3 class="discuss-title">{{`讨论(${discussTotal})`}}</h3>
    <ul class="discuss-list">
      <li v-for="item in discuss" :key="item.id">
        <a class="discuss-link" :href="item.sharing_url">
          <h3 class="question">{{item.title}}</h3>
          <p class="answer">{{item.comments_count}} 回应</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "discuss",
  props: {
    discuss: {
      type: Array,
      required: true
    },
    discussTotal: {
      type: [Number, String],
      default: 0
    }
  }
};
</script>
<style lang="scss" scoped>
.discuss-container {
  margin-top: 30px;
  .discuss-title {
    color: $light;
    font-size: 15px;
  }
  .discuss-list {
    li {
      margin-top: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #e8e8e8;
    }
  }
  .discuss-link {
    display: block;
    h3.question {
      font-size: 17px;
      font-weight: 500;
      margin: 0;
      line-height: 1.41;
      color: #494949;
    }
    p.answer {
      font-size: 14px;
      line-height: 1;
      color: #42bd56;
      margin-top: 5px;
    }
  }
}
</style>

