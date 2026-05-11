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
            <li class="active">全部商品</li>
          </ul>
        </div>
      </div>
    </div>


    <section class="products-area ptb-54">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="widget-sidebar mr-15">
              <div class="sidebar-widget categories">
                <ul>
                  <li>
                    <h3>商品分類</h3>
                  </li>
                  <li>
                    <router-link to="/vertical/categories">
                      <i class="ri-arrow-right-s-line"></i>
                      電動工具
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/categories">
                      <i class="ri-arrow-right-s-line"></i>
                      手工具
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/categories">
                      <i class="ri-arrow-right-s-line"></i>
                      無線工具
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/categories">
                      <i class="ri-arrow-right-s-line"></i>
                      焊接與銲接
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/categories">
                      <i class="ri-arrow-right-s-line"></i>
                      園藝工具
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/categories">
                      <i class="ri-arrow-right-s-line"></i>
                      安全工具
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/categories">
                      <i class="ri-arrow-right-s-line"></i>
                      工地照明工具
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/categories">
                      <i class="ri-arrow-right-s-line"></i>
                      工具配件
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/categories">
                      <i class="ri-arrow-right-s-line"></i>
                      戶外動力設備
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="sidebar-widget filter">
                <h3>按價格篩選</h3>
                <form class="price-range-content">
                  <div class="price-range-bar" id="range-slider"></div>
                  <div class="price-range-filter">
                    <div class="price-range-filter-item">
                      <input type="text" id="price-amount" readonly="">
                    </div>
                  </div>
                </form>
              </div>
              <div class="sidebar-widget brand">
                <ul>
                  <li>
                    <h3>品牌</h3>
                  </li>
                  <li>
                    <div class="form-group checkboxs">
                      <input type="checkbox" class="chb2">
                      Depen
                      <span>(21)</span>
                    </div>
                  </li>
                  <li>
                    <div class="form-group checkboxs">
                      <input type="checkbox" class="chb2">
                      Esit
                      <span>(10)</span>
                    </div>
                  </li>
                  <li>
                    <div class="form-group checkboxs">
                      <input type="checkbox" class="chb2">
                      Mund
                      <span>(15)</span>
                    </div>
                  </li>
                  <li>
                    <div class="form-group checkboxs">
                      <input type="checkbox" class="chb2">
                      Roose
                      <span>(05)</span>
                    </div>
                  </li>
                  <li>
                    <div class="form-group checkboxs">
                      <input type="checkbox" class="chb2">
                      Scora
                      <span>(13)</span>
                    </div>
                  </li>
                  <li>
                    <div class="form-group checkboxs">
                      <input type="checkbox" class="chb2">
                      Wikin
                      <span>(17)</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="product-color">
                <div class="product-color-switch">
                  <ul>
                    <li class="title">
                      <h3>顏色</h3>
                    </li>
                    <li>
                      <button title="Black" class="color-d9d9d9"></button>
                    </li>
                    <li>
                      <button title="White" class="color-f759ab"></button>
                    </li>
                    <li class="active">
                      <button title="Green" class="color-9254de"></button>
                    </li>
                    <li>
                      <button title="Yellow Green" class="color-597ef7"></button>
                    </li>
                    <li>
                      <button title="Teal" class="color-40a9ff"></button>
                    </li>
                    <li>
                      <button title="Teal" class="color-36cfc9"></button>
                    </li>
                    <li>
                      <button title="Teal" class="color-73d13d"></button>
                    </li>
                    <li>
                      <button title="Teal" class="color-bae637"></button>
                    </li>
                    <li>
                      <button title="Teal" class="color-ffec3d"></button>
                    </li>
                    <li>
                      <button title="Teal" class="color-ffc53d"></button>
                    </li>
                    <li>
                      <button title="Teal" class="color-9ae6b4"></button>
                    </li>
                    <li>
                      <button title="Teal" class="color-ff7a45"></button>
                    </li>
                    <li>
                      <button title="Teal" class="color-ff4d4f"></button>
                    </li>
                    <li>
                      <button title="Teal" class="color-63b3ed"></button>
                    </li>
                    <li>
                      <button title="Teal" class="color-d69e2e"></button>
                    </li>
                    <li>
                      <button title="Teal" class="color-c05621"></button>
                    </li>
                    <li>
                      <button title="Teal" class="color-38b2ac"></button>
                    </li>
                    <li>
                      <button title="Teal" class="color-b794f4"></button>
                    </li>
                    <li>
                      <button title="Teal" class="color-fbb6ce"></button>
                    </li>
                    <li>
                      <button title="Teal" class="color-000000"></button>
                    </li>
                    <li>
                      <button title="Teal" class="color-2d3748"></button>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="trendingss">
                <ul class="trending-product-list">
                  <li>
                    <h3>熱銷商品</h3>
                  </li>
                  <li class="single-list">
                    <img src="/test/static/picture/product-12.jpg" alt="Image">
                    <div class="product-content">
                      <router-link to="/vertical/product-details" class="title">
                        Good Quality Electric Cordless Drill
                      </router-link>
                      <ul class="products-price">
                        <li>
                          $29.00
                          <del>$50.00</del>
                        </li>
                      </ul>
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
                      </ul>
                    </div>
                  </li>
                  <li class="single-list">
                    <img src="/test/static/picture/product-13.jpg" alt="Image">
                    <div class="product-content">
                      <router-link to="/vertical/product-details" class="title">
                        High Quality Industrial Wood Planer
                      </router-link>
                      <ul class="products-price">
                        <li>
                          $19.00
                          <del>$30.00</del>
                        </li>
                      </ul>
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
                      </ul>
                    </div>
                  </li>
                  <li class="single-list">
                    <img src="/test/static/picture/product-14.jpg" alt="Image">
                    <div class="product-content">
                      <router-link to="/vertical/product-details" class="title">
                        Professional Straight Cutting Scissor
                      </router-link>
                      <ul class="products-price">
                        <li>
                          $29.00
                          <del>$50.00</del>
                        </li>
                      </ul>
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
                      </ul>
                    </div>
                  </li>
                  <li class="single-list">
                    <img src="/test/static/picture/product-15.jpg" alt="Image">
                    <div class="product-content">
                      <router-link to="/vertical/product-details" class="title">
                        90 Degree Angle Square Combination Handle
                      </router-link>
                      <ul class="products-price">
                        <li>
                          $10.00
                          <del>$15.00</del>
                        </li>
                      </ul>
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
                      </ul>
                    </div>
                  </li>
                  <li class="single-list">
                    <img src="/test/static/picture/product-16.jpg" alt="Image">
                    <div class="product-content">
                      <router-link to="/vertical/product-details" class="title">
                        High Quality Steel Clamp Tool
                      </router-link>
                      <ul class="products-price">
                        <li>
                          $15.00
                          <del>$20.00</del>
                        </li>
                      </ul>
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
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="sale-offer-bg product-page">
              <h5>促銷優惠 - <span>7 折</span></h5>
              <h3>各種優質工具</h3>
              <a href="" class="default-btn">
                <i class="ri-shopping-cart-line"></i>
                立即購物
              </a>
            </div>
            <div class="showing-result">
              <div class="row align-items-center">
                <div class="col-lg-6 col-md-6">
                  <div class="products-filter-options">
                    <div class="view-list-row">
                      <div class="view-column">
                        <a href="#" class="icon-view-three active">
                          <span></span>
                          <span></span>
                          <span></span>
                        </a>
                        <a href="#" class="view-grid-switch">
                          <span></span>
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="showing-result-count">
                    <p>顯示 16 件，共 60 件商品</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="showing-top-bar-ordering">
                    <select class="form-select" aria-label="Default select example">
                      <option selected="">預設排序</option>
                      <option value="1">鑽頭</option>
                      <option value="2">取芯鑽</option>
                      <option value="3">電動鑽</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div id="products-filter" class="products-collections-listing row justify-content-center">
              <div class="col-lg-6 col-md-6">
                <div class="single-products">
                  <div class="product-img">
                    <router-link to="/vertical/product-details">
                      <img src="/test/static/picture/product-1.jpg" alt="Image">
                    </router-link>
                  </div>
                  <div class="product-content">
                    <router-link to="/vertical/product-details" class="title">
                      Cordless Drill Professional Combo Drill And Screwdriver
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
                          (03 則評價)
                        </router-link>
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
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="single-products">
                  <div class="product-img">
                    <router-link to="/vertical/product-details">
                      <img src="/test/static/picture/product-2.jpg" alt="Image">
                    </router-link>
                  </div>
                  <div class="product-content">
                    <router-link to="/vertical/product-details" class="title">
                      Professional Cordless Drill Power Tools Set Competitive Price
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
                          (03 則評價)
                        </router-link>
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
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="single-products">
                  <div class="product-img">
                    <router-link to="/vertical/product-details">
                      <img src="/test/static/picture/product-3.jpg" alt="Image">
                    </router-link>
                  </div>
                  <div class="product-content">
                    <router-link to="/vertical/product-details" class="title">
                      DFMALB 20V Max XX Oscillating Multi Tool Variable Speed Tool
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
                          (03 則評價)
                        </router-link>
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
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="single-products">
                  <div class="product-img">
                    <router-link to="/vertical/product-details">
                      <img src="/test/static/picture/product-4.jpg" alt="Image">
                    </router-link>
                  </div>
                  <div class="product-content">
                    <router-link to="/vertical/product-details" class="title">
                      Power Tools Set Chinese Manufacturer Production 50V
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
                          (03 則評價)
                        </router-link>
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
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="single-products">
                  <div class="product-img">
                    <router-link to="/vertical/product-details">
                      <img src="/test/static/picture/product-5.jpg" alt="Image">
                    </router-link>
                  </div>
                  <div class="product-content">
                    <router-link to="/vertical/product-details" class="title">
                      Professional Cordless Drill Power Tools Set Competitive Price
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
                          (03 則評價)
                        </router-link>
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
              <div class="col-lg-6 col-md-6">
                <div class="single-products">
                  <div class="product-img">
                    <router-link to="/vertical/product-details">
                      <img src="/test/static/picture/product-6.jpg" alt="Image">
                    </router-link>
                    <span class="hot">Hot</span>
                  </div>
                  <div class="product-content">
                    <router-link to="/vertical/product-details" class="title">
                      Cordless Drill Professional Combo Drill And Screwdriver
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
                          (03 則評價)
                        </router-link>
                      </li>
                    </ul>
                    <ul class="products-price">
                      <li>
                        $119.00
                        <del>$219.00</del>
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
              <div class="col-lg-6 col-md-6">
                <div class="single-products">
                  <div class="product-img">
                    <router-link to="/vertical/product-details">
                      <img src="/test/static/picture/product-7.jpg" alt="Image">
                    </router-link>
                    <span class="hot new">New</span>
                  </div>
                  <div class="product-content">
                    <router-link to="/vertical/product-details" class="title">
                      Professional Cordless Drill Power Tools Competitive
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
                          (03 則評價)
                        </router-link>
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
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="single-products">
                  <div class="product-img">
                    <router-link to="/vertical/product-details">
                      <img src="/test/static/picture/product-8.jpg" alt="Image">
                    </router-link>
                    <span class="hot">Hot</span>
                  </div>
                  <div class="product-content">
                    <router-link to="/vertical/product-details" class="title">
                      DFMALB 20V Max XX Oscillating Multi Tool Variable Speed Tool
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
                          (03 則評價)
                        </router-link>
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
              </div>
              <div class="col-12">
                <div class="pagination-area">
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
  name: 'Products',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe },
  mixins: [verticalMixin],
  metaInfo: {
    title: 'Ehay - 全部商品'
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
