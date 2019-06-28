<template>
  <div id="app">
    <!-- <AppHeader @click="troggleSearch"/>
    <Search v-if="searchVisiable" @click="troggleSearch"/>
    <router-view class="page-container"/>
    </div>-->
    <Message/>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import Search from "./components/Search";
import Message from "./components/Message/Message";
export default {
  name: "App",
  data() {
    return {
      searchVisiable: false,
      loading: false
    };
  },
  components: {
    AppHeader,
    Search,
    Message
  },
  methods: {
    troggleSearch(value) {
      this.searchVisiable = value;
    }
  },
  mounted() {
    //document.querySelector(".page-header").classList.add("op-0");
    // document.querySelector(".page-home-banner").classList.add("op-0");
  }
};
</script>

<style lang="scss">
#app {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-top: 48px;
}
.page-container {
  width: 100%;
  height: 100%;
}
</style>
