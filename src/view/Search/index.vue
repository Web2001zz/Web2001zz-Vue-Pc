<template>
  <div><TypeNav /></div>
</template>

<script>
import TypeNav from "@comps/TypeNav";
export default {
  name: "Search",
  computed: {
    searchName() {
      return this.$route.path.slice("/");
    },
  },
  components: {
    TypeNav,
  },
};
</script>

<style lang="less" scoped>
</style>

