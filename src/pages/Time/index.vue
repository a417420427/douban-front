<template>
  <div class="time-page">
    <swipper class="time-banner" v-if="banners" :list="banners"/>
    <div class="time-nav">
      <ul class="dp-f">
        <li>
          <a href="javascript:;">
            <img src="../../assets/images/time-school.svg" alt>
            <p>青椒学院</p>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="../../assets/images/time-find.svg" alt>
            <p>时间发现</p>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="../../assets/images/time-all.svg" alt>
            <p>全部专栏</p>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="../../assets/images/time-sign.svg" alt>
            <p>签到</p>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="../../assets/images/time-mine.svg" alt>
            <p>我的</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { pageNames } from "../../utils/pageHelper";
import { getTransferedImage } from "../../utils/files";
import Swipper from "../../components/Swipper/Swipper";
export default {
  name: pageNames.time.MAIN,
  data() {
    return {
      modules: []
    };
  },
  computed: {
    banners() {
      const target = this.modules.find(v => v.type === "banner");
      return target && target.items;
    }
  },
  components: {
    Swipper
  },
  mounted() {
    this.getModules();
  },
  methods: {
    async getModules() {
      const result = await this.$ajax({
        url: "/api/time/modules"
      });
      this.modules = result.data.modules;
    }
  }
};
</script>
<style lang="scss" scoped>
.time-page {
  .time-banner {
    margin-top: 20px;
  }
  .time-nav {
    margin-top: 30px;
    ul {
      justify-content: space-between;
      padding: 0 20px;
    }
    li {
      height: 80px;
      text-align: center;
      img {
        width: 42px;
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #aaa;
      }
    }
  }
}
</style>


