<template>
  <div class="vertical-page">


    <VerticalHead />


    <div class="modal fade cart-shit" id="exampleModal-cart" tabindex="-1" aria-hidden="true">
      <div class="cart-shit-wrap">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close-btn" data-bs-dismiss="modal">
                <i class="ri-close-fill"></i>
              </button>
            </div>
            <div class="modal-body">
              <ul class="cart-list">
                <li>
                  <img src="/test/static/picture/product-1.jpg" alt="Image">
                  <router-link to="/vertical/shopping-cart">
                    DFMALB 20V Max XX 多功能振動工具 變速工具
                  </router-link>
                  <span>$125.00</span>
                  <i class="ri-close-fill"></i>
                </li>
                <li>
                  <img src="/test/static/picture/product-2.jpg" alt="Image">
                  <router-link to="/vertical/shopping-cart">
                    電動工具組 中國製造 50V 鋰電池
                  </router-link>
                  <span>$125.00</span>
                  <i class="ri-close-fill"></i>
                </li>
                <li>
                  <img src="/test/static/picture/product-3.jpg" alt="Image">
                  <router-link to="/vertical/shopping-cart">
                    電磁衝擊電鎚鑽機
                  </router-link>
                  <span>$125.00</span>
                  <i class="ri-close-fill"></i>
                </li>
                <li>
                  <img src="/test/static/picture/product-4.jpg" alt="Image">
                  <router-link to="/vertical/shopping-cart">
                    專業無線電鑽電動工具組 優惠價格
                  </router-link>
                  <span>$125.00</span>
                  <i class="ri-close-fill"></i>
                </li>
              </ul>
              <ul class="payable">
                <li>
                  Payable total
                </li>
                <li class="total">
                  <span>$564.00</span>
                </li>
              </ul>
              <ul class="cart-check-btn">
                <li>
                  <router-link to="/vertical/shopping-cart" class="default-btn">
                    View Cart
                  </router-link>
                </li>
                <li class="checkout">
                  <router-link to="/vertical/checkout" class="default-btn">
                    Checkout
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="page-title-area">
      <div class="container">
        <div class="page-title-content">
          <ul>
            <li>
              <router-link to="/vertical/index">
                Home
              </router-link>
            </li>
            <li class="active">Categories</li>
          </ul>
        </div>
      </div>
    </div>


    <section class="categories-area pt-54">
      <div class="container">
        <div class="categories-wrap tab products-details-tab">
          <div class="row">
            <div class="col-lg-3">
              <div class="section-title">
                <h2>Categories</h2>
              </div>
              <ul class="tabs">
                <li>
                  Power Tools
                </li>
                <li>
                  Hand Tools
                </li>
                <li>
                  Cordless Tools
                </li>
                <li>
                  焊接與銲接
                </li>
                <li>
                  園藝工具
                </li>
                <li>
                  安全工具
                </li>
                <li>
                  工地照明工具
                </li>
                <li>
                  工具配件
                </li>
              </ul>
            </div>
            <div class="col-lg-9">
              <div class="tab_content">
                <div class="tabs_item">
                  <div class="categories-slider owl-carousel owl-theme">
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-17.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          電磁衝擊電鎚鑽
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $170.00
                            <del>$220.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-18.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質電動刨木機，4-3/8 吋
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (05 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $69.00
                            <del>$90.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-19.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          白鯨吸塵器 高品質
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $129.00
                            <del>$150.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-20.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質碳鋼迷你鑽孔機
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (11 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $99.00
                            <del>$150.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-21.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          電鎚鑽 200V 機械螺絲起子
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (05 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $159.00
                            <del>$200.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-22.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          多功能螺絲起子組 家用
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (07 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $29.00
                            <del>$50.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-9.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          牆面拋光方形砂紙機 電動
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $89.00
                            <del>$120.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-6.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質碳鋼專業電動工具
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $99.00
                            <del>$130.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tabs_item">
                  <div class="categories-slider owl-carousel owl-theme">
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-17.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          電磁衝擊電鎚鑽
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $170.00
                            <del>$220.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-18.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質電動刨木機，4-3/8 吋
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (05 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $69.00
                            <del>$90.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-19.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          白鯨吸塵器 高品質
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $129.00
                            <del>$150.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-20.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質碳鋼迷你鑽孔機
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (11 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $99.00
                            <del>$150.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-21.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          電鎚鑽 200V 機械螺絲起子
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (05 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $159.00
                            <del>$200.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-22.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          多功能螺絲起子組 家用
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (07 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $29.00
                            <del>$50.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-9.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          牆面拋光方形砂紙機 電動
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $89.00
                            <del>$120.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-6.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質碳鋼專業電動工具
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $99.00
                            <del>$130.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tabs_item">
                  <div class="categories-slider owl-carousel owl-theme">
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-17.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          電磁衝擊電鎚鑽
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $170.00
                            <del>$220.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-18.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質電動刨木機，4-3/8 吋
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (05 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $69.00
                            <del>$90.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-19.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          白鯨吸塵器 高品質
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $129.00
                            <del>$150.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-20.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質碳鋼迷你鑽孔機
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (11 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $99.00
                            <del>$150.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-21.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          電鎚鑽 200V 機械螺絲起子
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (05 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $159.00
                            <del>$200.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-22.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          多功能螺絲起子組 家用
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (07 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $29.00
                            <del>$50.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-9.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          牆面拋光方形砂紙機 電動
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $89.00
                            <del>$120.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-6.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質碳鋼專業電動工具
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $99.00
                            <del>$130.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tabs_item">
                  <div class="categories-slider owl-carousel owl-theme">
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-17.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          電磁衝擊電鎚鑽
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $170.00
                            <del>$220.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-18.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質電動刨木機，4-3/8 吋
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (05 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $69.00
                            <del>$90.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-19.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          白鯨吸塵器 高品質
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $129.00
                            <del>$150.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-20.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質碳鋼迷你鑽孔機
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (11 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $99.00
                            <del>$150.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-21.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          電鎚鑽 200V 機械螺絲起子
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (05 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $159.00
                            <del>$200.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-22.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          多功能螺絲起子組 家用
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (07 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $29.00
                            <del>$50.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-9.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          牆面拋光方形砂紙機 電動
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $89.00
                            <del>$120.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-6.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質碳鋼專業電動工具
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $99.00
                            <del>$130.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tabs_item">
                  <div class="categories-slider owl-carousel owl-theme">
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-17.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          電磁衝擊電鎚鑽
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $170.00
                            <del>$220.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-18.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質電動刨木機，4-3/8 吋
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (05 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $69.00
                            <del>$90.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-19.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          白鯨吸塵器 高品質
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $129.00
                            <del>$150.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-20.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質碳鋼迷你鑽孔機
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (11 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $99.00
                            <del>$150.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-21.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          電鎚鑽 200V 機械螺絲起子
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (05 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $159.00
                            <del>$200.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-22.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          多功能螺絲起子組 家用
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (07 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $29.00
                            <del>$50.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-9.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          牆面拋光方形砂紙機 電動
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $89.00
                            <del>$120.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-6.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質碳鋼專業電動工具
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $99.00
                            <del>$130.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tabs_item">
                  <div class="categories-slider owl-carousel owl-theme">
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-17.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          電磁衝擊電鎚鑽
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $170.00
                            <del>$220.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-18.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質電動刨木機，4-3/8 吋
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (05 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $69.00
                            <del>$90.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-19.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          白鯨吸塵器 高品質
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $129.00
                            <del>$150.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-20.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質碳鋼迷你鑽孔機
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (11 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $99.00
                            <del>$150.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-21.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          電鎚鑽 200V 機械螺絲起子
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (05 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $159.00
                            <del>$200.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-22.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          多功能螺絲起子組 家用
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (07 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $29.00
                            <del>$50.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-9.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          牆面拋光方形砂紙機 電動
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $89.00
                            <del>$120.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-6.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質碳鋼專業電動工具
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $99.00
                            <del>$130.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tabs_item">
                  <div class="categories-slider owl-carousel owl-theme">
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-17.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          電磁衝擊電鎚鑽
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $170.00
                            <del>$220.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-18.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質電動刨木機，4-3/8 吋
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (05 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $69.00
                            <del>$90.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-19.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          白鯨吸塵器 高品質
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $129.00
                            <del>$150.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-20.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質碳鋼迷你鑽孔機
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (11 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $99.00
                            <del>$150.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-21.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          電鎚鑽 200V 機械螺絲起子
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (05 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $159.00
                            <del>$200.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-22.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          多功能螺絲起子組 家用
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (07 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $29.00
                            <del>$50.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-9.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          牆面拋光方形砂紙機 電動
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $89.00
                            <del>$120.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-6.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質碳鋼專業電動工具
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $99.00
                            <del>$130.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tabs_item">
                  <div class="categories-slider owl-carousel owl-theme">
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-17.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          電磁衝擊電鎚鑽
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $170.00
                            <del>$220.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-18.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質電動刨木機，4-3/8 吋
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (05 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $69.00
                            <del>$90.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-19.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          白鯨吸塵器 高品質
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $129.00
                            <del>$150.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-20.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質碳鋼迷你鑽孔機
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (11 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $99.00
                            <del>$150.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-21.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          電鎚鑽 200V 機械螺絲起子
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (05 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $159.00
                            <del>$200.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-22.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          多功能螺絲起子組 家用
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (07 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $29.00
                            <del>$50.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-9.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          牆面拋光方形砂紙機 電動
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $89.00
                            <del>$120.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-6.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質碳鋼專業電動工具
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $99.00
                            <del>$130.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tabs_item">
                  <div class="categories-slider owl-carousel owl-theme">
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-17.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          電磁衝擊電鎚鑽
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $170.00
                            <del>$220.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-18.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質電動刨木機，4-3/8 吋
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (05 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $69.00
                            <del>$90.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-19.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          白鯨吸塵器 高品質
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $129.00
                            <del>$150.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-20.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質碳鋼迷你鑽孔機
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (11 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $99.00
                            <del>$150.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-21.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          電鎚鑽 200V 機械螺絲起子
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (05 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $159.00
                            <del>$200.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-22.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          多功能螺絲起子組 家用
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (07 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $29.00
                            <del>$50.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-9.jpg" alt="Image">
                        </router-link>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          牆面拋光方形砂紙機 電動
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $89.00
                            <del>$120.00</del>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="single-products new-arrivals">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-6.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          高品質碳鋼專業電動工具
                        </router-link>
                        <ul class="products-rating">
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <i class="ri-star-fill"></i>
                          </li>
                          <li>
                            <router-link to="/vertical/product-details">
                              (10 則評價)
                            </router-link>
                          </li>
                        </ul>
                        <ul class="products-price">
                          <li>
                            $99.00
                            <del>$130.00</del>
                          </li>
                          <li>
                            <span>In Stock</span>
                          </li>
                        </ul>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              Add To Cart
                            </router-link>
                          </li>
                          <li>
                            <router-link to="/vertical/wishlist" class="wish-btn">
                              <i class="ri-heart-line"></i>
                            </router-link>
                          </li>
                          <li>
                            <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              <i class="ri-eye-line"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="popular-categories-area ptb-54">
      <div class="container">
        <div class="section-title">
          <h2>熱門分類</h2>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-6">
            <div class="single-categories">
              <router-link to="/vertical/product-details">
                <img src="/test/static/picture/product-25.png" alt="Image">
              </router-link>
              <h3>
                <router-link to="/vertical/product-details">
                  電動工具
                </router-link>
              </h3>
              <span>15 件商品</span>
              <a href="javascript:;" class="read-more">
                立即選購
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-categories bg-eff5ff">
              <router-link to="/vertical/product-details">
                <img src="/test/static/picture/product-26.png" alt="Image">
              </router-link>
              <h3>
                <router-link to="/vertical/product-details">
                  機械工具
                </router-link>
              </h3>
              <span>05 件商品</span>
              <a href="javascript:;" class="read-more">
                立即選購
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-categories bg-ebf1f5">
              <router-link to="/vertical/product-details">
                <img src="/test/static/picture/product-27.png" alt="Image">
              </router-link>
              <h3>
                <router-link to="/vertical/product-details">
                  手工具
                </router-link>
              </h3>
              <span>18 件商品</span>
              <a href="javascript:;" class="read-more">
                立即選購
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-categories bg-ebf9ea">
              <router-link to="/vertical/product-details">
                <img src="/test/static/picture/product-28.png" alt="Image">
              </router-link>
              <h3>
                <router-link to="/vertical/product-details">
                  無線工具
                </router-link>
              </h3>
              <span>19 件商品</span>
              <a href="javascript:;" class="read-more">
                立即選購
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-categories bg-fff8e5">
              <router-link to="/vertical/product-details">
                <img src="/test/static/picture/product-29.png" alt="Image">
              </router-link>
              <h3>
                <router-link to="/vertical/product-details">
                  焊接工具
                </router-link>
              </h3>
              <span>04 件商品</span>
              <a href="javascript:;" class="read-more">
                立即選購
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-categories bg-f3f1ff">
              <router-link to="/vertical/product-details">
                <img src="/test/static/picture/product-30.png" alt="Image">
              </router-link>
              <h3>
                <router-link to="/vertical/product-details">
                  套筒扳手
                </router-link>
              </h3>
              <span>12 件商品</span>
              <a href="javascript:;" class="read-more">
                立即選購
              </a>
            </div>
          </div>
          <div class="col-12">
            <div class="pagination-area text-center">
              <span class="page-numbers current" aria-current="page">1</span>
              <a href="" class="page-numbers">2</a>
              <a href="" class="page-numbers">3</a>
              <a href="" class="next page-numbers">
                <i class="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <VerticalSubscribe />

    <VerticalFoot />

  </div>

</template>

<script>
import VerticalHead from './components/head.vue'
import VerticalFoot from './components/foot.vue'
import VerticalSubscribe from './components/subscribe.vue'
import verticalMixin from '@/mixins/vertical'

export default {
  name: 'Categories',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe },
  mixins: [verticalMixin],
  metaInfo: {
    title: 'Ehay - Tools Store HTML Template'
  }
}
</script>
<style>
/* 第三方库全局样式（不能 scoped，否则动态生成的元素无法匹配） */
@import '/test/static/css/bootstrap.min.css';
@import '/test/static/css/owl.theme.default.min.css';
@import '/test/static/css/owl.carousel.min.css';
@import '/test/static/css/remixicon.css';
@import '/test/static/css/meanmenu.min.css';
@import '/test/static/css/animate.min.css';
@import '/test/static/css/style.css';
@import '/test/static/css/responsive.css';
</style>

<style scoped>
/* 确保样式在 Vue 组件中正确应用 */
.vertical-page {
  width: 100%;
}

.vertical-page :deep(*) {
  box-sizing: border-box;
}

.vertical-page :deep(.container) {
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 12px;
}

.vertical-page :deep(.row) {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
}

.vertical-page :deep([class*="col-"]) {
  padding: 0 12px;
}
</style>
