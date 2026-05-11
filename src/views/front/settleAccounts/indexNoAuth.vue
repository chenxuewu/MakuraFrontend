<template>
  <div>
<!--    <Header />-->
    <section class="dashboard-area ptb-30" style="padding: 0px 0px;">
      <div class="container" style="background-color:#ffffff;padding-left: 0px;padding-right: 0px;padding-bottom: 10px;max-width: 750px;">
        <el-row style="margin-top: 5px;">
          <el-col :span="24">
            <el-row :span="24">
              <div>
                <h2
                  style="background: linear-gradient(90deg,#ffac30,#ff6a00,#f56c6c);
                  color: #fff;
                  height: 60px;
                  line-height: 60px;
                  text-align: center;"
                >下單成功</h2>
              </div>
            </el-row>

            <el-row :span="24" style="border-bottom: #cccccc 1px dashed;">
              <el-card shadow="never">
                <div class="info-item">
                  <span class="label">商品名稱：</span>
                  <span class="value">{{ buyerInfo.productName }}</span>
                </div>
                <div class="info-item">
                  <span class="label">購買數量：</span>
                  <span class="value">{{ buyerInfo.buyerCount }}</span>
                </div>
                <div class="info-item">
                  <span class="label">商品單價：</span>
                  <span class="value">{{ buyerInfo.price }}</span>
                </div>
                <div class="info-item">
                  <span class="label">訂單總價：</span>
                  <span class="value">{{ buyerInfo.totalPrice }}</span>
                </div>
              </el-card>
            </el-row>

            <el-row :span="24">
              <el-card shadow="never">
                <div class="info-item">
                  <span class="label">姓名：</span>
                  <span class="value">{{ buyerInfo.name }}</span>
                </div>
                <div class="info-item">
                  <span class="label">行動電話：</span>
                  <span class="value">{{ buyerInfo.phone }}</span>
                </div>
                <div class="info-item">
                  <span class="label">詳細地址：</span>
                  <span class="value">{{ buyerInfo.detailAddress }}</span>
                </div>
                <div class="info-item">
                  <span class="label">電子郵箱：</span>
                  <span class="value">{{ buyerInfo.email }}</span>
                </div>
                <div class="info-item">
                  <span class="label">留言備註：</span>
                  <span class="value">{{ buyerInfo.remark }}</span>
                </div>
              </el-card>
            </el-row>

            <el-row :span="24" style="border-bottom: #cccccc 1px dashed;" v-if="buyerInfo.isNewUser === 0">
              <el-card shadow="never">
                <div class="info-item">
                  <span class="label">已使用收件行動電話為您註冊賬號</span>
                </div>
                <div class="info-item">
                  <span class="label">註冊賬號：</span>
                  <span class="value">{{ buyerInfo.phone }}</span>
                </div>
                <div class="info-item">
                  <span class="label">密碼：</span>
                  <span class="value">{{ buyerInfo.phone }}</span>
                </div>
                <div class="info-item">
                  <span class="label">登入網址為：</span>
                  <span class="value">http://groupbuying.shop</span>
                </div>
              </el-card>
            </el-row>
          </el-col>
        </el-row>
        <el-row style="margin-top: 5px;margin-bottom: 5px;">
          <div style="display: flex;justify-content: center;align-items: center;">
            <button
              style="background: linear-gradient(90deg,#ffac30,#ff6a00,#f56c6c); vertical-align: top;width: 100%"
              @click="back"
              class="goback"
            >返回首頁</button>
          </div>
        </el-row>
        <el-row style="margin-top: 5px;margin-bottom: 5px;">
          <div style="display: flex;justify-content: center;align-items: center;">
            <button
              style="background: linear-gradient(90deg,#ffac30,#ff6a00,#f56c6c); vertical-align: top;width: 100%"
              @click="goToOrderList"
              class="goback"
            >返回訂單列表</button>
          </div>
        </el-row>
        <el-row style="margin-top: 5px;margin-bottom: 5px;">
          <el-col :span="24">
            <el-row :span="24">
              <div>
                <h2
                  style="background: linear-gradient(90deg,#ffac30,#ff6a00,#f56c6c);
                  color: #fff;
                  height: 36px;
                  line-height: 35px;
                  text-align: center;"
                >猜你喜歡</h2>
              </div>
            </el-row>
          </el-col>
        </el-row>
        <el-row style="margin-top: 5px;margin-bottom: 5px;">
          <section class="new-arrivals-area pb-30" style="padding-top: 5px;">
            <div class="container" v-loading="loading">
              <div class="row">
                <div class="col-xl-2 col-sm-6" v-for="item in productList" :key="item.id" style="width: 50%;">
                  <div class="single-products new-arrivals" @click="detail(item.id)" style="border-radius: 5px;border-color: #F0F8FF;overflow: hidden;">
                    <div class="product-img" style="width: 100%; border-color: #F0F8FF;">
                      <a>
                        <el-image
                          style="width: 100%;"
                          :src="item.mainImageUrl"
                          :preview-src-list="[item.mainImageUrl]"
                          fit="contain" lazy></el-image>
                      </a>
                    </div>
                    <div class="product-content" style="border-color: #F0F8FF;padding: 5px;">
                      <p class="product-name" v-html="item.name"></p>
                      <ul class="products-price" style="margin-bottom: 0px;">
                        <li style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;">
                          NT$ {{ item.price }}
                          <p>已賣：{{ item.sale }}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </el-row>
      </div>
    </section>
<!--    <Footer />-->
  </div>
</template>

<script>
import Header from '@v/front/components/header.vue';
import Footer from '@v/front/components/footer.vue';
import { frontListNoLogin } from "@/api/product/purchase";

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      // 選中的address
      buyerInfo: {
        city: '',
        area: '',
        detailAddress: '',
        name: '',
        phone: '',
        email: '',
        remark: '',

        productName: '',
        price: null,
        totalPrice: null,
        buyerCount: null,
        isNewUser: 1
      },
      productList: [],
      searchForm: {
        name: '',
        pageNum: 1,
        pageSize: 8,
        productCategoryIdList: [],
        productCategoryId: null,
        sortType: 1,
        sortMode: 1
      }
    };
  },

  created() {
    // 透過商品詳情跳轉過來
    const receiveInfo = this.$route.query.cartItem;

    if (receiveInfo) {
      const buyProduct = JSON.parse(receiveInfo);
      this.buyerInfo = buyProduct;
    }

    // 查詢列表
    this.getProductList();
  },

  methods: {
    /** 獲取商品列表 */
    async getProductList() {
      this.loading = true;
      await frontListNoLogin(this.searchForm).then(response => {
        this.productList = response.rows;
        this.loading = false;
      });
    },
    detail(id) {
      this.$router.push({
        path: './frontProductDetail',
        query: {
          id: id
        },
      });
    },
    back() {
      this.$router.push({
        path: '/'
      });
    },
    goToOrderList() {
      this.$router.push("/order");
    }
  }

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

  p {
    font-size: 12px;
    line-height: 1.8;
  }

  li,
  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .border-bottom {
    border-bottom: 2px solid #f1f1f1;
  }

  a,
  a:link,
  a:visited {
    color: #36c;
  }

  a:link,
  a:visited {
    color: #5584ff;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  .next-radio-label {
    margin: 0 0 0 4px;
    font-size: 14px;
    vertical-align: middle;
    line-height: 1;
    color: #333;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  a,
  a:link,
  a:visited {
    color: #36c;
  }

  a:link,
  a:visited {
    color: #5584ff;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  .ww-light a span {
    display: none;
  }

  .label {
    display: inline-block;
    padding: 5px;
  }

  .countText {
    display: inline-block;
    height: 14px;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: black;
    width: 75px;
    line-height: 14px;
    margin-top: 11px;
  }

  .showInfo {
    padding: 5px;
  }

  .goback {
    color: #fff;
    height: 35px;
    line-height: 20px;
    text-align: center;
    font-size: 25px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    background: linear-gradient(90deg,#ffac30,#ff6a00,#f56c6c);
    vertical-align: top;
    width: 100%;
  }

  .single-products .product-img img {
    position: static;
  }

}
</style>
