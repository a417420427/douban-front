<template>
  <div class="home-detail">
    <h3 class="home-detail-title">{{title}}</h3>
    <div class="home-detail-content" v-html="content"></div>
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
      photos: []
    };
  },
  mounted() {
    console.log(this.$route);
    this.getInitData();
  },
  methods: {
    async getInitData() {
      this.$loading.show();
      const result = await this.$ajax({
        url: `/api/home/detail/${this.$route.params.id}`
      });
      this.title = result.data.title;
      this.content = result.data.content;
      this.photos = result.data.photos;
      await this.$nextTick();
      this.insertImages();
      this.$loading.hide();
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
}
</style>

