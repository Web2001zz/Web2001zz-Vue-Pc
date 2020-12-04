<template>
  <div class="Login">
    <div class="LoginBg">
      <div class="Login-Body">
        <div class="Login-Form">
          <div class="Login-TAB">
            <h2>扫码登录</h2>
            <h2>账户登录</h2>
          </div>
          <div class="Login-Login">
            <input type="text" placeholder="输入您的手机号" />
            <input type="password" placeholder="输入您的密码" />
          </div>
          <div class="Login-bottom">
            <input type="checkout" />自动登录
            <a href="####">忘记密码？</a>
            <el-button type="primary" @click="login">登录</el-button>
            <router-link to="register">立即注册</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqLogin } from "@api/user";

export default {
  name: "Login",
  methods: {
    // 测试登录
    login() {
      reqLogin("13700000000", "11111111")
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
  height: 500px;
  /* border: 1px solid black; */
  background-color: rgb(233, 56, 84);
  .LoginBg {
    width: 1100px;
    margin: 0 auto;
    height: 100%;
    background-image: url(../../images/loginbg.png);
    background-repeat: no-repeat;
    position: relative;
  }
}
.Login-Body {
  position: absolute;
  right: 0;
  top: 50%;
  background-color: #fff;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  display: flex;
  align-items: center;
}
.Login-Form {
  border: 1px solid black;
  height: 90%;
  width: 90%;
  margin: 0 auto;
}
.Login-TAB {
  display: flex;
  h2 {
    width: 50%;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
}
.Login-Login {
  margin: 30px 0;
  input {
    width: 75%;
    height: 24px;
    display: block;
    margin: 10px auto;
    text-align: center;
  }
}
.Login-bottom {
  width: 75%;
  margin: 0 auto;
}
button {
  width: 75%;
  background-color: rgb(233, 56, 84);
  display: block;
  margin: 30px auto;
}
</style>
