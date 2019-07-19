<template>
  <div class="home-detail">
    <ul class="home-tags dp-f">
      <li v-for="tag in tags" :key="tag.name">
        <a href="javascript:;" class="dp-f">
          <span>{{tag.name}}</span>
          <FontIcon name="arrow-right"/>
        </a>
      </li>
    </ul>
    <h3 class="home-detail-title">{{title}}</h3>
    <div class="home-info dp-f">
      <span class="author">{{author.name}}</span>
      <span class="time">{{create_time}}</span>
    </div>
    <div class="home-detail-content" v-html="content"></div>
    <div class="home-author dp-f">
      <div class="avatar">
        <img :src="getTransferedImage(author.avatar)" alt>
      </div>
    </div>
  </div>
</template>
<script>
import { pageNames } from "../../utils/pageHelper";
import { getTransferedImage } from "../../utils/files";
export default {
  name: pageNames.home.DETAIL,
  data() {
    return {
      title: "",
      content: "",
      photos: [],
      tags: [],
      author: {},
      create_time: ""
    };
  },
  mounted() {
    this.getInitData();
  },
  methods: {
    getTransferedImage,
    async getInitData() {
      this.$loading.show();
      const result = await this.$ajax({
        url: `/api/home/detail/${this.$route.params.id}`
      });
      this.title = result.data.title;
      this.content = result.data.content;
      this.photos = result.data.photos;
      this.tags = result.data.tags;
      this.author = result.data.author;
      this.create_time = result.data.create_time;
      this.$loading.hide();
      await this.$nextTick();
      this.insertImages();
    },
    insertImages() {
      this.photos.forEach(photo => {
        const image = document.querySelector(`#${photo.tag_name}`);
        if (image) {
          image.setAttribute("src", getTransferedImage(photo.image.normal.url));
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.home-detail {
  font-size: 14px;
  padding: 0 20px;
  box-sizing: border-box;
  .home-tags {
    margin-top: 20px;
    li {
      margin-right: 10px;
    }
    a {
      padding: 0 8px;
      border: 1px solid $main;
      border-radius: 10px;
      background: #effaf0;
      line-height: 24px;
      color: $main;
      align-items: center;
      span {
        white-space: nowrap;
      }
    }
  }
  .home-detail-title {
    margin-top: 20px;
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
  }
  .home-info {
    font-size: 12px;
    margin-top: 5px;
    .author {
      color: $dark;
    }
    .time {
      margin-left: 5px;
      color: $light;
    }
  }
  .home-detail-content {
    font-size: 18px;
    line-height: 30px;
    color: #494949;
    word-wrap: break-word;
  }
}
</style>

