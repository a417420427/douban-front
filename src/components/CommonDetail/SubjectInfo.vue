<template>
  <div class="subject-info dp-f">
    <div class="info">
      <div class="score dp-f">
        <rate :rate="subjectInfo.rating.score" :totalWidth="70"/>
        <strong v-html="subjectInfo.rating.score/10"></strong>
        <span class="people" v-html="subjectInfo.rating.people">{{}}</span>
      </div>
      <p class="intro" v-html="subjectInfo.meta"></p>
    </div>
    <div class="cover" v-if="subjectInfo.cover">
      <a href>
        <img :src="getTransferedImage(subjectInfo.cover)" alt>
      </a>
    </div>
  </div>
</template>
<script>
import { getTransferedImage } from "../../utils/files";

export default {
  name: "subject-info",
  props: {
    subjectInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    getTransferedImage
  }
};
</script>
<style lang="scss" scoped>
.subject-info {
  .info {
    flex: 1;
  }
  .score {
    height: 20px;
    line-height: 20px;
    align-items: center;
    font-size: 15px;
    strong {
      margin-left: 5px;
    }
    .people {
      margin-left: 10px;
      color: #aaa;
    }
  }
  .intro {
    margin-top: 15px;
    font-size: 14px;
    line-height: 1.6;
    color: #494949;
  }
  .cover {
    margin-left: 24px;
    width: 100px;
    img {
      width: 100px;
    }
  }
}
</style>


