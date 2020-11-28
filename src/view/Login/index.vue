<template>
  <div class="Login">
    <div class="Login-bgimg"></div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="less" scoped>
.Login {
  width: 100%;
  height: 489px;
  font-size: 50px;
  text-align: center;
  line-height: 700px;
  background-color: rgb(233, 56, 84);
  .Login-bgimg {
    width: 1100px;
    margin: 0 auto;
    height: 100%;
    background-image: url(../../images/loginbg.png);
    background-repeat: no-repeat;
  }
}
</style>

