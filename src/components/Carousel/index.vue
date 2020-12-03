<template>
  <!-- 轮播图通用组件 -->
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="carousel in carouselList"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
//引入Swiper
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
//Swiper样式
import "swiper/swiper-bundle.min.css";
//Swiper6中需运用组件
Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  name: "Carousel",
  props: {
    //接收的轮播图数据是一个数组
    //是一个必须要传的数据
    carouselList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    //Swiper的固定用法
    initSwiper() {
      this.swiper = new Swiper(this.$refs.swiper, {
        // 循环模式选项
        loop: true,
        // 自动轮播
        autoplay: {
          // 轮播间隔时间
          delay: 2000,
          // 当用户点击下一页时，仍会开启自动轮播
          disableOnInteraction: false,
        },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
  watch: {
    carouselList() {
      // 最初的轮播图数据是一个[]，在请求到最终数据后才能进行Swiper
      // 轮播图DOM元素要渲染完成 --> 轮播图数据
      // watch为了确保有轮播图数据
      // 确保：swiper不能new多次
      if (this.swiper) return;
      //为了确保轮播图数据已经渲染成DOM元素
      this.$nextTick(() => {
        this.initSwiper();
      });
    },
  },
  mounted() {
    //确保小轮播图的数据请求成功才会调用
    if (!this.carouselList.length) return;
    this.initSwiper();
  },
};
</script>

<style>
</style>