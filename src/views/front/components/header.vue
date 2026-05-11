<template>
  <header class="header-area">
    <div class="top-header" style="padding-top: 10px; padding-bottom: 4px;">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <ul class="header-left-content">
              <li v-if="isLoggedIn">
                <a class="header-a" href="#" v-if="backend" @click="toBackend"> 管理後臺 </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4">
            <div class="header-right-content">
              <ul>
                <li v-if="isLoggedIn">
                  <a href="#" @click="toOrderList">
                    <i class="ri-list-unordered"></i>
                    <span class="m-l-10">訂單</span>
                  </a>
                </li>
                <li v-if="isLoggedIn">
                  <a href="#" @click="toProfileNotice">
                    <el-popover placement="bottom" width="600" trigger="hover">
                      <div class="notice-container">
                        <div v-for="(item, index) in noticeList" :key="index" class="notice-item">
                          <div class="first-row">
                            <el-tooltip :content="item.noticeTitle" placement="top" effect="dark">
                              <span class="title ellipsis">{{ item.noticeTitle }}</span>
                            </el-tooltip>
                            <el-tooltip :content="item.createTime" placement="top" effect="dark">
                              <span class="time ellipsis">{{ item.createTime }}</span>
                            </el-tooltip>
                          </div>
                          <el-tooltip :content="item.noticeContent.replace(/<[^>]+>/g, '')" placement="top" effect="dark">
                            <div class="content ellipsis-content" v-html="item.noticeContent"></div>
                          </el-tooltip>
                        </div>
                      </div>
                      <div slot="reference">
                        <i class="ri-notification-line"></i>
                        <span class="m-l-10">通知</span>
                      </div>
                    </el-popover>
                  </a>
                </li>
                <li v-if="isLoggedIn">
                  <a href="#">
                    <i class="ri-message-line"></i>
                    <span class="m-l-10">訊息</span>
                  </a>
                </li>
                <li>
                  <el-popover width="180" trigger="manual" v-model="isPopoverVisible" v-if="isLoggedIn">
                    <div slot>
                      <a href="#" class="dropdown-item" @click="toProfile">
                        <i class="ri-user-2-line"></i>
                        <span class="m-l-10">個人中心</span>
                      </a>
                      <a href="#" class="dropdown-item" @click="toOrderList">
                        <i class="ri-list-unordered"></i>
                        <span class="m-l-10">訂單中心</span>
                      </a>
                      <a href="#" @click.stop="logoutVisible" class="dropdown-item">
                        <i class="ri-logout-box-line"></i>
                        <span class="m-l-10">登出登入</span>
                      </a>
                    </div>
                    <div slot="reference" @click="handlePopover">
                      <img class="avatar-img" src="@/assets/front/picture/comment-1.jpg" />
                      <span class="user-avatar">
                        {{ username }}
                        <i class="ri-arrow-down-double-line f-s-10"></i>
                      </span>
                    </div>
                  </el-popover>
                  <a href="#" @click="toLogin" v-else>
                    <span class="user-avatar">登入</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="middle-header middle-header-style-two" style="padding-top: 8px; padding-bottom: 8px;">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3">
            <div class="logo">
              <a href="">
                <img src="@/assets/front/picture/logo.png" alt="Image" />
              </a>
            </div>
          </div>
          <div class="col-lg-5">
            <form class="search-box">
              <input type="text" v-model="productName" placeholder="搜尋商品名稱" class="form-control" @change="productPage()"/>
              <span class="search-btnNew" style="top:0px; right:0px; padding: 19px 30px; margin-top: 1px;" @click="productPage()">
                <i class="ri-search-line"></i>
                搜尋
              </span>
            </form>
          </div>
          <div class="col-lg-4">
            <ul class="wish-cart">
              <li v-if="isLoggedIn">
                <a href="#" @click="toCollect">
                  <span class="wish-icon">
                    <i class="ri-heart-line"></i>
                    <span class="count">{{ collectCount }}</span>
                  </span>
                  <span class="favorite">Favorite</span>
                  我的收藏
                </a>
              </li>
              <li v-if="isLoggedIn">
                <a href="#" @click="toCart">
                  <span class="cart" data-bs-toggle="modal" data-bs-target="#exampleModal-cart">
                    <span class="wish-icon">
                      <i class="ri-shopping-cart-line"></i>
                      <span class="count">{{ cartItemCount }}</span>
                    </span>
                    <span class="favorite">Cart</span>
                    購物車
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="navbar-area navbar-area-style-two">
      <div class="desktop-nav">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light" style="height: 68px;margin: 0px 0px;">
<!--            <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" style="padding: 4px 10px;border: none;">-->
<!--              <el-submenu index="1" class="navbar-category" popper-class="menu1">-->
<!--                <template slot="title">-->
<!--                  <span style="font-size: 18px;">全部商品分類</span>-->
<!--                </template>-->

<!--                <el-menu-item v-for="(item, index) in categorytList" :index="'1-' + index" :key="index"-->
<!--                  @click="productPage(item.id, item.displayName)">-->
<!--                  {{ item.displayName }}-->
<!--                </el-menu-item>-->
<!--              </el-submenu>-->
<!--            </el-menu>-->
            <div class="navbar-category">
              <vxe-select v-model="categoryId" placeholder="全部商品分類" :options="categorytList" @change="productPage(categoryId)" clearable>
                <template #option="{ option }">
                  <span>{{ option.label }}</span>
                </template>
              </vxe-select>
            </div>
            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item float-end">
                  <a class="nav-link" @click="productPage()" style="font-size: 16px;">
                    美拼首頁
                  </a>
                </li>
                <li class="nav-item mega-menu">
                  <a class="nav-link" @click="productPage('1773333991396843522')" style="font-size: 16px;">
                    成人用品
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="productPage('100001')" style="font-size: 16px;">
                    保健品
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="productPage('100016')" style="font-size: 16px;">
                    包包
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="productPage('100012')" style="font-size: 16px;">
                    鞋子
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="productPage('100631')" style="font-size: 16px;">
                    寵物
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="productPage('1773335506144567297')" style="font-size: 16px;">
                    醫療器械
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="productPage('100009')" style="font-size: 16px;">
                    時尚配件
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="productPage('100534')" style="font-size: 16px;">
                    手錶
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <!-- 公共彈窗 -->
    <CustomPrompt :visible="dialogVisible" :dialog-title="dialogTitle" :input-placeholder="dialogInputPlaceholder"
                  :confirm-button-style="confirmButtonStyle" width="25%" :tooltipVisible="true" :reasonVisible="reasonVisible"
                  :tooltip="dialogMessage" @update:visible="closeDialog" @confirm="handleConfirm" @cancel="handleCancel">
    </CustomPrompt>
  </header>
</template>

<script>
import { getFrontProductCategoryTree } from "@/api/product/attribute";
import { cartListOne } from "@/api/cart/cart";
import { getProductUserCollectList } from "@/api/product/productUserCollect";
import CustomPrompt from "../components/CustomPrompt";
import { listNotice } from "@/api/system/notice";

export default {
  name: "Header",
  components: {
    CustomPrompt,
  },
  data() {
    return {
      username: null,
      // userIsActive: false,
      isPopoverVisible: false,
      activeIndex: "1",
      categorytList: [],
      noticeList: [],
      cartItemCount: 0,
      collectCount: 0,
      dialogVisible: false,
      dialogMessage: "",
      // 對話方塊元件的資料
      reasonVisible: false,//是否顯示理由輸入框
      dialogTitle: '提示',//對話方塊標題
      // tooltip:'是否確認刪除改使用者收貨地址？',//提示資訊
      dialogInputPlaceholder: '請輸入理由',//輸入框佔位符
      confirmButtonStyle: { // 確認按鈕樣式
        color: '#FFFFFF',
        backgroundColor: '#fa9852',
        borderColor: '#fa9852',
      },
      queryCollectListParams: {
        pageNum: 1,
        pageSize: 1,
        productName: "",
      },
      // 查詢通知公告引數
      queryNoticeParams: {
        pageNum: 1,
        pageSize: 10,
        status: '0'
      },
      productName: "",
      currentCategory: null,
      //管理後臺是否顯示
      backend: false,
      categoryId: null
    };
  },
  computed: {
    isLoggedIn() {
      return !!this.username; // True if username is not null/undefined/empty
    }
  },
  created() {
    // Set username from Vuex store
    this.username = this.$store.state.user.name;
    this.backend = this.$store.state.user.userType != "03";

    // Load data only if logged in
    if (this.isLoggedIn) {
      this.getListNotice();
      this.getMyCartList();
      this.getCollectList();
    }

    // Always load category list (available to all users)
    this.geCategorytList();
  },
  methods: {
    /** 查詢公告列表 */
    getListNotice() {
      listNotice(this.queryNoticeParams).then(response => {
        this.noticeList = response.rows;
      });
    },
    /** 獲取商品類目列表 */
    async geCategorytList() {
      this.loading = true;
      await getFrontProductCategoryTree().then((response) => {
        this.categorytList = response.data.map((item) => {
          item["label"] = item.displayName;
          item["value"] = item.id;
          return item;
        });
      });
    },
    /** 查詢我的訂單列表 */
    getCollectList() {
      getProductUserCollectList(this.queryCollectListParams).then(response => {
        this.collectCount = response.total;
      });
    },
    /** 獲取購物車商品數量 */
    async getMyCartList() {
      await cartListOne().then(response => {
        this.cartItemCount = response.total;
      });
    },
    productPage(categoryId) {
      let displayName = null;
      if (categoryId !== null && categoryId !== undefined) {
        let categoryEntity = this.categorytList.find(en => {
          return en.value === categoryId;
        });
        if (categoryEntity !== null && categoryEntity !== undefined) {
          displayName = categoryEntity.label;
        }
      } else {
        this.categoryId = null;
      }

      //觸發自定義事件categoryChange
      if (this.$route.path !== '/') {
        this.$router.push({
          path: '/',
          query: {
            productName: this.productName,
            categoryId: categoryId,
            displayName: displayName
          }
        });
      } else {
        this.$emit("categoryChange", { productName: this.productName, categoryId: categoryId, displayName: displayName });
      }
    },
    toOrderList() {
      this.$router.push("/order");
    },
    toProfile() {
      this.$router.push("/profile");
    },
    toProfileNotice() {
      // 新增地址引數 type
      this.$router.push({ path: "/profile", query: { type: "4" } });
    },
    toHome() {
      this.$router.push("/");
    },
    toLogin() {
      this.$router.push("/login");
    },
    // async logout() {
    //   this.$confirm("確定登出並退出系統嗎？", "提示", {
    //     confirmButtonText: "確定",
    //     cancelButtonText: "取消",
    //     type: "warning",
    //   })
    //     .then(() => {
    //       this.$store.dispatch("LogOut").then(() => {
    //         location.href = "/index";
    //       });
    //     })
    //     .catch(() => { });
    // },
    logoutVisible() {
      this.dialogVisible = true;
      this.dialogMessage = "確定登出並退出系統嗎？";
    },

    /** 對話方塊確認回撥方法 */
    handleConfirm() {
      this.dialogVisible = false;
      this.$store.dispatch("LogOut").then(() => {
        location.href = "/index";
      });
    },

    /** 對話方塊取消回撥方法 */
    handleCancel() {
      this.dialogVisible = false;
    },

    /** 關閉對話方塊 */
    closeDialog(visible) {
      this.dialogVisible = visible;
    },
    handlePopover() {
      this.isPopoverVisible = !this.isPopoverVisible;
    },
    logout() {
      this.$store.dispatch("LogOut").then(() => {
        location.href = "/index";
      });
    },
    toCart() {
      this.$router.push("/cart");
    },
    toCollect() {
      this.$router.push("/myCollect");
    },
    toBackend() {
      this.$router.push("/index");
    },
  },
};
</script>

<style scoped>
.avatar-img {
  border-radius: 100px;
  width: 25px;
  position: relative;
  top: -3px;
}

.user-avatar {
  margin-left: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #252525;
}

.header-icon.active .drop-down {
  visibility: visible;
  opacity: 1;
  -webkit-transform: translateY(0px);
  transform: translateY(0px);
  z-index: 9999;
  /* 設定z-index為一個較大的值 */
}

.drop-down {
  background: #fff;
  color: #252525;
  visibility: visible;
  opacity: 0;
  width: 320px;
  position: absolute;
  right: 0;
  top: 55px;
  -webkit-transform: translateY(50px);
  transform: translateY(50px);
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  border-top: 0px;
  border: 1px solid #e7e7e7;
}

.dropdown-content-heading {
  padding: 10px 15px;
}

.dropdown-content-heading span {
  font-size: 13px;
  color: #878787;
}

.dropdown-content-heading i {
  position: relative;
  top: 5px;
  opacity: 1 !important;
  color: #f96332;
}

.dropdown-content-body li {
  padding: 15px;
  border-top: 1px solid #f5f5f5;
}

.dropdown-content-body li:hover,
.dropdown-content-body li:focus,
.dropdown-content-body li.active {
  background: #f5f5f5;
  border-top: 1px solid #f5f5f5;
}

.dropdown-content-body li a:hover,
.dropdown-content-body li a:focus,
.dropdown-content-body li a.active {
  color: #878787;
}

.dropdown-content-body li:last-child {
  padding: 5px 15px;
}

.dropdown-profile {
  width: 200px;
}

.dropdown-profile .trial-day {
  font-size: 11px;
  padding-top: 2px;
  color: #f96332;
}

.dropdown-profile li {
  padding: 7px 15px;
}

.dropdown-profile li a {
  display: block;
  color: #878787;
}

.dropdown-profile li a:hover,
.dropdown-profile li a:focus,
.dropdown-profile li a.active {
  color: #878787;
}

.dropdown-profile li a span {
  font-size: 14px;
}

.dropdown-profile li a i {
  margin-right: 5px;
  font-size: 14px;
}

.dropdown-profile li:last-child {
  padding: 7px 15px;
}

.dropdown-menu {
  -webkit-box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.05);
  background: #ffffff;
  border-radius: 0;
  display: block;
  border: none;
  z-index: 99;
  opacity: 0;
  padding: 0;
}

a.dropdown-item {
  padding: 8px 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transition: all ease 0.5s;
  transition: all ease 0.5s;
  font-size: 15px;
}

a.dropdown-item:not(:first-child) {
  border-top: 1px solid #f5f5f5;
}

.m-l-10 {
  margin-left: 10px;
}

/* .home-header-menu {
  height: 40vh;
  overflow: auto;
} */

/* .el-menu--horizontal,
.home-header-menu{
  height: 40vh;
  overflow: auto;
} */

::v-deep .menu1 {
  height: 50px;
  overflow: auto;
}

/** header 背景logo被修改 */
::v-deep .logo {
  background: transparent;
  display: inline-block;
  padding: 0;
  line-height: 50px;
  text-align: center;
  width: 185px;
  -webkit-transition: width 300ms ease-in-out;
  transition: width 300ms ease-in-out;
}

.middle-header .search-box .search-btnNew {
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

::v-deep .vxe-select > .vxe-input {
  height: 68px;
}

::v-deep .vxe-select > .vxe-input .vxe-input--inner {
  border: none;
  border-radius: 0px;
  font-size: 17px;
  text-align: center;
}

::v-deep .vxe-select--panel {
  padding: 0px 0px;
  border-radius: 5px;
}

::v-deep .vxe-select-option--wrapper {
  max-height: 500px;
  padding: 0px 0px;
  border-radius: 5px;
  border: none;
}

::v-deep .ellipsis {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

::v-deep .ellipsis-content {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}

::v-deep .ellipsis-content * {
  display: inline;
}

::v-deep .notice-container {
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
}

::v-deep .notice-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;
}

::v-deep .notice-item:last-child {
  border-bottom: none;
}

::v-deep .first-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

::v-deep .first-row .title {
  flex: 1;
  font-weight: bold;
  max-width: 350px;
}

::v-deep .first-row .time {
  flex: 0 0 auto;
  text-align: right;
  max-width: 200px;
}

::v-deep .content {
  width: 100%;
}

.top-header .header-left-content li a.header-a {
  font-weight: bold;
  color: #ff6a00;
}
</style>
