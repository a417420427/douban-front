<template>
  <div class="star-rate">
    <ul class="star-rate-wrap">
      <li class="star-item" v-for="i in count" :key="i">
        <svg
          :style="{
          width: `${starWidth}px`
          }"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="200"
          height="200"
        >
          <path
            d="M944.853333 476.202667c18.176-19.584 24.064-46.506667 15.829334-71.936s-28.885333-43.690667-55.082667-48.853334l-210.688-41.642666a21.632 21.632 0 0 1-14.677333-10.666667l-104.704-187.562667c-13.056-23.296-36.821333-37.248-63.530667-37.248s-50.474667 13.909333-63.488 37.290667L343.808 303.104a21.888 21.888 0 0 1-14.677333 10.666667l-210.730667 41.642666c-26.197333 5.205333-46.848 23.466667-55.082667 48.896s-2.346667 52.352 15.829334 71.936l146.005333 157.568a21.546667 21.546667 0 0 1 5.589333 17.194667l-25.514666 213.290667a71.893333 71.893333 0 0 0 29.482666 67.498666 72.106667 72.106667 0 0 0 73.258667 7.168l194.944-90.154666a21.632 21.632 0 0 1 18.090667 0l194.944 90.154666a71.850667 71.850667 0 0 0 73.258666-7.168 71.68 71.68 0 0 0 29.482667-67.498666l-25.514667-213.248a21.333333 21.333333 0 0 1 5.632-17.237334l146.048-157.610666z m-183.509333 122.752a72.618667 72.618667 0 0 0-18.901333 58.112l25.514666 213.290666a21.248 21.248 0 0 1-8.746666 20.010667 21.248 21.248 0 0 1-21.674667 2.133333l-194.944-90.154666a72.490667 72.490667 0 0 0-61.098667 0l-194.944 90.154666a21.162667 21.162667 0 0 1-21.674666-2.133333 21.248 21.248 0 0 1-8.746667-20.010667l25.514667-213.333333a72.704 72.704 0 0 0-18.858667-58.026667l-145.962667-157.525333a21.034667 21.034667 0 0 1-4.693333-21.333333 21.077333 21.077333 0 0 1 16.298667-14.464l210.688-41.642667c20.906667-4.181333 38.912-17.28 49.322666-35.968l104.704-187.562667c5.589333-9.898667 15.061333-11.008 18.858667-11.008s13.269333 1.066667 18.816 11.050667l104.704 187.562667c10.410667 18.688 28.416 31.744 49.408 35.882666l210.688 41.685334a21.12 21.12 0 0 1 16.298667 14.421333 21.248 21.248 0 0 1-4.693334 21.333333l-145.877333 157.525334z"
            fill="#F4BA43"
            p-id="2094"
          ></path>
        </svg>
      </li>
    </ul>
    <ul class="star-rate-wrap cover" :style="{
        width: rateWidth + 'px'
    }">
      <li class="star-item" v-for="i in count" :key="i">
        <svg
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="200"
          height="200"
          :style="{
          width: `${starWidth}px`
      }"
        >
          <path
            d="M354.3 287.7c-7.8 14.6-19.6 24.1-32 25.3l-184.2 26.7c-71 11.8-99 100.3-48.4 153L222.1 626c10.7 11.1 15.7 26 13.1 39.6l-32.1 189c-11.4 73.9 62.4 129.8 125 94.3L492 860.4c13.3-7.7 26.8-7.7 39.5-0.3l164.7 89c62.2 35.3 136-20.7 124.7-94.2l-32-188.9c-1.4-14.8 3.4-30.1 13.3-40.3L934 493c50.9-52.9 22.9-141.4-47.7-153.2l-183.8-26.7c-14.6-3.1-27.3-12.6-32.5-24.7l-81.3-173.7c-31.1-67.7-122.3-67.7-153.5 0.1l-80.9 172.9m0 0z"
            p-id="5040"
            fill="#F4BA43"
          ></path>
        </svg>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "rate",
  props: {
    count: {
      type: Number,
      default: 5
    },
    rate: {
      type: [String, Number],
      required: true
    },
    totalWidth: {
      type: Number,
      default: 100
    }
  },
  computed: {
    starWidth() {
      return this.totalWidth / this.count;
    },
    rateWidth() {
      return ((Number(this.rate) || 0) * this.totalWidth) / 100;
    }
  }
};
</script>

<style lang="scss" scoped>
.star-rate {
  position: relative;
}
.star-rate-wrap {
  display: flex;
  svg {
    width: 100%;
  }
}
.cover {
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  width: 0;
  background: #fff;
}
</style>

