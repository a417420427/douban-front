<template>
  <div class="type-list-container">
    <h3 class="type-title">分类浏览</h3>
    <ul class="type-list dp-f">
      <li v-for="(type, index) in types" :key="type.name">
        <a :href="type.link" class="dp-f" :class="{isOdd: index % 2 === 0}">
          <span>{{type.name}}</span>
          <FontIcon name="arrow-right"/>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "type-list",
  props: {
    types: {
      type: Array,
      default: []
    }
  }
};
</script>
<style lang="scss" scoped>
.type-list-container {
  margin-top: 30px;
  .type-title {
    font-size: 24px;
  }
  .type-list {
    flex-wrap: wrap;
    margin-top: 18px;
    border-bottom: 1px solid #eee;
    li {
      width: 50%;

      a {
        box-sizing: border-box;
        width: 100%;
        height: 42px;
        padding: 0 8px;
        line-height: 42px;
        font-size: 14px;
        align-items: center;
        justify-content: space-between;
        border-top: solid 1px #eee;
        span {
          color: #42bd56;
        }
        svg {
          color: #ccc;
          background: #fff;
          margin-right: -2px;
        }
      }
      a.isOdd {
        border-right: solid 1px #eee;
      }
    }
  }
}
</style>
