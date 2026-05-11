<template>
  <div>
    <Header @categoryChange="productSearch" />

    <div class="page-title-area" style="padding-top: 15px; padding-bottom: 10px;background-color: #ffffff;">
      <div class="container">
        <div class="page-title-content">
          <ul>
            <li>
              <a @click="allList">
                全部
              </a>
            </li>
            <li class="active">{{ categoryPath }}</li>
          </ul>
        </div>
      </div>
    </div>

    <section class="new-arrivals-area pb-30" style="padding-top: 5px;">
      <div class="container" v-loading="loading">
        <div class="row">
          <div class="col-xl-2 col-sm-6" v-for="item in productList" :key="item.id">
            <div class="single-products new-arrivals" @click="detail(item.id)" style="border-radius: 5px;border-color: #F0F8FF;overflow: hidden;">
              <div class="product-img" style="width: 238px; height: 238px;border-color: #F0F8FF;">
                <a>
                  <el-image
                    style="width: 238px; height: 238px;"
                    :src="item.mainImageUrl"
                    :preview-src-list="[item.mainImageUrl]"
                    fit="scale-down" lazy></el-image>
                </a>
                <!-- <span class="hot new" v-if="item.newStatus === 1">New</span> -->
              </div>
              <div class="product-content" style="border-color: #F0F8FF;padding: 5px;">
                <p class="product-name" v-html="item.name"></p>
                <ul class="products-price" style="margin-bottom: 0px;">
                  <li style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;">
                    NT$ {{ item.price }}
                    <!-- <del>{{ item.price }}</del> -->
                    <p>已賣：{{ item.sale }}</p>
                  </li>
                </ul>
<!--                <ul class="products-cart-wish-view">-->
<!--                  <li>-->
<!--                    <a class="default-btn" @click.stop="addToCart(item.id)">-->
<!--                      <i class="ri-shopping-cart-line"></i>-->
<!--                      加入購物車-->
<!--                    </a>-->
<!--                  </li>-->
<!--                  <li>-->
<!--                    <a class="wish-btn" @click.stop="addToWishlist(item.id)">-->
<!--                      <i class="ri-heart-line"></i>-->
<!--                    </a>-->
<!--                  </li>-->
<!--                  <li>-->
<!--                    <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">-->
<!--                      <i class="ri-eye-line"></i>-->
<!--                    </button>-->
<!--                  </li>-->
<!--                </ul>-->
              </div>
            </div>
          </div>
          <el-empty description="暫無商品" v-show="total <= 0"/>
        </div>
        <div class="row">
          <div class="col-12">
            <pagination
              v-show="total > 0"
              :total="parseInt(total)"
              :page-sizes="pageSizes"
              :page.sync="searchForm.pageNum"
              :limit.sync="searchForm.pageSize" @pagination="getProductList"
            />
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '@v/front/components/header.vue';
import Footer from '@v/front/components/footer.vue';
import { frontProductList, frontGetProductQueryLog } from "@/api/product/product";
import { frontListNoLogin } from "@/api/product/purchase";
import { getChildrenIdList } from "@/utils/array.js";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      username: null,
      loading: true,
      total: 0,
      pageSizes: [30, 60, 90, 120],
      productList: [],
      searchForm: {
        name: '',
        pageNum: 1,
        pageSize: 30,
        productCategoryIdList: [],
        productCategoryId: null,
        sortType: 1,
        sortMode: 1
      },
      categoryPath: "",
    };
  },
  computed: {
    isLoggedIn() {
      return !!this.username; // True if username is not null/undefined/empty
    }
  },
  created() {
    this.username = this.$store.state.user.name;
    if (this.$route.query !== undefined && this.$route.query !== null) {
      let searchForm = this.$route.query;
      this.categoryPath = searchForm.displayName;
      this.searchForm.productCategoryId = searchForm.categoryId;
      this.searchForm.name = searchForm.productName;
    }

    this.getProductList();
  },

  methods: {

    /** 獲取商品列表 */
    async getProductList() {
      this.loading = true;
      // 判斷是否有登入
      if(this.isLoggedIn){
        await frontProductList(this.searchForm).then(response => {
        this.productList = response.rows;
        this.total = response.total;
      });
      }else{
        await frontListNoLogin(this.searchForm).then(response => {
        this.productList = response.rows;
        this.total = response.total;
      });
    }
      this.loading = false;
    },
    /** 商品埋點 */
    async getProductQueryLog(id) {
      if(this.isLoggedIn){
        await frontGetProductQueryLog(id).then(response => {
        console.log("埋點成功" + id);
      });
      }
      this.loading = false;
    },
    // 分類改變
    productSearch(searchForm) {
      this.categoryPath = searchForm.displayName;
      this.searchForm.productCategoryId = searchForm.categoryId;
      this.searchForm.name = searchForm.productName;
      this.getProductList();
    },

    // 跳轉到當前頁
    thisPage(index) {
      this.tablePage.currentPage = index;
      this.getProductList();
    },

    // 上一頁
    previousPage() {
      this.tablePage.currentPage--;
      this.getProductList();
    },

    // 下一頁
    nextPage() {
      this.tablePage.currentPage++;
      this.getProductList();
    },

    // 全部
    allList() {
      this.categoryPath = "";
      this.searchForm.productCategoryIdList = [];
      this.searchForm.productCategoryId = null;
      this.getProductList();
    },

    detail(id) {
      if(this.isLoggedIn){
        try {
          this.getProductQueryLog(id);
        } catch (error) {
          // 處理異常，可以在控制檯輸出錯誤資訊或者執行其他操作
          console.error('失敗', error);
        }
        this.$router.push({
          path: './frontProductDetail',
          query: {
            id: id
          },
      });
      }else{
        this.$router.push({
          path: './purchase/detail',
          query: {
            id: id
          },
      });
    }
    },

    limitCharacters(str, limitPerLine) {
      const charactersPerLine = Math.floor(limitPerLine);
      if (str.length <= charactersPerLine) {
        // 字元串長度不超過20個字元，直接返回
        return str;
      } else if (str.length <= charactersPerLine * 2) {
        // 字元串長度超過20個但不超過40個字元，擷取為兩行
        const line1 = str.slice(0, charactersPerLine);
        const line2 = str.slice(charactersPerLine);
        return `${line1}\n${line2}`;
      } else {
        // 字元串長度超過40個字元，擷取為兩行並加省略號
        const truncatedLine1 = str.slice(0, charactersPerLine);
        const truncatedLine2 = str.slice(charactersPerLine, charactersPerLine * 2 - 3); // 留3個位置顯示省略號
        return `${truncatedLine1}\n${truncatedLine2}`;
      }
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
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #ff6a00 !important;
    color: #FFFFFF !important;
  }

  .single-products.new-arrivals .product-content .products-cart-wish-view li .default-btn {
    padding: 12px 0px;
    font-size: 12px;
    width: 91px;
  }

  .single-products .product-content .title {
    color: #111111;
    margin-bottom: 12px;
    display: block;
    font-size: 12px;
    height: 25px;
  }

  .single-products .product-content .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p:last-child {
    margin-bottom: 0;
    height: 40px;
  }

  .col-xl-2 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 20%;
  }

  .single-products .product-img {
    text-align: center;
    height: 150px;
  }

  .single-products .product-img .hot.new {
    font-size: 12px;
  }

  .product-name {
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0px;
    height: 55px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
