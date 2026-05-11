<template>
  <header class="header-area">
    <div class="top-header">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <ul class="header-left-content">
              <li>
                <a href="about.html"> 關於我們 </a>
              </li>
              <li>
                聯絡我們 :
                <a href="tel:+1-(514)-321-4567">
                  <span>+1 (514) 321-4567</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4">
            <div class="header-right-content">
              <ul>
                <!-- <li>
                  <div class="navbar-option-item navbar-option-language dropdown language-option">
                    <button class="dropdown-toggle" type="button" id="language2" data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                      <span class="lang-name">English</span>
                    </button>
                    <div class="dropdown-menu language-dropdown-menu" aria-labelledby="language2">
                      <a class="dropdown-item" href="#">
                        <img src="@/assets/front/picture/english.png" alt="Image" />
                        English
                      </a>
                      <a class="dropdown-item" href="#">
                        <img src="@/assets/front/picture/deutsch.png" alt="Image" />
                        Deutsch
                      </a>
                      <a class="dropdown-item" href="#">
                        <img src="@/assets/front/picture/china.png" alt="Image" />
                        簡體中文
                      </a>
                      <a class="dropdown-item" href="#">
                        <img src="@/assets/front/picture/arbic.png" alt="Image" />
                        العربيّة
                      </a>
                    </div>
                  </div>
                </li> -->
                <li>
                  <a href="#">
                    <i class="ri-notification-line"></i>
                    <span class="m-l-10">通知</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ri-message-line"></i>
                    <span class="m-l-10">訊息</span>
                  </a>
                </li>
                <!-- <li
                  class="header-icon dib"
                  :class="{ active: userIsActive }"
                  v-on:click.stop="showUser"
                >
                  <img
                    class="avatar-img"
                    src="@/assets/front/picture/comment-1.jpg"
                  />
                  <span class="user-avatar">
                    {{ username }}
                    <i class="ri-arrow-down-double-line f-s-10"></i>
                  </span>
                  <div
                    class="drop-down dropdown-profile"
                    @mouseenter="userEnter"
                    @mouseleave="userLeave"
                  >
                    <div class="dropdown-content-heading">
                      <span class="text-left">操作</span>
                    </div>
                    <div class="dropdown-content-body">
                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <a href="#">
                            <i class="ri-user-2-line"></i>
                            <span>Profile</span>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="#" @click="Logout">
                            <i class="ri-logout-box-line"></i>
                            <span>登出登入</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li> -->
                <li>
                  <el-popover  width="180" trigger="click">
                    <div slot>
                      <a href="#" class="dropdown-item">
                        <i class="ri-user-2-line"></i>
                        <span class="m-l-10">個人中心</span>
                      </a>
                      <a href="#" class="dropdown-item" @click="toOrderList">
                        <i class="ri-list-unordered"></i>
                        <span class="m-l-10">訂單中心</span>
                      </a>
                      <a href="#" @click="logout" class="dropdown-item">
                        <i class="ri-logout-box-line"></i>
                        <span class="m-l-10">登出登入</span>
                      </a>
                    </div>
                    <div slot="reference">
                      <img class="avatar-img" src="@/assets/front/picture/comment-1.jpg" />
                      <span class="user-avatar">
                        {{ username }}
                        <i class="ri-arrow-down-double-line f-s-10"></i>
                      </span>
                    </div>
                  </el-popover>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="middle-header middle-header-style-two">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3">
            <div class="logo">
              <a href="index.html">
                <img src="@/assets/front/picture/logo.png" alt="Image" />
              </a>
            </div>
          </div>
          <div class="col-lg-5">
            <form class="search-box">
              <input type="text" name="Search" placeholder="Search Products..." class="form-control" />
              <button type="submit" class="search-btn">
                <i class="ri-search-line"></i>
                Search
              </button>
            </form>
          </div>
          <div class="col-lg-4">
            <ul class="wish-cart">
              <li>
                <a href="wishlist.html">
                  <span class="wish-icon">
                    <i class="ri-heart-line"></i>
                    <span class="count">0</span>
                  </span>
                  <span class="favorite">Favorite</span>
                  My Wishlist
                </a>
              </li>
              <li>
                <span class="cart" data-bs-toggle="modal" data-bs-target="#exampleModal-cart">
                  <span class="wish-icon">
                    <i class="ri-shopping-cart-line"></i>
                    <span class="count">0</span>
                  </span>
                  <span class="favorite">Your Cart:</span>
                  $00.00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="navbar-area navbar-area-style-two">
      <div class="mobile-responsive-nav">
        <div class="container">
          <div class="mobile-responsive-menu">
            <div class="navbar-category">
              <button type="button" id="categoryButton-1" data-bs-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                <i class="ri-menu-line"></i>
              </button>
              <div class="navbar-category-dropdown dropdown-menu" aria-labelledby="categoryButton">
                <ul>
                  <li>
                    <a href="products.html">Power Tools</a>
                  </li>
                  <li>
                    <a href="products.html">Hand Tools</a>
                  </li>
                  <li>
                    <a href="products.html">Cordless Tools</a>
                  </li>
                  <li>
                    <a href="products.html">Welding & Soldering</a>
                  </li>
                  <li>
                    <a href="products.html">Gardening Tools</a>
                  </li>
                  <li>
                    <a href="products.html">Air and Gas Powered Tools</a>
                  </li>
                  <li>
                    <a href="products.html">Safety Tools</a>
                  </li>
                  <li>
                    <a href="products.html">Site lighting Tools</a>
                  </li>
                  <li>
                    <a href="products.html">Tools Accessories</a>
                  </li>
                  <li>
                    <a href="products.html">Outdoor Power Equipment</a>
                  </li>
                  <li>
                    <a href="products.html">Safety Tools</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="logo">
              <a href="index.html">
                <img src="static/@/assets/front/picture/logo.png" alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="desktop-nav">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <div class="navbar-category">
              <button type="button" id="categoryButton" data-bs-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                <i class="ri-menu-line"></i>
                ALL CATEGORIES
                <i class="arrow-down ri-arrow-down-s-line"></i>
              </button>
              <div class="navbar-category-dropdown dropdown-menu" aria-labelledby="categoryButton">
                <ul>
                  <li>
                    <a href="products.html">Power Tools</a>
                  </li>
                  <li>
                    <a href="products.html">Hand Tools</a>
                  </li>
                  <li>
                    <a href="products.html">Cordless Tools</a>
                  </li>
                  <li>
                    <a href="products.html">Welding & Soldering</a>
                  </li>
                  <li>
                    <a href="products.html">Gardening Tools</a>
                  </li>
                  <li>
                    <a href="products.html">Air and Gas Powered Tools</a>
                  </li>
                  <li>
                    <a href="products.html">Safety Tools</a>
                  </li>
                  <li>
                    <a href="products.html">Site lighting Tools</a>
                  </li>
                  <li>
                    <a href="products.html">Tools Accessories</a>
                  </li>
                  <li>
                    <a href="products.html">Outdoor Power Equipment</a>
                  </li>
                  <li>
                    <a href="products.html">Safety Tools</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item float-end">
                  <a href="#" class="nav-link active">
                    Home
                    <i class="ri-arrow-down-s-line"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a href="index.html" class="nav-link">Home One</a>
                    </li>
                    <li class="nav-item">
                      <a href="index-2.html" class="nav-link">Home Two</a>
                    </li>
                    <li class="nav-item">
                      <a href="" class="nav-link active">Home Three</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item mega-menu">
                  <a href="#" class="nav-link">
                    Shop
                    <i class="ri-arrow-down-s-line"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <div class="row">
                        <div class="col">
                          <h6 class="sub-menu-title">Product Layouts</h6>
                          <ul class="sub-menu">
                            <li>
                              <a href="products.html">Products</a>
                            </li>
                            <li>
                              <a href="best-sellers.html">Best Sellers</a>
                            </li>
                            <li>
                              <a href="featured-products.html">Featured Products</a>
                            </li>
                            <li>
                              <a href="trending-products.html">Trending Products</a>
                            </li>
                            <li>
                              <a href="new-arrivals.html">New Arrivals</a>
                            </li>
                            <li>
                              <a href="categories.html">Categories</a>
                            </li>
                            <li>
                              <a href="product-details.html">Product Details</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col">
                          <h6 class="sub-menu-title">Other Pages</h6>
                          <ul class="sub-menu">
                            <li>
                              <a href="offer-products.html">Offer Products</a>
                            </li>
                            <li>
                              <a href="shopping-cart.html">Shopping Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="my-account.html">My Account</a>
                            </li>
                            <li>
                              <a href="success-order.html">Success Order</a>
                            </li>
                            <li>
                              <a href="order-tracking.html">Order Tracking</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col">
                          <h6 class="sub-menu-title">Admin Page</h6>
                          <ul class="sub-menu">
                            <li>
                              <a href="dashboard.html">Dashboard</a>
                            </li>
                            <li>
                              <a href="edit-profile.html">Edit Profile</a>
                            </li>
                            <li>
                              <a href="edit-address.html">Edit Address</a>
                            </li>
                            <li>
                              <a href="order-history.html">Order History</a>
                            </li>
                            <li>
                              <a href="order-details.html">Order Details</a>
                            </li>
                            <li>
                              <a href="address.html">Add Address</a>
                            </li>
                            <li>
                              <a href="password.html">Change Password</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col">
                          <a href="products.html" class="menu-img"> </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    Pages
                    <i class="ri-arrow-down-s-line"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a href="about.html" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                      <a href="customer-comments.html" class="nav-link">Customer Comments</a>
                    </li>
                    <li class="nav-item">
                      <a href="faq.html" class="nav-link">FAQ</a>
                    </li>
                    <li class="nav-item">
                      <a href="store-location.html" class="nav-link">Store Location</a>
                    </li>
                    <li class="nav-item">
                      <a href="search-page.html" class="nav-link">Search Page</a>
                    </li>
                    <li class="nav-item">
                      <a href="privacy-policy.html" class="nav-link">Privacy Policy</a>
                    </li>
                    <li class="nav-item">
                      <a href="terms-conditions.html" class="nav-link">Terms & Conditions</a>
                    </li>
                    <li class="nav-item">
                      <a href="coming-soon.html" class="nav-link">Coming Soon</a>
                    </li>
                    <li class="nav-item">
                      <a href="404.html" class="nav-link">404 Page</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    Blog
                    <i class="ri-arrow-down-s-line"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a href="blog.html" class="nav-link">Blog</a>
                    </li>
                    <li class="nav-item">
                      <a href="blog-left-sidebar.html" class="nav-link">Blog Left Sidebar</a>
                    </li>
                    <li class="nav-item">
                      <a href="blog-details.html" class="nav-link">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a href="contact.html" class="nav-link">Contact</a>
                </li>
              </ul>
              <div class="others-options">
                <span>Free shipping on all orders over $100</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      username: "admin",
      // userIsActive: false,
    };
  },
  created() {
    this.username = this.$store.state.user.name;
  },
  methods: {
    // showUser() {
    //   console.log(this.userIsActive);
    //   if (this.userIsActive) {
    //     this.userIsActive = false;
    //   } else {
    //     this.userIsActive = true;
    //     this.time = setTimeout(() => {
    //       this.userIsActive = false;
    //     }, 2000);
    //   }
    // },
    // userEnter() {
    //   this.userIsActive = true;
    //   clearTimeout(this.time);
    // },
    // userLeave() {
    //   this.userIsActive = false;
    // },
    toOrderList() {
      this.$router.push("/order");
    },
    async logout() {
      this.$confirm("確定登出並退出系統嗎？", "提示", {
        confirmButtonText: "確定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$store.dispatch("LogOut").then(() => {
            location.href = "/index";
          });
        })
        .catch(() => {});
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
  /* 除了第一個外，其他的都加上上邊框 */
  border-top: 1px solid #f5f5f5;
}

.m-l-10{
  margin-left: 10px;
}
</style>
