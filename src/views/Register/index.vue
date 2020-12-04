<template>
  <div class="Register">
    <div class="Register-top">
      <h2>注册新用户</h2>
      <h2>我有账号，去 <router-link to="/login"> 登录</router-link></h2>
    </div>
    <div class="Register-main">
      <form action="">
        <div>
          <span>&nbsp;&nbsp;手机号:</span>
          <input type="text" placeholder="请输入您的手机号" />
        </div>
        <div>
          <span>验证码:</span>
          <input type="text" placeholder="请输入您的验证码" />
        </div>
        <div>
          <span>登录密码:</span>
          <input type="password" placeholder="请在此输入8~16位密码" />
        </div>
        <div>
          <span>确认密码:</span>
          <input type="password" placeholder="请在此确认密码" />
        </div>
        <div>
          <label for="">
            <input type="checkbox" />
            <a>同意协议并注册《尚品汇用户协议》</a>
          </label>
        </div>
        <button>完成注册</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style lang="less" scoped>
.Register {
  width: 1200px;
  margin: 0 auto;
  border: 1px solid #ccc;
  box-sizing: border-box;
  height: 500px;
}
.Register-top {
  width: 100%;
  background-color: #ccc;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  h2 {
    margin: 0 30px;
    font-size: 16px;
    font-weight: 500;
    a {
      color: red;
    }
  }
}
.Register-main {
  width: 75%;
  border: 1px solid black;
  margin: 0 auto;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  div {
    margin: 20px auto;
    font-size: 14px;
  }
  input {
    width: 240px;
    height: 30px;
    margin-left: 5px;
    border: 2px solid rgb(225, 37, 27);
    text-align: center;
    border-radius: 10px;
  }
}
</style>
