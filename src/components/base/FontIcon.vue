<template>
  <svg class="icon" aria-hidden="true" @click="emitClick">
    <use :xlink:href="href"></use>
  </svg>
</template>
<script>
export default {
  name: "FontIcon",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    href() {
      return `#icon-${this.name}`;
    }
  },
  methods: {
    emitClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>


