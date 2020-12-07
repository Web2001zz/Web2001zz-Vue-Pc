<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(imgUrl, index) in skuImageList"
        :key="imgUrl.id"
      >
        <img :src="imgUrl.imgUrl" @click="getImageindex(index)" />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation]);
export default {
  name: "ImageList",
  props: {
    skuImageList: Array,
    getImageindex: Function,
  },
  watch: {
    //最开始的list并没有获取到，是一个空数组，为确保swiper在所有页面加载完成后使用所以用监事属性
    skuImageList() {
      this.$nextTick(() => {
        new Swiper(this.$refs.swiper, {
          slidesPerView: 5, // 每页显示轮播图的数量
          spaceBetween: 30, // 轮播图间距
          slidesPerGroup: 5, // 切换时切换轮播图的数量
          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>