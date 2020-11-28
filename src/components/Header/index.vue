<template>
  <div>
    <header>
      <div class="header-top">
        <div class="header-topBG">
          <div class="header-top-left">
            <h2>尚品汇奥利给!</h2>
            <p>
              请 <router-link to="/Login">登录</router-link>
              <router-link to="/Register">免费注册</router-link>
            </p>
          </div>
          <ul class="header-top-right">
            <li><a href="###">我的订单</a></li>
            <li><a href="###">我的购物车</a></li>
            <li><a href="###">我的尚品汇</a></li>
            <li><a href="###">尚品汇会员</a></li>
            <li><a href="###">企业采购</a></li>
            <li><a href="###">关注尚品汇</a></li>
            <li><a href="###">合作招商</a></li>
            <li><a href="###" class="clear-border">商家后台</a></li>
          </ul>
        </div>
      </div>
      <div class="header-main">
        <div class="header-img">
          <router-link to="/"
            ><img src="../../images/logo.png" alt=""
          /></router-link>
        </div>
        <div class="header-search">
          <input
            type="text"
            v-model="SearchName"
            placeholder="请输入商品关键词"
            @keyup.enter="search"
          />
          <button @click="search">搜索</button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      SearchName: "",
    };
  },
  methods: {
    search() {
      //编程时导航 将来要做搜索功能
      const { SearchName } = this;

      const location = {
        name: "search",
      };

      if (SearchName) {
        location.params = { SearchName };
      }
      this.$router.push(location);
      //跳转后搜索框清空
      this.SearchName = "";
    },
  },
};
</script>

<style lang="less" scoped>
.clear-border {
  border: none !important;
}
header {
  width: 100%;
  .header-top {
    width: 100%;
    background-color: #ccc;
  }
}
.header-topBG {
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.header-top-left {
  /* border: 1px solid black; */
  height: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  h2 {
    margin-right: 20px;
    font-size: 12px;
    font-weight: 500;
  }
  a {
    margin: 0 5px;
    font-size: 12px;
  }
}
.header-top-right {
  height: 24px;
  display: flex;
  li {
    line-height: 24px;
    a {
      display: inline-block;
      margin-left: 10px;
      padding-right: 10px;
      line-height: 24px;
      border-right: 1px solid black;
      height: 12px;
      line-height: 12px;
    }
  }
}
.header-main {
  width: 1100px;
  margin: 0 auto;
  height: 100px;
  background: #fff;
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
  line-height: 100px;
  img {
    vertical-align: middle;
  }
}
.header-search {
  input {
    height: 28px;
    width: 500px;
    border: 2px solid #ea4a36;
  }
  button {
    height: 32px;
    width: 68px;
    background-color: #ea4a36;
    border: none;
    color: #fff;
    cursor: pointer;
  }
}
</style>

