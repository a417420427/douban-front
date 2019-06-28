<template>
  <transition name="message">
    <div
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      v-if="visiable"
      class="message-container"
      :style="positionStyle"
    >
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="el-message__content">{{ message }}</p>
        <p v-else v-html="message" class="el-message__content"></p>
      </slot>
      <i v-if="showClose" class="message-close" @click="close"></i>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      message: "",
      duration: 3000,
      type: "info",
      iconClass: "",
      customClass: "",
      onClose: null,
      showClose: false,
      closed: false,
      verticalOffset: 20,
      timer: null,
      dangerouslyUseHTMLString: false,
      center: false
    };
  },
  computed: {
    positionStyle() {
      return {
        top: `${this.verticalOffset}px`
      };
    }
  },
  mounted() {
    this.startTimer();
    document.addEventListener("keydown", this.keydown);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.keydown);
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },

    close() {
      this.closed = true;
      if (typeof this.onClose === "function") {
        this.onClose(this);
      }
    },

    clearTimer() {
      clearTimeout(this.timer);
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
    keydown(e) {
      if (e.keyCode === 27) {
        // esc关闭消息
        if (!this.closed) {
          this.close();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.message-enter-active,
.message-leave-active {
  transition: opacity 0.5s;
}
.message-enter, .message-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.message-container {
  font-size: 14px;
  min-width: 380px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: #ebeef5;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  background-color: #edf2fc;
  transition: opacity 0.3s, top 0.4s, -webkit-transform 0.4s;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  transition: opacity 0.3s, transform 0.4s, top 0.4s, -webkit-transform 0.4s;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;
  border-radius: 4px;
}

@media screen and (max-width: 375px) {
  .message-container {
    min-width: 150px;
  }
}
</style>
