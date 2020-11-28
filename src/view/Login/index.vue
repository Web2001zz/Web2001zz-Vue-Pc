<template>
  <div class="Login">
    <div class="Login-bgimg">
      <div>
        Login...
        <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { reqLogin } from "@api/user.js";
export default {
  name: "Login",
  methods: {
    login() {
      reqLogin("13700000000", "111111")
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
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

