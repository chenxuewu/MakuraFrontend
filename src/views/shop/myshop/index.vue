<template>
  <div>
  <el-row>
    <el-col :span="20" >
      <el-card>
        <div slot="header" class="clearfix">
          <span>我的店鋪</span>
        </div>
        <el-empty description="你還沒有店鋪"  v-show="!myshop"/>
            <userShop :shop="myshop" v-show="myshop"/>
      </el-card>
    </el-col>
  </el-row>

  <!-- <el-row >
      <el-col :span="24" :xs="24">
        <el-empty description="你還沒有店鋪"  v-show="!shop"/>
        <userShop :shop="shop" v-show="shop"/>
      </el-col>
  </el-row> -->
</div>
</template>

<script>

import userShop from "@v/components/product/userShop.vue";
import { getOwnerShopInfo } from "@/api/shop/shop";
export default {
  name: "myShop",
  components:{
    userShop
  },
  data() {
    return {
      myshop: {}
    };
  },
  created() {
    this.getShop();
  },
  methods: {
    getShop() {
      getOwnerShopInfo().then(response => {
        this.myshop = response.data;
      });
    }
  }
};
</script>