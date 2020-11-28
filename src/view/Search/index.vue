<template>
  <div class="Search">Search:"{{ searchName }}"区域</div>
</template>

<script>
export default {
  name: "Search",
  computed: {
    searchName() {
      return this.$route.path.slice("/");
    },
  },
};
</script>

<style lang="less" scoped>
.Search {
  width: 100%;
  height: 700px;
  font-size: 50px;
  text-align: center;
  line-height: 700px;
  background-color: hotpink;
}
</style>

