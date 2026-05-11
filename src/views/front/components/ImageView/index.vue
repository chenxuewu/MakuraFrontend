<template>
  <div class="goods-image">
    <!-- 左側大圖-->
    <div class="middle" ref="target">
      <img :src="imageList[activeIndex]" alt="" />
      <!-- 蒙層小滑塊 -->
<!--      <div class="layer" :style="{ left: `0px`, top: `0px` }"></div>-->
    </div>

    <!-- 小圖列表 -->
    <ul class="small">
      <li v-for="(img, i) in imageList" :key="i" @mouseenter="enterhandler(i)" :class="{active: i === activeIndex}">
        <img :src="img" alt="" />
      </li>
    </ul>

    <!-- 放大鏡大圖 -->
    <div class="large" :style="[
      {
        backgroundImage: `url(${imageList[0]})`,
        backgroundPositionX: `0px`,
        backgroundPositionY: `0px`,
      },
    ]" v-show="false"></div>
  </div>
</template>

<script>

export default {
  props: {
    imageList: {
      type: Array
    }
  },

  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    enterhandler(i) {
      this.activeIndex = i
    }
  }
}

</script>

<style scoped lang="scss">
.goods-image {
  //width: 480px;
  width: 750px;
  //height: 400px;
  position: relative;
  display: flex;

  .middle {
    //width: 400px;
    width: 83%;
    //height: 400px;
    background: #f5f5f5;
  }

  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    z-index: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    // 背景圖:盒子的大小 = 2:1  將來控制背景圖的移動來實現放大的效果檢視 background-position
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }

  .layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.2);
    // 絕對定位 然後跟隨咱們滑鼠控制left和top屬性就可以讓滑塊移動起來
    left: 0;
    top: 0;
    position: absolute;
  }

  .small {
    width: 80px;

    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover,
      &.active {
        border: 2px solid #999;
      }
    }
  }
}

</style>
