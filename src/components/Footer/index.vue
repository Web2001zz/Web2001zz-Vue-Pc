<template>
  <div>
    <footer>
      <div class="footer-main">
        <div class="footer-top">
          <dl>
            <dt>购物指南</dt>
            <dd>购物流程</dd>
            <dd>会员介绍</dd>
            <dd>生活旅行/团购</dd>
            <dd>常见问题</dd>
            <dd>购物指南</dd>
          </dl>
          <dl>
            <dt>配送方式</dt>
            <dd>上门自提</dd>
            <dd>211现时达</dd>
            <dd>配送服务查询</dd>
            <dd>配送费收取标准</dd>
            <dd>海外配送</dd>
          </dl>
          <dl>
            <dt>支付方式</dt>
            <dd>货到付款</dd>
            <dd>在线支付</dd>
            <dd>分期付款</dd>
            <dd>邮局汇款</dd>
            <dd>公司转账</dd>
          </dl>
          <dl>
            <dt>售后服务</dt>
            <dd>售后政策</dd>
            <dd>价格保护</dd>
            <dd>退款说明</dd>
            <dd>返修/退换货</dd>
            <dd>取消订单</dd>
          </dl>
          <dl>
            <dt>特色服务</dt>
            <dd>夺宝岛</dd>
            <dd>DIY装机</dd>
            <dd>延保服务</dd>
            <dd>尚品汇E卡</dd>
            <dd>尚品汇通信</dd>
          </dl>
          <dl>
            <dt>帮助中心</dt>
            <img src="../../images/wx_cz.jpg" />
          </dl>
        </div>
        <div class="footer-bottom">
          <ul>
            <li><a href="###">关于我们</a></li>
            <li><a href="###">联系我们</a></li>
            <li><a href="###">关于我们</a></li>
            <li><a href="###">商家入驻</a></li>
            <li><a href="###">营销中心</a></li>
            <li><a href="###">友情链接</a></li>
            <li><a href="###">关于我们</a></li>
            <li><a href="###">营销中心</a></li>
            <li><a href="###">友情链接</a></li>
            <li class="clear-border"><a href="###">关于我们</a></li>
          </ul>
          <p>地址 : 深圳市宝安区后瑞村深圳西部硅谷B座3楼0721</p>
          <p>深ICU备43962200号</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
footer {
  width: 100%;
  background-color: #ccc;
  height: 320px;
}
.footer-main {
  width: 1200px;
  margin: 0 auto;
  .footer-top {
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    dl {
      margin-top: 20px;
      dt {
        font-weight: 700;
        margin: 3px;
      }
      dd {
        margin: 3px;
      }
    }
  }
}
.footer-bottom {
  text-align: center;
  ul {
    width: 700px;
    margin: 20px auto 0;
    display: flex;
    justify-content: space-around;
    li {
      border-right: 1px solid rgba(0, 0, 0, 0.4);
      text-align: center;
      padding-right: 10px;
      margin-left: 10px;
    }
  }
  p {
    margin: 7px 0;
  }
}
</style>
