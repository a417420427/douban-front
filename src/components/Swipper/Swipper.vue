<template>
  <div class="swipper-banner">
    <div
      class="swipper-main"
      ref="scrollContainer"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
    >
      <ul
        v-if="list"
        :style="scrollStyle"
        :class="{isActive: isScrollActive}"
        class="swipper-wrapper dp-f"
      >
        <li v-if="pre">
          <img :src="getTransferedImage(pre.cover_url)" alt>
        </li>
        <li
          v-for="(banner, index) in list"
          :key="banner.cover_url"
          :class="{isActive: isActive(index)}"
        >
          <img :src="getTransferedImage(banner.cover_url)" alt>
        </li>
        <li v-if="next">
          <img :src="getTransferedImage(next.cover_url)" alt>
        </li>
      </ul>
    </div>
    <ul class="swipper-icon dp-f">
      <li
        v-for="(banner, index) in list"
        :key="banner.cover_url"
        @click="currentIndex = index"
        :class="{active: isActive(index) }"
      ></li>
    </ul>
  </div>
</template>
<script>
import { getTransferedImage } from "../../utils/files";
export default {
  name: "swipper",
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      isScrollActive: true,
      touchPosition: {
        startX: 0,
        endX: 0
      },
      isTouched: false,
      isTouching: false
    };
  },
  computed: {
    pre() {
      return this.list[this.list.length - 1];
    },
    next() {
      return this.list[0];
    },
    clientWidth() {
      const scrollContainer = this.$refs.scrollContainer;
      return scrollContainer ? scrollContainer.clientWidth : 375;
    },
    scrollStyle() {
      const offset = this.isTouching
        ? this.touchPosition.startX - this.touchPosition.endX
        : 0;
      return `width: ${this.list.length + 2}00%; transform: translate3d(-${this
        .clientWidth *
        (this.currentIndex + 1) +
        offset * 2}px, 0, 0)`;
    }
  },
  methods: {
    getTransferedImage,
    isActive(index) {
      return (
        (this.currentIndex + this.list.length) % this.list.length === index
      );
    },
    async touchmove(e) {
      this.touchPosition.endX = e.changedTouches[0].pageX;
      const distance = this.touchPosition.startX - this.touchPosition.endX;
      this.isTouching = true;
      if (!this.isTouched) {
        if (Math.abs(distance) > this.clientWidth / 4) {
          this.isTouched = true;
          if (this.currentIndex === -1 && distance < 0) {
            this.currentIndex = this.list.length - 1;
            this.isScrollActive = false;
            await this.$nextTick();
            this.isScrollActive = true;
          } else if (
            this.currentIndex === this.list.length - 1 &&
            distance > 0
          ) {
            this.currentIndex = -1;
            this.isScrollActive = false;
            await this.$nextTick();
            this.isScrollActive = true;
          }
          const currentIndex =
            distance > 0 ? this.currentIndex + 1 : this.currentIndex - 1;
          this.currentIndex = currentIndex % this.list.length;
        }
      }
    },
    touchend() {
      this.touchPosition.startX = 0;
      this.touchPosition.endX = 0;
      this.isTouched = false;
      this.isTouching = false;
    },
    touchstart(e) {
      this.touchPosition.startX = e.changedTouches[0].pageX;
    }
  }
};
</script>
<style lang="scss" scoped>
.swipper-banner {
  position: relative;
}
.swipper-main {
  overflow-x: hidden;
  width: 100%;
  position: relative;
}
.swipper-wrapper {
  flex-wrap: nowrap;
  //transform: translateX(-375px);
  li {
    width: 100%;
    text-align: center;
  }
  img {
    max-width: 90%;
  }
}
.swipper-wrapper.isActive {
  transition: transform ease 0.5s;
}
.swipper-icon {
  position: absolute;
  left: 0;
  bottom: 20px;
  width: 100%;
  justify-content: center;
  li {
    background: $dark;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-left: 10px;
  }
  li.active {
    background: $light;
  }
}
</style>


