<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        注册新用户
        <span class="go"
          >我有账号，去
          <router-link to="/login">登陆</router-link>
        </span>
      </h3>
      <div class="content">
        <label>手机号:</label>
        <!-- v-slot用的是作用域插槽 -->
        <ValidationProvider rules="length|required|phone" v-slot="{ errors }">
          <input
            type="text"
            placeholder="请输入你的手机号"
            v-model="user.phone"
          />

          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="content">
        <label>验证码:</label>
        <ValidationProvider rules="code" v-slot="{ errors }">
          <input type="text" placeholder="请输入验证码" v-model="user.code" />
          <!-- 请求的验证码图片 每次刷新都会发送请求，绑定点击事件让其点击的时候也会刷新验证码 -->
          <img
            ref="code"
            src="http://182.92.128.115/api/user/passport/code"
            alt="code"
            @click="refresh"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="content">
        <label>登录密码:</label>
        <ValidationProvider
          name="password"
          rules="passwordLength"
          v-slot="{ errors }"
        >
          <input
            type="password"
            placeholder="请输入你的登录密码"
            v-model="user.password"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="content">
        <label>确认密码:</label>
        <ValidationProvider
          name="rePassword"
          rules="rePassword:@password"
          v-slot="{ errors }"
        >
          <input
            type="password"
            placeholder="请输入确认密码"
            v-model="user.rePassword"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="controls">
        <input name="m1" type="checkbox" v-model="user.isAgree" />
        <span>同意协议并注册《尚品汇用户协议》</span>
        <span class="error-msg" v-show="!user.isAgree">请同意用户协议！</span>
      </div>
      <div class="btn">
        <button @click="submit">完成注册</button>
      </div>
    </div>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号</div>
    </div>
  </div>
</template>

<script>
//下载并引入vee-validate中的组件与方法
//validationProvider组件用于包裹要校验的表单 extend用于自定义规则
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
//在暴露组件外自定义校验规则,参数一是规则的名字，参数二为一个规则执行的回调函数

//验证是否输入手机号
extend("required", {
  //内置规则，表示必须填写不能为空
  ...required,
  //需要返回的错误信息
  message: "手机号必须要填写",
});

//输入手机号的长度
extend("length", {
  validate(value) {
    return value.length === 11;
  },
  message: "长度必须为11位",
});

//输入的手机号是否符合格式
extend("phone", {
  validate(value) {
    return /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/.test(
      value
    );
  },
  message: "手机号不符合规范",
});

//输入密码的长度
extend("passwordLength", {
  validate(value) {
    return value.length >= 8 && value.length <= 16;
  },
  message: "密码长度必须为8~16位",
});

//确认密码是否等于密码
extend("rePassword", {
  //跨领域验证
  params: ["password"],
  validate(value, { password }) {
    console.log(password, value);
    return value === password;
  },
  message: "请保证确认密码一致",
});

//验证码不能为空
extend("code", {
  //内置规则，表示必须填写不能为空
  ...required,
  //需要返回的错误信息
  message: "验证码不能为空",
});

export default {
  name: "Register",
  data() {
    return {
      user: {
        phone: "", //手机号
        code: "", //验证码
        password: "", //密码
        rePassword: "", //确认密码
        isAgree: false, //是否同意协议
      },
    };
  },
  methods: {
    //注册
    async submit() {
      try {
        //收集表单数据
        const { phone, code, password, rePassword, isAgree } = this.user;
        //进行正则校验
        if (!isAgree) {
          //elementUI方法，弹出框
          this.$message("请同意用户协议！");
        }
        if (password !== rePassword) {
          this.$message("两次输入密码不一致");
          return;
        }
        //发送请求注册
        await this.$store.dispatch("register", { phone, password, code });
        //请求成功后跳转到登陆界面
        this.$router.push("/login");
      } catch {
        //请求失败清空密码验证码并刷新验证码
        this.user.password = "";
        this.user.rePassword = "";
        this.user.code = "";
        this.refresh();
      }
    },
    //刷新验证码
    refresh() {
      this.$refs.code.src = "http://182.92.128.115/api/user/passport/code";
    },
  },
  components: {
    ValidationProvider,
  },
};
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>