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
                    DFMALB 20V Max XX Oscillating Multi Tool Variable Speed Tool
                  </router-link>
                  <span>$125.00</span>
                  <i class="ri-close-fill"></i>
                </li>
                <li>
                  <img src="/test/static/picture/product-2.jpg" alt="Image">
                  <router-link to="/vertical/shopping-cart">
                    Power Tools Set Chinese Manufacturer Production 50V Lithu Battery
                  </router-link>
                  <span>$125.00</span>
                  <i class="ri-close-fill"></i>
                </li>
                <li>
                  <img src="/test/static/picture/product-3.jpg" alt="Image">
                  <router-link to="/vertical/shopping-cart">
                    Electrical Magnetic Impact Power Hammer Drills Machine
                  </router-link>
                  <span>$125.00</span>
                  <i class="ri-close-fill"></i>
                </li>
                <li>
                  <img src="/test/static/picture/product-4.jpg" alt="Image">
                  <router-link to="/vertical/shopping-cart">
                    Professional Cordless Drill Power Tools Set Competitive Price
                  </router-link>
                  <span>$125.00</span>
                  <i class="ri-close-fill"></i>
                </li>
              </ul>
              <ul class="payable">
                <li>
                  應付總額
                </li>
                <li class="total">
                  <span>$564.00</span>
                </li>
              </ul>
              <ul class="cart-check-btn">
                <li>
                  <router-link to="/vertical/shopping-cart" class="default-btn">
                    查看購物車
                  </router-link>
                </li>
                <li class="checkout">
                  <router-link to="/vertical/checkout" class="default-btn">
                    結帳
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
                首頁
              </router-link>
            </li>
            <li class="active">商品詳情</li>
          </ul>
        </div>
      </div>
    </div>


    <section class="product-details-area ptb-54">
      <div class="container">
        <div class="row align-items-center">
          <div class="product-view-one">
            <div class="modal-content p-0">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="product-view-one-image">
                    <div id="big" class="owl-carousel owl-theme">
                      <div class="item">
                        <img src="/test/static/picture/product-1.jpg" alt="Image">
                      </div>
                      <div class="item">
                        <img src="/test/static/picture/product-2.jpg" alt="Image">
                      </div>
                      <div class="item">
                        <img src="/test/static/picture/product-3.jpg" alt="Image">
                      </div>
                      <div class="item">
                        <img src="/test/static/picture/product-4.jpg" alt="Image">
                      </div>
                      <div class="item">
                        <img src="/test/static/picture/product-5.jpg" alt="Image">
                      </div>
                      <div class="item">
                        <img src="/test/static/picture/product-6.jpg" alt="Image">
                      </div>
                    </div>
                    <div id="thumbs" class="owl-carousel owl-theme">
                      <div class="item">
                        <img src="/test/static/picture/product-1.jpg" alt="Image">
                      </div>
                      <div class="item">
                        <img src="/test/static/picture/product-2.jpg" alt="Image">
                      </div>
                      <div class="item">
                        <img src="/test/static/picture/product-3.jpg" alt="Image">
                      </div>
                      <div class="item">
                        <img src="/test/static/picture/product-4.jpg" alt="Image">
                      </div>
                      <div class="item">
                        <img src="/test/static/picture/product-5.jpg" alt="Image">
                      </div>
                      <div class="item">
                        <img src="/test/static/picture/product-6.jpg" alt="Image">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="product-content ml-15">
                    <h3>
                      Cordless Drill Professional Combo Drill And Screwdriver
                    </h3>
                    <div class="product-review">
                      <div class="rating">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                      </div>
                      <a href="#reviews" class="rating-count">4 則評價</a>
                    </div>
                    <div class="price">
                      <span class="new-price">$119.0 <del>$219.0</del></span>
                      <span class="in-stock">現貨供應（8 件）</span>
                    </div>
                    <ul class="product-info">
                      <li>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dicta a
                          earum aspernatur ea, possimus ad at officia quisquam quos, fugiat quasi
                          nostrum ullam commodi quia, cum laborum dolor molestias fugiat quasi
                          nostrum ullam</p>
                      </li>
                      <li>
                        <span>商品編號：</span>
                        001
                      </li>
                      <li>
                        <span>供貨狀態：</span>
                        可購買
                      </li>
                      <li>
                        <span>品牌：</span>
                        Ehay
                      </li>
                      <li>
                        <span>分類：</span>
                        <router-link to="/vertical/products">電動鑽</router-link>
                      </li>
                    </ul>
                    <div class="product-color-switch">
                      <ul>
                        <li>
                          <span>顏色：</span>
                        </li>
                        <li>
                          <button title="Black" class="color-black"></button>
                        </li>
                        <li>
                          <button title="White" class="color-white"></button>
                        </li>
                        <li class="active">
                          <button title="Green" class="color-green"></button>
                        </li>
                        <li>
                          <button title="Yellow Green" class="color-yellowgreen"></button>
                        </li>
                        <li>
                          <button title="Teal" class="color-teal"></button>
                        </li>
                      </ul>
                    </div>
                    <div class="product-add-to-cart">
                      <div class="input-counter">
                                            <span class="minus-btn">
                                                <i class="ri-add-line"></i>
                                            </span>
                        <input type="text" value="1">
                        <span class="plus-btn">
                                                <i class="ri-subtract-line"></i>
                                            </span>
                      </div>
                      <router-link to="/vertical/shopping-cart" class="default-btn">
                        <i class="ri-shopping-cart-line"></i>
                        加入購物車
                      </router-link>
                    </div>
                    <div class="wishlist-btn">
                      <router-link to="/vertical/wishlist" class="default-btn">
                        <i class="ri-heart-line"></i>
                        加入收藏
                      </router-link>
                    </div>
                    <div class="share-this-product">
                      <ul>
                        <li>
                          <span>分享</span>
                        </li>
                        <li>
                          <a href="javascript:;" target="_blank">
                            <i class="ri-facebook-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;" target="_blank">
                            <i class="ri-instagram-line"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;" target="_blank">
                            <i class="ri-linkedin-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;" target="_blank">
                            <i class="ri-twitter-fill"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12">
            <div id="reviews" class="tab products-details-tab">
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <ul class="tabs">
                    <li>
                      商品描述
                    </li>
                    <li>
                      附加資訊
                    </li>
                    <li>
                      評價
                    </li>
                  </ul>
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="tab_content">
                    <div class="tabs_item">
                      <div class="products-details-tab-content">
                        <h3>商品描述</h3>
                        <p>Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus
                          neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.
                          Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat
                          volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra
                          posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod
                          ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh
                          eget ipsum. Nam consectetuer. Sed aliquam, nunc eget euismod
                          ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh
                          eget ipsum. Nulla libero. Vivamus pharetra posuere sapien.</p>
                        <p>Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus
                          neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.
                          Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat
                          volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra
                          posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod
                          ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh
                          eget ipsum. Nam consectetuer.</p>
                        <h3>規格</h3>
                        <ul class="specification">
                          <li>型號：001</li>
                          <li>電池化學：鋰電池</li>
                          <li>電池電壓：120V</li>
                          <li>電池容量：1.0Ah</li>
                          <li>金屬最大容量：20mm</li>
                          <li>重量：2.5kg</li>
                          <li>鑽孔能力：混凝土：32 mm</li>
                          <li>無負載轉速：0-520 rpm</li>
                        </ul>
                      </div>
                    </div>
                    <div class="tabs_item">
                      <div class="products-details-tab-content">
                        <ul class="additional-information">
                          <li><span>品牌：</span> ThemeForest</li>
                          <li><span>顏色：</span> 棕色</li>
                          <li><span>尺寸：</span> 大、中</li>
                          <li><span>重量：</span> 27 公斤</li>
                          <li><span>尺寸：</span> 16 x 22 x 123 公分</li>
                        </ul>
                      </div>
                    </div>
                    <div class="tabs_item">
                      <div class="products-details-tab-content">
                        <div class="product-review-form">
                          <h3>顧客評價</h3>
                          <div class="review-title">
                            <div class="rating">
                              <i class="ri-star-fill"></i>
                              <i class="ri-star-fill"></i>
                              <i class="ri-star-fill"></i>
                              <i class="ri-star-fill"></i>
                              <i class="ri-star-fill"></i>
                            </div>
                            <p>根據 3 則評價</p>
                            <a href="#" class="btn default-btn">寫評價</a>
                          </div>
                          <div class="review-comments">
                            <div class="review-item">
                              <div class="rating">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                              </div>
                              <h3>Good</h3>
                              <span><strong>Admin</strong> on <strong>July 18,
                                                                2021</strong></span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation labore et dolore</p>
                              <a href="#" class="review-report-link">Report as
                                Inappropriate</a>
                            </div>
                            <div class="review-item">
                              <div class="rating">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                              </div>
                              <h3>Good</h3>
                              <span><strong>Admin</strong> on <strong>July 20,
                                                                2021</strong></span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation labore et dolore</p>
                              <a href="#" class="review-report-link">Report as
                                Inappropriate</a>
                            </div>
                            <div class="review-item">
                              <div class="rating">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                              </div>
                              <h3>Good</h3>
                              <span><strong>Admin</strong> on <strong>July 21,
                                                                2021</strong></span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation labore et dolore</p>
                              <a href="#" class="review-report-link">Report as
                                Inappropriate</a>
                            </div>
                          </div>
                          <div class="review-form">
                            <h3>寫評價</h3>
                            <form>
                              <div class="row">
                                <div class="col-lg-6 col-md-6">
                                  <div class="form-group">
                                    <label>姓名</label>
                                    <input type="text" id="name" name="name"
                                           placeholder="輸入您的姓名"
                                           class="form-control"
                                    >
                                  </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                  <div class="form-group">
                                    <label>電子郵件</label>
                                    <input type="email" id="email" name="email"
                                           placeholder="輸入您的電子郵件"
                                           class="form-control"
                                    >
                                  </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                  <div class="form-group">
                                    <label>評價標題</label>
                                    <input type="text" id="review-title"
                                           name="review-title"
                                           placeholder="輸入評價標題"
                                           class="form-control"
                                    >
                                  </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                  <div class="form-group">
                                    <label>評價內容（1500 字）</label>
                                    <textarea name="review-body" id="review-body"
                                              cols="30" rows="8"
                                              placeholder="在此輸入您的評論"
                                              class="form-control"
                                    ></textarea>
                                  </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                  <button type="submit" class="btn default-btn">提交
                                    評價
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
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


    <section class="best-seller-area pb-30">
      <div class="container">
        <div class="section-title">
          <h2>相關商品</h2>
        </div>
        <div class="best-product-slider owl-carousel owl-theme">
          <div class="single-products">
            <div class="product-img">
              <a href="">
                <img src="/test/static/picture/product-1.jpg" alt="Image">
              </a>
            </div>
            <div class="product-content">
              <a href="" class="title">
                Cordless Drill Professional Combo Drill And Screwdriver
              </a>
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
                  <a href="">
                    (03 則評價)
                  </a>
                </li>
              </ul>
              <ul class="products-price">
                <li>
                  $119.00
                  <del>$219.00</del>
                </li>
                <li>
                  <span>現貨供應</span>
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
          <div class="single-products">
            <div class="product-img">
              <a href="">
                <img src="/test/static/picture/product-2.jpg" alt="Image">
              </a>
            </div>
            <div class="product-content">
              <a href="" class="title">
                Professional Cordless Drill Power Tools Set Competitive Price
              </a>
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
                  <a href="">
                    (03 則評價)
                  </a>
                </li>
              </ul>
              <ul class="products-price">
                <li>
                  $130.00
                  <del>$250.00</del>
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
          <div class="single-products">
            <div class="product-img">
              <a href="">
                <img src="/test/static/picture/product-3.jpg" alt="Image">
              </a>
            </div>
            <div class="product-content">
              <a href="" class="title">
                DFMALB 20V Max XX Oscillating Multi Tool Variable Speed Tool
              </a>
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
                  <a href="">
                    (03 則評價)
                  </a>
                </li>
              </ul>
              <ul class="products-price">
                <li>
                  $150.00
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
          <div class="single-products">
            <div class="product-img">
              <a href="">
                <img src="/test/static/picture/product-4.jpg" alt="Image">
              </a>
            </div>
            <div class="product-content">
              <a href="" class="title">
                Power Tools Set Chinese Manufacturer Production 50V
              </a>
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
                  <a href="">
                    (03 則評價)
                  </a>
                </li>
              </ul>
              <ul class="products-price">
                <li>
                  $111.00
                  <del>$222.00</del>
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
          <div class="single-products">
            <div class="product-img">
              <a href="">
                <img src="/test/static/picture/product-5.jpg" alt="Image">
              </a>
            </div>
            <div class="product-content">
              <a href="" class="title">
                Professional Cordless Drill Power Tools Set Competitive Price
              </a>
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
                  <a href="">
                    (03 則評價)
                  </a>
                </li>
              </ul>
              <ul class="products-price">
                <li>
                  $222.00
                  <del>$250.00</del>
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
  name: 'ProductDetails',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe },
  mixins: [verticalMixin],
  metaInfo: {
    title: 'Ehay - 商品詳情'
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
