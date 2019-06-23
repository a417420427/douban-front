<template>
  <li>
    <div class="multiple-pic" v-if="isMultiple">
      <div class="collect-area dp-f">
        <div class="pic-main">
          <div class="main-wrap" :style="srcMain"></div>
        </div>
        <div class="pic-aside">
          <div :style="srcAside[0]" class="aside-wrap"></div>
          <div :style="srcAside[1]" class="aside-wrap"></div>
        </div>
      </div>
    </div>
    <h3 class="base-title">{{content.title}}</h3>
    <div class="base-content dp-f">
      <p class="content">{{content.abstract}}</p>
      <div v-if="isSingle" class="single-pic" :style="srcMain"></div>
    </div>
    <div class="base-author">by {{content.author.name}}</div>
  </li>
</template>
<script>
import { getBackground } from ".././../utils/files";
export default {
  name: "BaseItem",
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  computed: {
    isMultiple() {
      return this.content.photos.length > 2;
    },
    isSingle() {
      return !this.isMultiple && this.content.photos.length > 0;
    },
    srcMain() {
      return getBackground(this.content.photos[0].image.normal.url);
    },
    srcAside() {
      return [
        getBackground(this.content.photos[1].image.normal.url),
        getBackground(this.content.photos[2].image.normal.url)
      ];
    }
  },
  methods: {
    background(source) {
      return `background-image: url(${source})`;
    }
  }
};
</script>

<style lang="scss" scoped>
.collect-area {
  .pic-main {
    box-sizing: border-box;
    padding-right: 10px;
    flex: 2.4;
    .main-wrap {
      width: 100%;
      height: 160px;
      background-size: cover;
    }
  }
  .pic-aside {
    flex: 1;
    .aside-wrap {
      width: 100%;
      height: 75px;
      background-size: cover;
      &:first-child {
        margin-bottom: 5px;
      }
    }
  }
}
.base-title {
  margin-top: 10px;
  text-align: justify;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.41;
  color: #494949;
  margin-bottom: 6px;
}
.base-content {
  margin-top: 10px;
  box-sizing: border-box;
  p {
    flex: 1;
    text-align: justify;
    color: #aaa;
    font-size: 12px;
    line-height: 1.5;
    line-height: 18px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    word-wrap: break-word;
    max-height: 54px;
  }
  .single-pic {
    width: 86px;
    height: 86px;
    margin-left: 25px;
  }
}
.base-author {
  margin-top: 10px;
  margin-bottom: 25px;
  color: #999;
  font-size: 12px;
  line-height: 24px;
}
</style>
