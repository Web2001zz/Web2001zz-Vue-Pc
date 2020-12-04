<template>
  <div class="pagination">
    <!-- 绑定点击事件与按钮禁止条件 -->
    <!-- 当当前页码小于等于1时，按钮禁用 -->
    <!-- 点击上一页页码-1 -->
    <button
      :disabled="myCurrentPage <= 1"
      @click="setCurrentPage(myCurrentPage - 1)"
    >
      上一页
    </button>
    <!-- 高亮显示 -->
    <button :class="{ active: myCurrentPage === 1 }" @click="setCurrentPage(1)">
      1
    </button>
    <!-- 当第二个按钮大于2时显示... -->
    <button v-show="startEnd.start > 2">...</button>
    <!-- 中间的按钮动态遍历展示 绑定点击事件，以动态遍历开头按钮与结束按钮-->
    <button
      v-for="item in mapBtnsCount"
      :key="item"
      @click="setCurrentPage(startEnd.start + item - 1)"
      :class="{ active: myCurrentPage === startEnd.start + item - 1 }"
    >
      <!-- 动态按钮的中间数 -->
      {{ startEnd.start + item - 1 }}
    </button>
    <button v-show="startEnd.end < totalPages - 1">...</button>
    <!-- 最后一个按钮 为总页数 小于1便可以不显示 -->
    <button
      v-show="totalPages > 1"
      :class="{ active: myCurrentPage === totalPages }"
      @click="setCurrentPage(totalPages)"
    >
      {{ totalPages }}
    </button>
    <button
      @click="setCurrentPage(myCurrentPage + 1)"
      :disabled="myCurrentPage >= totalPages"
    >
      下一页
    </button>
    <button>总数：{{ total }}</button>
  </div>
</template>

<script>
export default {
  name: "pagination",
  //需要接收的参数
  props: {
    //当前页码
    currentPage: {
      type: Number,
      default: 1,
    },
    //显示的按钮数量
    pagerCount: {
      type: Number,
      //需要验证，通过验证才能有用
      //大于等于5且小于等于21的奇数
      validator(val) {
        return val >= 5 && val <= 21 && val % 2 === 1;
      },
      //默认七个
      default: 7,
    },
    //每页条数
    pageSize: {
      type: Number,
      default: 10,
    },
    //总数
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      //props数据只读，不能修改，因此用data修改currentpage，
      myCurrentPage: this.currentPage,
    };
  },
  computed: {
    //计算总页数
    totalPages() {
      //向上取整    页数 = 总数 / 每条显示长度
      return Math.ceil(this.total / this.pageSize);
    },

    //计算中间按钮的开始于结束的按钮值
    startEnd() {
      const { myCurrentPage, pagerCount, totalPages } = this;
      //不包含开头和结尾
      const count = pagerCount - 2;
      //取其中间的一半
      const halfCount = Math.floor(count / 2);
      //开始计算
      let start, end;
      //如果当前页码大于等于总页数的一半则
      if (myCurrentPage >= totalPages - halfCount) {
        start = totalPages - count;
      } else {
        start = myCurrentPage - halfCount;
      }

      //开头已经有一个1的按钮
      if (start <= 1) {
        start = 2;
      }
      //结束按钮 = 总数减一
      end = start + count - 1;

      if (end >= totalPages) {
        end = totalPages - 1;
      }
      //返回计算的结果
      return {
        start,
        end,
      };
    },

    //需要遍历的按钮数量
    mapBtnsCount() {
      const { start, end } = this.startEnd;
      const count = end - start + 1;
      return count >= 1 ? count : 0;
    },
  },
  watch: {
    //每次页码发生变化时加载新数据
    myCurrentPage(currentPage) {
      //触发search组件传来的自定义函数，页码变化时会发送请求数据
      this.$emit("current-change", currentPage);
    },
    //当页面发生变化时，里面页面也要发生变化
    currentPage(currentPage) {
      this.myCurrentPage = currentPage;
    },
  },
  methods: {
    setCurrentPage(currentPage) {
      this.myCurrentPage = currentPage;
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  white-space: nowrap;
  font-weight: 700;
  button {
    margin: 0 5px;
    padding: 0 4px;
    font-size: 13px;
    min-width: 30px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: none;
    outline: none;
    display: block;
    background-color: #f4f4f5;
    color: #606266;
    border-radius: 2px;
  }
}

button.active {
  background-color: #409eff;
  color: #fff;
}
</style>
