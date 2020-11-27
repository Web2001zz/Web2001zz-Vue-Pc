<template>
  <div class="App">
    <Header />
    <router-view></router-view>
    <p>奥利安费</p>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
};
</script>

<style lang="less" scoped>
.App {
  background: hotpink;
  p {
    background-color: skyblue;
  }
}
</style>
