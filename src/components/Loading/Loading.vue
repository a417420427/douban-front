<template>
  <transition name="loading-fade" v-if="show">
    <div class="loading-container">
      <div class="loading-mask">
        <div class="loading-icon">
          <FontIcon name="loading"/>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import FontIcon from "../base/FontIcon";
export default {
  name: "loading",
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  components: {
    FontIcon
  }
};
</script>
<style lang="scss" scoped>
.loading-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: createIndex(9, 3);
  .loading-mask {
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 100%, 0.9);
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity 0.3s;
    .loading-icon {
      position: absolute;
      width: 42px;
      height: 42px;
      left: 50%;
      top: 50%;
      margin-left: -21px;
      margin-top: -21px;
    }
    svg {
      height: 42px;
      width: 42px;
      animation: loading-rotate 2s linear infinite;
      color: #aaa;
    }
  }
}
@keyframes loading-rotate {
  to {
    transform: rotate(1turn);
  }
}

.loading-fade-enter-active,
.loading-fade-leave-active {
  transition: opacity 0.5s;
}

.loading-fade-enter,
.loading-fade-leave-to,
.loading-fade-leave-active {
  opacity: 0;
}
</style>
