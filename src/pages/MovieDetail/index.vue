<template>
  <div class="movie-detail">
    <h3 class="title" v-html="movieDetail.title"></h3>
    <subject-info class="movie-info" v-if="movieDetail.info" :subjectInfo="movieDetail.info"/>
    <subject-mark class="movie-mark"/>
    <subject-intro class="movie-intro" v-if="movieDetail.intro" :subjectIntro="movieDetail.intro"/>
    <credits class="movie-credits" :creditsList="creditsList"/>
    <interests
      class="movie-interests"
      :interests="interests"
      :interestsTitle="movieDetail.title"
      :interestsTotal="interestsTotal"
    />
    <discuss class="movie-discuss" :discuss="discuss" :discussTotal="discussTotal"/>

    <page-footer/>
  </div>
</template>
<script>
import { getBackground } from "../../utils/files";
import { getDistanceFromTime } from "../../utils/time";
import { pageNames } from "../../utils/pageHelper";

export default {
  name: pageNames.movie.DETAIL,
  data() {
    return {
      movieDetail: {
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
        const movieDetail = await this.$ajax({
          url: `/api/movie/detail/${this.$route.params.id}`
        });
        this.movieDetail = movieDetail.data;
      } catch (e) {
        console.log(e);
      }
    },
    async getCredits() {
      const credits = await this.$ajax({
        url: `/api/movie/detail/${this.$route.params.id}/credits`
      });
      this.credits = credits.data.credits;
    },
    async getInterests() {
      const interests = await this.$ajax({
        url: `/api/movie/detail/${this.$route.params.id}/interests`
      });
      this.interests = interests.data.interests;
      this.interestsTotal = interests.data.total;
    },
    async getDiscuss() {
      const result = await this.$ajax({
        url: `/api/movie/detail/${this.$route.params.id}/topic`
      });
      this.discuss = result.data.forum_topics;
      this.discussTotal = result.data.total;
    }
  }
};
</script>
<style lang="scss" scoped>
.movie-detail {
  box-sizing: border-box;
  padding: 0 18px;
  overflow-y: auto;
  .title {
    margin-top: 30px;
    margin-bottom: 5px;
    font-size: 24px;
  }
  .movie-info {
    margin-bottom: 30px;
  }
  .movie-mark {
    margin-bottom: 30px;
  }
  .movie-credits {
    margin-top: 30px;
    width: 100%;
    overflow-y: auto;
  }
  .movie-interests {
    margin-top: 30px;
  }
  .movie-discuss {
    margin-top: 30px;
  }
}
</style>


