<template>
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
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination, Autoplay]);
export default {
  name: "Carousel",
  props: {
    carouselList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper(this.$refs.swiper, {
        loop: true, // 循环模式选项
        autoplay: {
          // 自动轮播
          delay: 2000, // 轮播间隔时间
          disableOnInteraction: false, // 当用户点击下一页时，仍会开启自动轮播
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
      // [] --> 最终的数据 数据发生变化才会触发
      // 轮播图DOM元素要渲染完成 --> 轮播图数据
      // watch为了确保有轮播图数据
      // this.$nextTick为了确保轮播图数据已经渲染成DOM元素

      // 确保：swiper不能new多次
      if (this.swiper) return;
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