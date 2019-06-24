<template>
  <div class="interests-container">
    <h3 class="interests-title" v-html="title"></h3>
    <ul class="interest-list">
      <li class="interest-item" v-for="interest in interests" :key="interest.id">
        <div class="user-info dp-f">
          <div class="user-icon" :style="`background: url(${interest.user.avatar})`"></div>
          <div class="user-detail">
            <p class="dp-f">
              <strong>{{interest.user.name}}</strong>
              <rate v-if="interest.rating" :rate="interest.rating.star_count*20" :totalWidth="70"/>
              <span v-else>无评分</span>
            </p>
            <p class="time">{{getDistanceFromTime(interest.create_time)}}</p>
          </div>
        </div>
        <div class="interest-info">
          <p class="content">{{interest.comment}}</p>
          <div class="extra dp-f">
            <div class="praise dp-f">
              <FontIcon class="icon-praise" name="praise"/>
              {{interest.vote_count}}
            </div>
            <div class="more">
              <FontIcon name="more"/>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getDistanceFromTime } from "../../utils/time";

export default {
  name: "interests",
  props: {
    interests: {
      type: Array,
      required: true
    },
    interestsTitle: {
      type: String,
      required: true
    },
    interestsTotal: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    title() {
      return `${this.interestsTitle}的短评(${this.interestsTotal})`;
    }
  },
  methods: { getDistanceFromTime }
};
</script>

<style lang="scss" scoped>
.interests-container {
  .interests-title {
    color: #aaa;
    font-size: 15px;
    margin-bottom: 15px;
  }
  .user-info {
    .user-icon {
      width: 36px;
      height: 36px;
      background-size: cover;
      margin-right: 15px;
    }
    .user-detail {
      p {
        font-size: 15px;
      }
      strong {
        margin-right: 10px;
      }

      .time {
        margin-top: 6px;
        color: #aaa;
      }
    }
  }
  .interest-info {
    margin-top: 10px;
    .content {
      margin-left: 40px;
      line-height: 22px;
      color: #494949;
      white-space: pre-wrap;
      font-size: 15px;
    }
    .extra {
      margin-left: 40px;
      margin-top: 10px;
      justify-content: space-between;
      align-items: center;
      color: #ccc;
      font-size: 12px;
      line-height: 20px;
      svg {
        margin-right: 5px;
      }
      .praise {
        align-items: center;
      }
    }
  }
  .interest-item {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
