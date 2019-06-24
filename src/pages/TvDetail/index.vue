<template>
  <div class="tv-detail">
    <h3 class="title" v-html="tvDetail.title"></h3>
    <subject-info class="tv-info" v-if="tvDetail.info" :subjectInfo="tvDetail.info"/>
    <subject-mark class="tv-mark"/>
    <subject-intro class="tv-intro" v-if="tvDetail.intro" :subjectIntro="tvDetail.intro"/>
    <credits class="tv-credits" :creditsList="creditsList"/>
    <interests
      class="tv-interests"
      :interests="interests"
      :interestsTitle="tvDetail.title"
      :interestsTotal="interestsTotal"
    />
    <discuss class="tv-discuss" :discuss="discuss" :discussTotal="discussTotal"/>

    <page-footer/>
  </div>
</template>
<script>
import { getBackground } from "../../utils/files";
import { getDistanceFromTime } from "../../utils/time";

export default {
  name: "tvDetail",
  data() {
    return {
      tvDetail: {
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
        const tvDetail = await this.$ajax({
          url: `/api/tv/detail/${this.$route.params.id}`
        });
        this.tvDetail = tvDetail.data;
      } catch (e) {
        console.log(e);
      }
    },
    async getCredits() {
      const credits = await this.$ajax({
        url: `/api/tv/detail/${this.$route.params.id}/credits`
      });
      this.credits = credits.data.credits;
    },
    async getInterests() {
      const interests = await this.$ajax({
        url: `/api/tv/detail/${this.$route.params.id}/interests`
      });
      this.interests = interests.data.interests;
      this.interestsTotal = interests.data.total;
    },
    async getDiscuss() {
      const result = await this.$ajax({
        url: `/api/tv/detail/${this.$route.params.id}/topic`
      });
      this.discuss = result.data.forum_topics;
      this.discussTotal = result.data.total;
    }
  }
};
</script>
<style lang="scss" scoped>
.tv-detail {
  box-sizing: border-box;
  padding: 0 18px;
  overflow-y: auto;
  .title {
    margin-top: 30px;
    margin-bottom: 5px;
    font-size: 24px;
  }
  .tv-info {
    margin-bottom: 30px;
  }
  .tv-mark {
    margin-bottom: 30px;
  }
  .tv-credits {
    margin-top: 30px;
    width: 100%;
    overflow-y: auto;
  }
  .tv-interests {
    margin-top: 30px;
  }
  .tv-discuss {
    margin-top: 30px;
  }
}
</style>


