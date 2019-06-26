<template>
  <div class="common-detail">
    <h3 class="title" v-html="commonDetail.title"></h3>
    <subject-info class="common-info" v-if="commonDetail.info" :subjectInfo="commonDetail.info"/>
    <subject-mark class="common-mark"/>
    <subject-intro
      class="common-intro"
      v-if="commonDetail.intro"
      :subjectIntro="commonDetail.intro"
    />
    <!-- <credits class="common-credits" :creditsList="creditsList"/> -->
    <interests
      class="common-interests"
      :interests="interests"
      :interestsTitle="commonDetail.title"
      :interestsTotal="interestsTotal"
    />
    <discuss class="common-discuss" :discuss="discuss" :discussTotal="discussTotal"/>

    <page-footer/>
  </div>
</template>
<script>
import SubjectInfo from "./SubjectInfo";
import SubjectIntro from "./SubjectIntro";
import SubjectMark from "./SubjectMark";
import Interests from "./Interests";
import Discuss from "./Discuss";
// import Credits from './Credits'
import { getBackground } from "../../utils/files";
import { getDistanceFromTime } from "../../utils/time";
import { pageLinks } from "../../utils/pageHelper";

export default {
  name: "commonDetail",
  data() {
    return {
      commonDetail: {
        rating: {
          people: "暂无评分",
          score: 0
        },
        title: ""
      },
      credits: [],
      interests: [],
      interestsTotal: 0,
      discuss: [],
      discussTotal: 0
    };
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  components: {
    SubjectInfo,
    SubjectIntro,
    SubjectMark,
    Interests,
    Discuss
  },
  computed: {
    creditsList() {
      const list = [];
      this.credits.forEach(credit => {
        if (credit.celebrities && credit.celebrities.length > 0) {
          credit.celebrities.forEach(celebritie => {
            list.push(celebritie);
          });
        }
      });
      return list;
    }
  },
  mounted() {
    this.getDetail();
    this.getCredits();
    this.getInterests();
    this.getDiscuss();
  },
  methods: {
    getBackground,
    getDistanceFromTime,
    async getDetail() {
      try {
        const commonDetail = await this.$ajax({
          url: `${pageLinks[this.name].detail}/${this.$route.params.id}`
        });
        this.commonDetail = commonDetail.data;
      } catch (e) {
        console.log(e);
      }
    },
    async getCredits() {
      const credits = await this.$ajax({
        url: `${pageLinks[this.name].detail}/${this.$route.params.id}/credits`
      });
      this.credits = credits.data.credits;
    },
    async getInterests() {
      const interests = await this.$ajax({
        url: `${pageLinks[this.name].detail}/${this.$route.params.id}/interests`
      });
      this.interests = interests.data.interests;
      this.interestsTotal = interests.data.total;
    },
    async getDiscuss() {
      const result = await this.$ajax({
        url: `${pageLinks[this.name].detail}/${this.$route.params.id}/topic`
      });
      this.discuss = result.data.forum_topics;
      this.discussTotal = result.data.total;
    }
  }
};
</script>
<style lang="scss" scoped>
.common-detail {
  box-sizing: border-box;
  padding: 0 18px;
  overflow-y: auto;
  .title {
    margin-top: 30px;
    margin-bottom: 5px;
    font-size: 24px;
  }
  .common-info {
    margin-bottom: 30px;
  }
  .common-mark {
    margin-bottom: 30px;
  }
  .common-credits {
    margin-top: 30px;
    width: 100%;
    overflow-y: auto;
  }
  .common-interests {
    margin-top: 30px;
  }
  .common-discuss {
    margin-top: 30px;
  }
}
</style>


