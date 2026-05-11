<template>
  <div>
    <Header />
    <section class="dashboard-area" style="padding-top: 17px;padding-bottom: 54px">
      <div class="container" style="height: 100%;">
        <el-row>
          <el-row>
            <div id="mercury">
              <div>
                <el-row>
                  <div class="fav-floatbar">
                    <div class="fav-bar-height">
                      <div class="fav-bar-float">
                        <div class="fav-bar-float-layout clearfix" data-spm-anchor-id="a1z0k.7385961.0.i1.6cfe37deb9nQvO">
                          <el-col :span="6">
                            <div class="fav-select" data-spm="1997985009">
                              <ul>
                                <li class="fav-sel-item fav-sel-item-first J_SelItemsTags ">
                                  <span class="fav-sel-link fav-sel-select">全部寶貝（收藏總數<em>{{ total }}</em>）</span>
                                </li>
                              </ul>
                            </div>
                          </el-col>

                          <el-col :span="10">
                            <div style="text-align: right;">
                              <el-checkbox v-model="checked" @change="checkedAllProduct" class="checkedActionButton"
                                v-if="!showBatch"><span class="checkedAll">全選</span></el-checkbox>
                              <!-- <el-button @change="bathDeleteProduct" style=" border: none;font-size: 12px;color: black;" class="no-border-button"
                                v-if="!showBatch" @click="batchDelete">移除</el-button> -->
                              <el-button @change="bathDeleteProduct"
                                style="border: none; font-size: 14px; color: black; background-color: transparent;"
                                class="no-border-button" v-if="!showBatch" @click="batchDelete">移除</el-button>
                              <span v-if="showBatch" class="actionButton" @click="toggleButtons">批次管理</span>
                              <span v-if="!showBatch" class="actionButton" @click="toggleButtons">取消管理</span>
                            </div>
                          </el-col>

                          <el-col :span="8" style="float:right;font-size: 12px;line-height: 36px; text-align: right;">
                            <div class="search-box-new">
                              <el-input type="text" v-model="queryParams.productName" placeholder="商品名稱"
                                @change="searchMyCollectList" />
                              <span class="search-btnNew" style="top:4px;right: -4px;padding: 13px 30px;"
                                @click="searchMyCollectList">
                                <i class="ri-search-line"></i>
                              </span>
                            </div>
                            <!--                            <input v-model="queryParams.productName" type="text" placeholder="商品名稱"-->
                            <!--                              style="height: 39px;width: 300px; border: 1px solid #ccc;font-size: 14px;margin: 4px 5px;border-radius: 5px;padding-left: 10px;" @keyup.enter="searchMyCollectList">-->
                            <!--                            <button class="search" style="vertical-align: top;border-radius: 5px;margin: 4px;height: 39px;" @click="searchMyCollectList"><i class="ri-search-line"></i></button>-->
                          </el-col>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-row>
                <el-row>
                  <div v-loading="loading">
                    <el-empty description="暫無商品" v-show="collectProductListVo.length <= 0" />
                    <div v-for="(collectProduct, index) in collectProductListVo" :key="index"
                      v-show="collectProductListVo.length > 0">
                      <el-col :span="4">
                        <ul class="img-item-list J_FavList clearfix" style="padding-left: 0px;height: 270px;"
                          data-spm-anchor-id="a1z0k.7628869.0.i0.7b4637dePgdZ6E">
                          <li class="J_FavListItem g-i-item fav-item istmall" data-id="645193870712" style="width: 100%;"
                            data-ownerid="2208786055313" data-spm="">
                            <div class="img-controller-box J_FavImgController" :class="{ 'batch-mode': !showBatch }"
                              style="border-radius: 8px;">
                              <div class="img-controller-img-box" style="height: 100%;"
                                :class="{ 'batch-img-controller-img-box': !showBatch | collectProduct.isInvalid, 'is-check': collectProduct.checked }">
                                <a @click.prevent="showProductDetails(collectProduct.productId)"
                                  class="img-controller-img-link" target="_blank" data-spm=""
                                  :title="collectProduct.productName">
                                  <img class="img-controller-img" :src="collectProduct.mainImageUrl"
                                    :alt="collectProduct.productName">
                                </a>
                                <div class="delete-icon-box">
                                  <button @click="removeProductConfirm(collectProduct.productId)"><i
                                      class="ri-delete-bin-line"></i></button>
                                </div>
                                <div class="check-icon-box" :class="{ 'batch-check-icon-box': !showBatch }">
                                  <button
                                    :class="{ 'batch-check': !showBatch, 'is-check-icon': collectProduct.checked }"><i
                                      class="ri-check-fill check-icon"></i></button>
                                </div>
                              </div>
                            </div>
                            <div class="img-item-title">
                              <a class="img-item-title-link" :title="collectProduct.productName" target="_blank"
                                @click.prevent="showProductDetails(collectProduct.productId)" data-spm="">{{
                                  collectProduct.productName }}</a>
                            </div>
                            <div class="price-container">
                              <div class="g_price-box">
                                <!-- <div data-title="undefined;直降:137.51元" class="J_PriceIcon_ picon-" data-p="4507"
                                data-op="2510">
                              </div> -->
                                <div class="g_price">
                                  <span> NT$</span>
                                  <strong>{{ collectProduct.price }}</strong>
                                </div>
                                <!-- <div class="g_price g_price-original">
                                <span> NT$</span>
                                <span>182.58</span>
                              </div> -->
                              </div>
                            </div>
                          </li>
                        </ul>
                      </el-col>
                    </div>

                  </div>
                </el-row>
              </div>
            </div>
          </el-row>
          <el-row>
            <div class="row">
              <div class="col-12">
                <pagination v-show="total > 0" :total="parseInt(total)" :page.sync="queryParams.pageNum"
                  :limit.sync="queryParams.pageSize" @pagination="getCollectList" />
              </div>
            </div>
          </el-row>
        </el-row>
      </div>
    </section>

    <CustomPrompt :visible="dialogVisible" :dialog-title="dialogTitle" :input-placeholder="dialogInputPlaceholder"
      :confirm-button-style="confirmButtonStyle" width="25%" :tooltipVisible=true :reasonVisible=reasonVisible
      :tooltip=tooltip @update:visible="closeDialog" @confirm="handleConfirm" @cancel="handleCancel">
    </CustomPrompt>
  </div>
</template>

<script>
import Header from '@v/front/components/header.vue';
import { getProductUserCollectList, collectProduct } from "@/api/product/productUserCollect";
import CustomPrompt from "../components/CustomPrompt.vue";

export default {
  components: {
    Header,
    CustomPrompt,
  },
  data() {
    return {
      loading: true,
      total: 0,
      pageSizes: [50, 100, 150, 200],
      checked: false,
      showBatch: true, //true顯示批次管理，false顯示取消管理
      queryParams: {
        pageNum: 1,
        pageSize: 50,
        productName: "",
      },
      //定義一個變數儲存收藏的商品列表是否選中
      collectProductListVo: [],
      //定義一個變數來儲存選中的數量
      checkedCount: 0,

      // 對話方塊元件的資料
      dialogVisible: false,//是否開啟對話方塊標識
      reasonVisible: false,//是否顯示理由輸入框
      dialogTitle: '確認要移除商品嗎',//對話方塊標題
      tooltip: '您確認要將1個商品移除收藏夾嗎？',//提示資訊
      dialogInputPlaceholder: '請輸入理由',//輸入框佔位符
      confirmButtonStyle: { // 確認按鈕樣式
        color: '#FFFFFF',
        backgroundColor: '#fa9852',
        borderColor: '#fa9852',
      },
      //定義一個變數儲存回撥的方法(1:單個移除 2:批次移除)
      confirmCallback: null,
      //定義一個變數儲存需要操作的商品
      operateProductId: null,

    };
  },

  created() {
    this.getCollectList();
  },

  methods: {
    toggleButtons() {
      this.showBatch = !this.showBatch;
      this.checked = false;
      //如果是批次管理，就把所有的選中狀態都取消
      if (this.showBatch) {
        this.collectProductListVo.forEach(item => {
          this.$set(item, "checked", false);
        });
      }
    },

    //查詢我的收藏商品列表
    getCollectList() {
      this.loading = true;
      getProductUserCollectList(this.queryParams).then(response => {
        this.collectProductListVo = response.rows;
        this.collectProductListVo.forEach(item => {
          //判斷商品是否選中，預設都是未選中
          this.$set(item, "checked", false);
          //判斷商品是否失效，判斷的條件是item.isProductId是否為null或者freezeStatus為1或publishStatus為0
          if (item.isProductId == null || item.freezeStatus == 1 || item.publishStatus == 0) {
            this.$set(item, "isInvalid", true);
          } else {
            this.$set(item, "isInvalid", false);
          }
        });
        this.total = response.total;
        this.loading = false;
      });
    },

    /** 全選 */
    checkedAllProduct() {
      //判斷是否選中
      if (this.checked) {
        this.collectProductListVo.forEach(item => {
          this.$set(item, "checked", true);
        });
      } else {
        this.collectProductListVo.forEach(item => {
          this.$set(item, "checked", false);
        });
      }
    },

    showProductDetails(productId) {
      if (!this.showBatch) {
        //判斷此商品是否選中，如果選中則取消選中，如果未選中則選中
        this.collectProductListVo.forEach(item => {
          if (item.productId == productId) {
            this.$set(item, "checked", !item.checked);
            //選中則選中的數量加1，未選中則選中的數量減1
            if (item.checked) {
              this.checkedCount++;
              //判斷總數是否等於選中的數量，如果等於則全選按鈕選中，否則不選中
              if (this.collectProductListVo.length == this.checkedCount) {
                this.checked = true;
              } else {
                this.checked = false;
              }
            } else {
              this.checkedCount--;
              this.checked = false;
            }
          }
        });
        return;
      }
      //判斷商品是否失效，如果失效則不跳轉
      let flag = false;
      this.collectProductListVo.forEach(item => {
        if (item.productId == productId) {
          if (item.isInvalid) {
            flag = true;
            return;
          }
        }
      });
      if (flag) {
        return;
      }
      //開啟新的標籤頁
      let url = this.$router.resolve({
        path: "/frontProductDetail",
        query: { id: productId }
      })
      window.open(url.href, '_blank');
      // window.open(`/frontProductDetail?id=${productId}`, '_blank');
    },

    //查詢我的收藏商品列表
    searchMyCollectList() {
      this.queryParams.pageNum = 1;
      this.getCollectList();
    },

    /** 移除商品確認框(單個商品) */
    removeProductConfirm(productId) {
      this.dialogVisible = true;
      this.dialogTitle = "確認要移除商品嗎？";
      this.tooltip = "您確認要將1個商品移除收藏夾嗎？";
      this.confirmCallback = 1;
      this.operateProductId = productId;
    },


    //批次移除確認框
    batchDelete() {
      //判斷是否有選中的商品
      let flag = false;
      //定義一個變數來儲存選中的商品
      let checkCount = 0;
      this.collectProductListVo.forEach(item => {
        if (item.checked) {
          flag = true;
          checkCount++;
        }
      });
      if (!flag) {
        this.$message({
          message: "請先選擇商品",
          type: "warning",
        });
        return;
      }
      this.dialogVisible = true;
      this.dialogTitle = "確認要移除商品嗎？";
      this.tooltip = `您確認要將${checkCount}個商品移除收藏夾嗎？`;
      this.confirmCallback = 2;
    },


    //移除商品(批次商品)
    removeProduct() {
      const formData = {};
      formData.isCollect = false;
      if (this.confirmCallback == 1) {
        console.log(this.operateProductId);
        formData.productIds = this.operateProductId;
        collectProduct(formData).then(response => {
          this.$message({
            message: "移除成功",
            type: "warning",
          });
          this.getCollectList();
        });
      } else if (this.confirmCallback == 2) {
        //定義一個字元串儲存選中的商品id,隔開,最後一個逗號去掉
        let productIds = "";
        this.collectProductListVo.forEach(item => {
          if (item.checked) {
            productIds += item.productId + ",";
          }
        });
        productIds = productIds.substring(0, productIds.length - 1);
        formData.productIds = productIds;
        collectProduct(formData).then(response => {
          this.$message({
            message: "移除成功",
            type: "warning",
          });
          this.getCollectList();
        });
      }
      this.confirmCallback = null;
      this.operateProductId = null;
    },


    /** 對話方塊確認回撥方法 */
    handleConfirm() {
      this.removeProduct();
      // 透過修改資料來控制元件的隱藏
      this.dialogVisible = false;
    },


    /** 對話方塊取消回撥方法 */
    handleCancel() {
      this.dialogVisible = false;
      this.confirmCallback = null;
      this.operateProduct = null;
    },

    // 關閉對話方塊
    closeDialog(visible) {
      this.dialogVisible = visible;
      this.confirmCallback = null;
      this.operateProduct = null;
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@a/front/css/bootstrap.min.css";
@import "~@a/front/css/owl.theme.default.min.css";
@import "~@a/front/css/owl.carousel.min.css";
@import "~@a/front/css/remixicon.css";
@import "~@a/front/css/meanmenu.min.css";
@import "~@a/front/css/animate.min.css";
@import "~@a/front/css/style.css";
@import "~@a/front/css/responsive.css";

::v-deep {

  // 分頁外掛被汙染(去除背景色)
  .pagination-container {
    background: transparent;
    padding: 32px 16px;
  }

  .dashboard-area {
    background: #fafafa;
  }

  .fav-floatbar {
    margin-bottom: 10px;
    position: relative;
    z-index: 50;
  }

  .fav-bar-height {
    height: 48px;
  }

  .fav-bar-float {
    height: 46px;
    line-height: 46px;
    border-bottom: #e5e5e5 2px solid;
  }

  .clearfix:after {
    clear: both;
  }

  .fav-floatbar .fav-select {
    float: left;
  }

  ol,
  ul {
    list-style: none;
  }

  .fav-floatbar .fav-sel-item {
    float: left;
  }

  .fav-floatbar .fav-sel-select {
    padding-right: 40px;
    position: relative;
    color: #f40;
    border-bottom: #ff4200 2px solid;
  }

  .fav-floatbar .fav-sel-link {
    padding: 0 20px;
    color: #3c3c3c;
    display: block;
    text-decoration: none;
  }

  address,
  cite,
  dfn,
  em,
  var {
    font-style: normal;
  }

  .fav-floatbar .fav-show {
    float: right;
    padding-top: 7px;
    margin-left: 10px;
  }

  .fav-floatbar .fav-show-img.fav-show-select {
    background-position: 9px -448px;
  }

  .fav-floatbar .fav-show-select {
    background-color: #dedede;
    color: #6a6a6a;
  }

  .fav-floatbar .fav-show-img {
    background-position: -19px -448px;
  }

  .fav-floatbar .fav-show-img,
  .fav-floatbar .fav-show-list {
    width: 30px;
    height: 27px;
    line-height: 27px;
    border: #dedede 1px solid;
    float: left;
    background-color: #fff;
    color: #dedede;
    text-align: center;
  }

  .fav-floatbar .fav-show-list {
    background-position: -19px -475px;
    border-left: none;
  }

  .fav-floatbar .fav-show-img,
  .fav-floatbar .fav-show-list {
    width: 30px;
    height: 27px;
    line-height: 27px;
    border: #dedede 1px solid;
    float: left;
    background-color: #fff;
    color: #dedede;
    text-align: center;
  }

  .fav-floatbar .search-combobox-input {
    height: 25px;
    line-height: 25px;
    text-indent: 5px;
    float: left;
  }

  .search-combobox-input {
    width: 100%;
    vertical-align: middle;
    background-color: #fff;
    border: 0;
    color: #000;
    line-height: 18px;
    height: 18px;
    overflow-y: visible;
    font-size: 100%;
  }

  .fav-floatbar .fav-tools {
    float: right;
    padding-top: 7px;
    line-height: 29px;
    margin-left: 10px;
  }

  .clearfix:after {
    clear: both;
  }

  .clearfix:after,
  .clearfix:before {
    content: "";
    display: table;
  }



  .jj6 {
    background-position: -118px -4px;
  }

  .tagiconfont {
    font-family: tagmercuryiconfont;
    font-size: 14px;
    font-style: normal;
    -webkit-text-stroke-width: 0.2px;
  }

  .fav-floatbar .dingding {
    position: absolute;
    width: 41px;
    height: 41px;
    top: 0;
    right: 0;
    background-position: 0 -507px;
    cursor: pointer;
  }


  .fav-floatbar .showmore {
    position: absolute;
    width: 16px;
    height: 16px;
    cursor: pointer;
    right: 19px;
    bottom: 21px;
  }

  .hidden {
    display: none;
  }

  .fav-floatbar .showmore .close,
  .fav-floatbar .showmore .open {
    color: #6c6c6c;
  }


  .fav-floatbar .showmore .open {
    display: block;
  }

  .fav-floatbar .showmore .close-icon,
  .fav-floatbar .showmore .open-icon {
    display: block;
    background-position: 0 -176px;
    width: 16px;
    height: 16px;
  }

  .fav-floatbar .showmore .close-icon {
    background-position: -29px -176px;
  }


  //.img-item-list {
  //  margin-right: -30px;
  //}


  .fav-item {
    height: 226px;
    float: left;
    text-align: center;
    position: relative;
    margin-bottom: 14px;
  }

  .g-i-item {
    width: 150px;
    //margin-right: 23px;
    padding: 10px;
  }


  .fav-item .img-controller-box {
    border: #eee 1px solid;
    margin-bottom: 11px;
    height: 196px;
    overflow: hidden;
    position: relative;
  }

  .batch-mode {
    border: none !important;
  }

  .fav-item .img-controller-img-link {
    // width: 148px;
    height: 100%;
    display: block;
    line-height: 145px;
  }

  .fav-item .img-controller-img {
    vertical-align: middle;
    display: inline-block;
    max-width: 100%;
    max-height: 100%;
  }

  .fav-item .img-item-title {
    height: 23px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }


  .fav-item .img-item-title-link {
    color: #3c3c3c;
  }

  .fav-item .knockdown,
  .fav-item .price-container {
    word-wrap: break-word;
    word-break: normal;
    height: 23px;
    line-height: 23px;
    overflow: hidden;
  }

  #mercury .g_price-box {
    display: block;
  }

  #mercury .g_price-box div {
    display: inline;
    color: #6c6c6c;
  }


  #mercury .g_price-box div {
    display: inline;
    color: #6c6c6c;
  }

  #mercury .g_price span {
    color: #f40;
    margin-right: 0;
  }

  #mercury .g_price strong {
    color: #f40;
    font-weight: 700;
    font-family: verdana, arial;
  }


  #mercury .g_price-box div {
    display: inline;
    color: #6c6c6c;
  }


  #mercury .g_price-original {
    text-decoration: line-through;
    white-space: nowrap;
    color: #9c9c9c;
    font-weight: 400;
  }

  #mercury .g_price-original {
    text-decoration: line-through;
    white-space: nowrap;
    color: #9c9c9c;
    font-weight: 400;
  }


  #mercury .g_price {
    font-family: arial;
  }

  #mercury .g_price-original span {
    color: #9c9c9c;
  }

  .fav-item .other-container {
    padding-top: 3px;
    height: 18px;
    overflow: hidden;
    line-height: 18px;
    vertical-align: middle;
  }


  .edit-pop {
    display: none;
  }


  .page-nav-box-none {
    height: 80px;
    line-height: 80px;
  }


  .J_guess-you-like {
    font-family: tahoma, arial, "Hiragino Sans GB", "Microsoft YaHei", "Heiti SC Light";
    color: #6c6c6c;
    font-size: 14px;
    width: 1190px;
    margin: 0 auto;
    text-align: left;
  }

  .fav-zuanshi {
    height: 252px;
    overflow: hidden;
  }

  #zuanshiAds {
    margin-right: 28px;
  }

  .zuanshi-ads-trigger {
    position: absolute;
    right: 15px;
    bottom: 15px;
    z-index: 100;
  }

  .zuanshi-ads-trigger li.on {
    background-color: #f60;
    opacity: 1;
    filter: alpha(opacity=100);
  }


  .zuanshi-ads-trigger li {
    float: left;
    width: 14px;
    height: 14px;
    background-color: #fff;
    opacity: .7;
    filter: alpha(opacity=70);
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    cursor: pointer;
    margin: 0 4px;
  }

  .fav-floatbar .fav-tool-hidebtn,
  .fav-floatbar .fav-tool-showbtn {
    width: 68px;
    height: 27px;
    line-height: 27px;
    border: #dcdcdc 1px solid;
    text-align: center;
    display: inline-block;
    color: #6c6c6c;
    text-decoration: none;
    cursor: pointer;
    margin-right: 0;
  }

  .fav-tool-showbtn {
    display: none;
  }


  .fav-tool-list {
    // display: block;
    white-space: nowrap;
  }

  .fav-floatbar .fav-tool-list {
    // display: none;
    height: 29px;
    line-height: 29px;
    white-space: nowrap;
  }

  #mercury .g_price strong {
    color: #f40;
    font-weight: 700;
    font-family: verdana, arial;
  }

  .fav-floatbar .fav-tool-hidebtn[data-v-4352749d],
  .fav-floatbar .fav-tool-showbtn[data-v-4352749d] {
    width: 68px;
    height: 27px;
    line-height: 27px;
    border: #dcdcdc 1px solid;
    text-align: center;
    display: inline-block;
    color: #6c6c6c;
    text-decoration: none;
    cursor: pointer;
    margin-right: 0;
  }


  .fav-floatbar {
    margin-bottom: 10px;
    position: relative;
    z-index: 50;
  }


  .no-border-button:hover {
    background-color: transparent !important;
    color: #f40 !important;
  }

  .actionButton {
    padding: 10px 20px;
    background-color: #ff6a00;
    color: #ffffff;
    border-radius: 4px;
    line-height: 1;
  }

  .actionButton:hover {
    background-color: transparent;
    color: #f40;
    border: 1px solid #f40;
  }

  .checkedActionButton {
    color: #000000 !important;
  }

  .el-button--medium {
    padding: 5px 10px;
    font-size: 13px;
    border-radius: 4px;
  }

  .actionButton:hover {
    border: 1px solid red;
    background-color: white;
  }

  .checkedAll {
    color: black;
    font-size: 14px;
  }

  .checkedAll:hover {
    color: red;
  }

  .checkedAll {
    color: black;
  }

  .no-border-button {
    border: none;
  }

  .search {
    display: inline-block;
    width: 34px;
    height: 29px;
    border: 1px solid #ccc;
  }


  .img-controller-box {
    position: relative;
  }

  .delete-icon-box {
    position: absolute;
    top: 0;
    right: 0;
    display: none;
  }

  .J_FavListItem:hover .delete-icon-box {
    display: block;
  }


  .ri-delete-bin-line {
    font-size: 20px;
  }

  .check-icon-box {
    position: absolute;
    top: 0;
    right: 0;
    display: none;
  }

  .check-icon {
    font-size: 25px;
  }

  .batch-check-icon-box {
    display: block;
  }

  .img-controller-box {
    position: relative;
  }

  //選中前的樣式
  .batch-img-controller-img-box {
    border: #6c6c6c 2px solid;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    filter: alpha(opacity=30);
    opacity: 0.3;
    position: absolute;
    z-index: 1 !important;
  }

  .batch-check-icon-box {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
  }


  .batch-check {
    color: black;
  }


  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #ff6a00 !important;
    color: #FFFFFF !important;
  }


  //選中後的樣式
  .is-check {
    opacity: 1;
    border: red 2px solid;
  }


  .is-check-icon {
    color: red;
  }

  .search-box-new {
    position: relative;
  }

  .search-box-new .search-btnNew {
    position: absolute;
    top: 3px;
    right: 2px;
    padding: 0 20px;
    background-color: #ff6a00;
    color: #ffffff;
    border-radius: 4px;
    line-height: 1;
    padding: 16px 15px;
  }

  .form-control-collect {
    height: 38px;
    //color: #ff6a00;
    border: 1px solid #ff6a00;
    background-color: transparent;
    border-radius: 4px;
    font-size: 16px;
    padding: 10px 15px;
    width: 100%;
    margin: 4px;
  }


  .search-box-new .el-input--medium .el-input__inner {
    height: 38px;
    line-height: 36px;
    margin-top: 4px;
    margin-left: 5px;
  }
  .el-input--medium .el-input__inner {
    height: 28px;
  }
}
</style>
