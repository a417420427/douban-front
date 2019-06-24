<template>
  <div class="book-detail">
    <h3 class="title" v-html="bookDetail.title"></h3>
    <subject-info class="book-info" v-if="bookDetail.info" :subjectInfo="bookDetail.info"/>
    <subject-mark class="book-mark"/>
    <subject-intro class="book-intro" v-if="bookDetail.intro" :subjectIntro="bookDetail.intro"/>
    <!-- <credits class="book-credits" :creditsList="creditsList"/> -->
    <interests
      class="book-interests"
      :interests="interests"
      :interestsTitle="bookDetail.title"
      :interestsTotal="interestsTotal"
    />
    <discuss class="book-discuss" :discuss="discuss" :discussTotal="discussTotal"/>

    <page-footer/>
  </div>
</template>
<script>
import { getBackground } from "../../utils/files";
import { getDistanceFromTime } from "../../utils/time";

export default {
  name: "bookDetail",
  data() {
    return {
      bookDetail: {
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
        const bookDetail = await this.$ajax({
          url: `/api/book/detail/${this.$route.params.id}`
        });
        this.bookDetail = bookDetail.data;
      } catch (e) {
        console.log(e);
      }
    },
    async getCredits() {
      const credits = await this.$ajax({
        url: `/api/book/detail/${this.$route.params.id}/credits`
      });
      this.credits = credits.data.credits;
    },
    async getInterests() {
      const interests = await this.$ajax({
        url: `/api/book/detail/${this.$route.params.id}/interests`
      });
      this.interests = interests.data.interests;
      this.interestsTotal = interests.data.total;
    },
    async getDiscuss() {
      const result = await this.$ajax({
        url: `/api/book/detail/${this.$route.params.id}/topic`
      });
      this.discuss = result.data.forum_topics;
      this.discussTotal = result.data.total;
    }
  }
};
</script>
<style lang="scss" scoped>
.book-detail {
  box-sizing: border-box;
  padding: 0 18px;
  overflow-y: auto;
  .title {
    margin-top: 30px;
    margin-bottom: 5px;
    font-size: 24px;
  }
  .book-info {
    margin-bottom: 30px;
  }
  .book-mark {
    margin-bottom: 30px;
  }
  .book-credits {
    margin-top: 30px;
    width: 100%;
    overflow-y: auto;
  }
  .book-interests {
    margin-top: 30px;
  }
  .book-discuss {
    margin-top: 30px;
  }
}
</style>


