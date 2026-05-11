<template>
  <div class="vertical-page">

    <VerticalHead />

    <section class="hero-slider-area hero-slider-area-style-two">
      <div class="hero-slider-two owl-carousel owl-theme">
        <div class="slider-item bg-4">
          <div class="d-table">
            <div class="d-table-cell">
              <div class="container">
                <div class="hero-slider-content">
                  <span>限時優惠</span>
                  <h1>手工具超值組合就在這裡</h1>
                  <p>全館免運，商品再打 4 折</p>
                  <div class="hero-slider-btn">
                    <router-link to="/vertical/products" class="default-btn">
                      <i class="ri-shopping-cart-line"></i>
                      立即選購
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="slider-item bg-5">
          <div class="d-table">
            <div class="d-table-cell">
              <div class="container">
                <div class="hero-slider-content">
                  <span>Special Offer</span>
                  <h1>2021 年最佳家居裝飾精選</h1>
                  <p>全館免運，商品再打 4 折</p>
                  <div class="banner-btn">
                    <router-link to="/vertical/products" class="default-btn">
                      <i class="ri-shopping-cart-line"></i>
                      Shop Now
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="slider-item bg-6">
          <div class="d-table">
            <div class="d-table-cell">
              <div class="container">
                <div class="hero-slider-content">
                  <span>Special Offer</span>
                  <h1>各種頂級品質工具</h1>
                  <p>全館免運，商品再打 4 折</p>
                  <div class="banner-btn">
                    <router-link to="/vertical/products" class="default-btn">
                      <i class="ri-shopping-cart-line"></i>
                      Shop Now
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="popular-categories-area pt-54 pb-30">
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
              <span>15 項商品</span>
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
              <span>05 項商品</span>
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
              <span>18 項商品</span>
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
              <span>19 項商品</span>
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
                  焊接與銲接
                </router-link>
              </h3>
              <span>04 項商品</span>
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
              <span>12 項商品</span>
              <a href="javascript:;" class="read-more">
                立即選購
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="featured-products-area pb-30">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="featured-product-img bg-2">
              <div class="featured-product-content">
                <span class="best">最佳優惠</span>
                <h3>頂級工具組</h3>
                <span class="offer">最高 7 折</span>
                <router-link to="/vertical/products">
                  立即選購
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="section-title">
              <h2>精選商品</h2>
            </div>
            <div class="featured-product-wrap">
              <div class="featured-product-slider owl-carousel owl-theme">
                <div class="single-products">
                  <div class="product-img">
                    <router-link to="/vertical/product-details">
                      <img src="/test/static/picture/product-6.jpg" alt="Image">
                    </router-link>
                    <span class="hot">熱銷</span>
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
                        <span>有現貨</span>
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
                    <router-link to="/vertical/product-details">
                      <img src="/test/static/picture/product-7.jpg" alt="Image">
                    </router-link>
                    <span class="hot new">新品</span>
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
                <div class="single-products">
                  <div class="product-img">
                    <router-link to="/vertical/product-details">
                      <img src="/test/static/picture/product-9.jpg" alt="Image">
                    </router-link>
                    <span class="hot new">New</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="best-seller-area pb-30">
      <div class="container">
        <div class="section-title">
          <h2>熱銷排行</h2>
        </div>
        <div class="best-product-slider owl-carousel owl-theme">
          <div class="single-products">
            <div class="product-img">
              <router-link to="/vertical/product-details">
                <img src="/test/static/picture/product-1.jpg" alt="Image">
              </router-link>
              <span class="hot new">-30%</span>
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
          <div class="single-products">
            <div class="product-img">
              <router-link to="/vertical/product-details">
                <img src="/test/static/picture/product-2.jpg" alt="Image">
              </router-link>
              <span class="hot new">-20%</span>
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
          <div class="single-products">
            <div class="product-img">
              <router-link to="/vertical/product-details">
                <img src="/test/static/picture/product-3.jpg" alt="Image">
              </router-link>
              <span class="hot new">-30%</span>
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
          <div class="single-products">
            <div class="product-img">
              <router-link to="/vertical/product-details">
                <img src="/test/static/picture/product-4.jpg" alt="Image">
              </router-link>
              <span class="hot new">-10%</span>
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
          <div class="single-products">
            <div class="product-img">
              <router-link to="/vertical/product-details">
                <img src="/test/static/picture/product-5.jpg" alt="Image">
              </router-link>
              <span class="hot">Hot</span>
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
      </div>
    </section>


    <section class="sale-offer-area">
      <div class="container">
        <div class="sale-offer-bg bg-2">
          <h5>限時特賣 - <span>7 折</span></h5>
          <h3>各種頂級品質工具</h3>
          <router-link to="/vertical/products" class="default-btn">
            <i class="ri-shopping-cart-line"></i>
            立即選購
          </router-link>
        </div>
      </div>
    </section>


    <section class="flash-deals-area ptb-54">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="section-title p-0">
              <h2>顧客評價</h2>
            </div>
            <div class="customer-slider owl-carousel owl-theme">
              <div class="single-customer">
                <div class="avatar">
                  <img src="/test/static/picture/customer-1.png" class="customer" alt="Image">
                  <img src="/test/static/picture/quote.png" class="quote" alt="Image">
                  <div class="avatar-name">
                    <h3>Georgia Cargill</h3>
                    <span>財務專員</span>
                  </div>
                </div>
                <p>"Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Lorem
                  ipsum dolor sit amet, consectetur elit. Donec sollicitudin molestie eget malesuada accumsan sit amet,
                  consectetur."</p>
              </div>
              <div class="single-customer">
                <div class="avatar">
                  <img src="/test/static/picture/customer-2.png" class="customer" alt="Image">
                  <img src="/test/static/picture/quote.png" class="quote" alt="Image">
                  <div class="avatar-name">
                    <h3>Alex Dew</h3>
                    <span>財務行銷</span>
                  </div>
                </div>
                <p>"Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Lorem
                  ipsum dolor sit amet, consectetur elit. Donec sollicitudin molestie eget malesuada accumsan sit amet,
                  consectetur."</p>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="section-title">
              <h2>限時搶購</h2>
            </div>
            <div class="flash-deals-wrap need-border">
              <div class="flash-deals-slider owl-carousel owl-theme">
                <div class="single-products deals-products">
                  <div class="row align-items-center">
                    <div class="col-xl-6">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-11.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          Hand Tools Rubber Handle Adjustable Spanner
                        </router-link>
                        <span class="in-stock">有現貨</span>
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
                            $60.00
                            <del>$99.00</del>
                          </li>
                        </ul>
                        <div id="timer">
                          <div id="days"></div>
                          <div id="hours"></div>
                          <div id="minutes"></div>
                          <div id="seconds"></div>
                        </div>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-products deals-products">
                  <div class="row align-items-center">
                    <div class="col-xl-6">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-10.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          High Quality Carbon Steel Multifunctional Hammer
                        </router-link>
                        <span class="in-stock">In Stock</span>
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
                            $29.00
                            <del>$50.00</del>
                          </li>
                        </ul>
                        <div id="timers">
                          <div id="days-p"></div>
                          <div id="hours-p"></div>
                          <div id="minutes-p"></div>
                          <div id="seconds-p"></div>
                        </div>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single-products deals-products">
                  <div class="row align-items-center">
                    <div class="col-xl-6">
                      <div class="product-img">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-10.jpg" alt="Image">
                        </router-link>
                        <span class="hot new">New</span>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="product-content">
                        <router-link to="/vertical/product-details" class="title">
                          High Quality Carbon Steel Multifunctional Hammer
                        </router-link>
                        <span class="in-stock">In Stock</span>
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
                            $29.00
                            <del>$50.00</del>
                          </li>
                        </ul>
                        <div id="timerss">
                          <div id="days-pp"></div>
                          <div id="hours-pp"></div>
                          <div id="minutes-pp"></div>
                          <div id="seconds-pp"></div>
                        </div>
                        <ul class="products-cart-wish-view">
                          <li>
                            <router-link to="/vertical/shopping-cart" class="default-btn">
                              <i class="ri-shopping-cart-line"></i>
                              加入購物車
                            </router-link>
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

    <section class="new-arrivals-area pb-30">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="section-title">
              <h2>人氣商品</h2>
            </div>
            <ul class="trending-product-list">
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
          <div class="col-lg-9">
            <div class="section-title">
              <h2>最新上架</h2>
              <router-link to="/vertical/products" class="read-more">
                查看全部
              </router-link>
            </div>
            <div class="row">
              <div class="col-xl-3 col-sm-6">
                <div class="single-products new-arrivals">
                  <div class="product-img">
                    <router-link to="/vertical/product-details">
                      <img src="/test/static/picture/product-17.jpg" alt="Image">
                    </router-link>
                    <span class="hot new">New</span>
                  </div>
                  <div class="product-content">
                    <router-link to="/vertical/product-details" class="title">
                      Electrical Magnetic Impact Power Hammer Drills
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
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="single-products new-arrivals">
                  <div class="product-img">
                    <router-link to="/vertical/product-details">
                      <img src="/test/static/picture/product-18.jpg" alt="Image">
                    </router-link>
                  </div>
                  <div class="product-content">
                    <router-link to="/vertical/product-details" class="title">
                      High Quality Electric Hand Planer, 4-3/8-Inch
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
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="single-products new-arrivals">
                  <div class="product-img">
                    <router-link to="/vertical/product-details">
                      <img src="/test/static/picture/product-19.jpg" alt="Image">
                    </router-link>
                    <span class="hot new">New</span>
                  </div>
                  <div class="product-content">
                    <router-link to="/vertical/product-details" class="title">
                      White Whale Vacuum Cleaner High Quality
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
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="single-products new-arrivals">
                  <div class="product-img">
                    <router-link to="/vertical/product-details">
                      <img src="/test/static/picture/product-20.jpg" alt="Image">
                    </router-link>
                  </div>
                  <div class="product-content">
                    <router-link to="/vertical/product-details" class="title">
                      High Quality Carbon Steel Mini Drilling Machines
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
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="single-products new-arrivals">
                  <div class="product-img">
                    <router-link to="/vertical/product-details">
                      <img src="/test/static/picture/product-21.jpg" alt="Image">
                    </router-link>
                  </div>
                  <div class="product-content">
                    <router-link to="/vertical/product-details" class="title">
                      Power Hammer Drills 200V Machine Screwdriver
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
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="single-products new-arrivals">
                  <div class="product-img">
                    <router-link to="/vertical/product-details">
                      <img src="/test/static/picture/product-22.jpg" alt="Image">
                    </router-link>
                    <span class="hot new">New</span>
                  </div>
                  <div class="product-content">
                    <router-link to="/vertical/product-details" class="title">
                      Multi-function Screw Driver Set For Home Use
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
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="single-products new-arrivals">
                  <div class="product-img">
                    <router-link to="/vertical/product-details">
                      <img src="/test/static/picture/product-9.jpg" alt="Image">
                    </router-link>
                  </div>
                  <div class="product-content">
                    <router-link to="/vertical/product-details" class="title">
                      Wall Polishing Square Sander Electric Machine
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
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="single-products new-arrivals">
                  <div class="product-img">
                    <router-link to="/vertical/product-details">
                      <img src="/test/static/picture/product-6.jpg" alt="Image">
                    </router-link>
                    <span class="hot new">New</span>
                  </div>
                  <div class="product-content">
                    <router-link to="/vertical/product-details" class="title">
                      High Quality Carbon Steel Professional Power Tools
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
          </div>
        </div>
      </div>
    </section>


    <section class="sale-discount-area pb-54">
      <div class="container">
        <div class="sale-discount-bg">
          <div class="discount-content">
            <h5>全館 7 折優惠</h5>
            <h3>數百種頂級品質工具，全新超低價格</h3>
          </div>
        </div>
      </div>
    </section>


    <section class="categories-area pb-54">
      <div class="container">
        <div class="categories-wrap tab products-details-tab">
          <div class="row">
            <div class="col-lg-3">
              <div class="section-title">
                <h2>商品分類</h2>
              </div>
              <ul class="tabs">
                <li>
                  電動工具
                </li>
                <li>
                  手工具
                </li>
                <li>
                  無線工具
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
                          Electrical Magnetic Impact Power Hammer Drills
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
                          High Quality Electric Hand Planer, 4-3/8-Inch
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
                          White Whale Vacuum Cleaner High Quality
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
                          High Quality Carbon Steel Mini Drilling Machines
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
                          Power Hammer Drills 200V Machine Screwdriver
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
                          Multi-function Screw Driver Set For Home Use
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
                          Wall Polishing Square Sander Electric Machine
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
                          High Quality Carbon Steel Professional Power Tools
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
                          Electrical Magnetic Impact Power Hammer Drills
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
                          High Quality Electric Hand Planer, 4-3/8-Inch
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
                          White Whale Vacuum Cleaner High Quality
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
                          High Quality Carbon Steel Mini Drilling Machines
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
                          Power Hammer Drills 200V Machine Screwdriver
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
                          Multi-function Screw Driver Set For Home Use
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
                          Wall Polishing Square Sander Electric Machine
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
                          High Quality Carbon Steel Professional Power Tools
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
                          Electrical Magnetic Impact Power Hammer Drills
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
                          High Quality Electric Hand Planer, 4-3/8-Inch
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
                          White Whale Vacuum Cleaner High Quality
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
                          High Quality Carbon Steel Mini Drilling Machines
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
                          Power Hammer Drills 200V Machine Screwdriver
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
                          Multi-function Screw Driver Set For Home Use
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
                          Wall Polishing Square Sander Electric Machine
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
                          High Quality Carbon Steel Professional Power Tools
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
                          Electrical Magnetic Impact Power Hammer Drills
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
                          High Quality Electric Hand Planer, 4-3/8-Inch
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
                          White Whale Vacuum Cleaner High Quality
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
                          High Quality Carbon Steel Mini Drilling Machines
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
                          Power Hammer Drills 200V Machine Screwdriver
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
                          Multi-function Screw Driver Set For Home Use
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
                          Wall Polishing Square Sander Electric Machine
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
                          High Quality Carbon Steel Professional Power Tools
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
                          Electrical Magnetic Impact Power Hammer Drills
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
                          High Quality Electric Hand Planer, 4-3/8-Inch
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
                          White Whale Vacuum Cleaner High Quality
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
                          High Quality Carbon Steel Mini Drilling Machines
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
                          Power Hammer Drills 200V Machine Screwdriver
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
                          Multi-function Screw Driver Set For Home Use
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
                          Wall Polishing Square Sander Electric Machine
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
                          High Quality Carbon Steel Professional Power Tools
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
                          Electrical Magnetic Impact Power Hammer Drills
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
                          High Quality Electric Hand Planer, 4-3/8-Inch
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
                          White Whale Vacuum Cleaner High Quality
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
                          High Quality Carbon Steel Mini Drilling Machines
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
                          Power Hammer Drills 200V Machine Screwdriver
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
                          Multi-function Screw Driver Set For Home Use
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
                          Wall Polishing Square Sander Electric Machine
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
                          High Quality Carbon Steel Professional Power Tools
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
                          Electrical Magnetic Impact Power Hammer Drills
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
                          High Quality Electric Hand Planer, 4-3/8-Inch
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
                          White Whale Vacuum Cleaner High Quality
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
                          High Quality Carbon Steel Mini Drilling Machines
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
                          Power Hammer Drills 200V Machine Screwdriver
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
                          Multi-function Screw Driver Set For Home Use
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
                          Wall Polishing Square Sander Electric Machine
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
                          High Quality Carbon Steel Professional Power Tools
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
                          Electrical Magnetic Impact Power Hammer Drills
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
                          High Quality Electric Hand Planer, 4-3/8-Inch
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
                          White Whale Vacuum Cleaner High Quality
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
                          High Quality Carbon Steel Mini Drilling Machines
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
                          Power Hammer Drills 200V Machine Screwdriver
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
                          Multi-function Screw Driver Set For Home Use
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
                          Wall Polishing Square Sander Electric Machine
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
                          High Quality Carbon Steel Professional Power Tools
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
                          Electrical Magnetic Impact Power Hammer Drills
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
                          High Quality Electric Hand Planer, 4-3/8-Inch
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
                          White Whale Vacuum Cleaner High Quality
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
                          High Quality Carbon Steel Mini Drilling Machines
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
                          Power Hammer Drills 200V Machine Screwdriver
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
                          Multi-function Screw Driver Set For Home Use
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
                          Wall Polishing Square Sander Electric Machine
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
                          High Quality Carbon Steel Professional Power Tools
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


    <section class="our-blog-area pb-30">
      <div class="container">
        <div class="section-title">
          <h2>部落格文章</h2>
          <router-link to="/vertical/blog" class="read-more">
            查看全部
          </router-link>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div class="single-blog">
              <router-link to="/vertical/blog-details">
                <img src="/test/static/picture/blog-1.jpg" alt="Image">
              </router-link>
              <div class="blog-content">
                <ul>
                  <li>
                    <a href="javascript:;">
                      管理員
                    </a>
                  </li>
                  <li>
                    July 30, 2021
                  </li>
                  <li>
                    <router-link to="/vertical/blog-details">
                      (03) 則評論
                    </router-link>
                  </li>
                </ul>
                <h3>
                  <router-link to="/vertical/blog-details">
                    Powerful Motor For The Best Performance In Compound Miter Saw
                  </router-link>
                </h3>
                <router-link to="/vertical/blog-details" class="default-btn">
                  閱讀更多
                  <i class="ri-arrow-right-line"></i>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-blog">
              <router-link to="/vertical/blog-details">
                <img src="/test/static/picture/blog-2.jpg" alt="Image">
              </router-link>
              <div class="blog-content">
                <ul>
                  <li>
                    <a href="javascript:;">
                      Admin
                    </a>
                  </li>
                  <li>
                    July 05, 2021
                  </li>
                  <li>
                    <router-link to="/vertical/blog-details">
                      (03) Comments
                    </router-link>
                  </li>
                </ul>
                <h3>
                  <router-link to="/vertical/blog-details">
                    Why We Used One Of The Best Corded Drill Power Tools
                  </router-link>
                </h3>
                <router-link to="/vertical/blog-details" class="default-btn">
                  Read More
                  <i class="ri-arrow-right-line"></i>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-blog">
              <router-link to="/vertical/blog-details">
                <img src="/test/static/picture/blog-3.jpg" alt="Image">
              </router-link>
              <div class="blog-content">
                <ul>
                  <li>
                    <a href="javascript:;">
                      Admin
                    </a>
                  </li>
                  <li>
                    July 15, 2021
                  </li>
                  <li>
                    <router-link to="/vertical/blog-details">
                      (03) Comments
                    </router-link>
                  </li>
                </ul>
                <h3>
                  <router-link to="/vertical/blog-details">
                    The Most Advanced Quality Tools For Welding Work
                  </router-link>
                </h3>
                <router-link to="/vertical/blog-details" class="default-btn">
                  Read More
                  <i class="ri-arrow-right-line"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <div class="partner-area pb-54">
      <div class="container">
        <div class="partner-wrap">
          <div class="partner-slider owl-carousel owl-theme">
            <div class="partner-item">
              <img src="/test/static/picture/partner-1.png" alt="Image">
            </div>
            <div class="partner-item">
              <img src="/test/static/picture/partner-2.png" alt="Image">
            </div>
            <div class="partner-item">
              <img src="/test/static/picture/partner-3.png" alt="Image">
            </div>
            <div class="partner-item">
              <img src="/test/static/picture/partner-4.png" alt="Image">
            </div>
            <div class="partner-item">
              <img src="/test/static/picture/partner-5.png" alt="Image">
            </div>
            <div class="partner-item">
              <img src="/test/static/picture/partner-6.png" alt="Image">
            </div>
          </div>
        </div>
      </div>
    </div>


    <section class="special-area pb-30">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div class="section-title">
              <h2>特別優惠</h2>
            </div>
            <ul class="trending-product-list special-product-list">
              <li class="single-list">
                <img src="/test/static/picture/product-19.jpg" alt="Image">
                <div class="product-content">
                  <router-link to="/vertical/product-details" class="title">
                    White Whale Vacuum Cleaner High Quality Product
                  </router-link>
                  <ul class="products-price">
                    <li>
                      $129.00
                      <del>$150.00</del>
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
                <img src="/test/static/picture/product-2.jpg" alt="Image">
                <div class="product-content">
                  <router-link to="/vertical/product-details" class="title">
                    Professional Cordless Drill Power Tools Set Competitive Price
                  </router-link>
                  <ul class="products-price">
                    <li>
                      $90.00
                      <del>$150.00</del>
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
                <img src="/test/static/picture/product-4.jpg" alt="Image">
                <div class="product-content">
                  <router-link to="/vertical/product-details" class="title">
                    Power Tools Set Chinese Manufacturer Production 50V Lithu Battery
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
            </ul>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="section-title">
              <h2>熱門商品</h2>
            </div>
            <ul class="trending-product-list special-product-list">
              <li class="single-list">
                <img src="/test/static/picture/product-34.jpg" alt="Image">
                <div class="product-content">
                  <router-link to="/vertical/product-details" class="title">
                    Grinding Machine Polisher Household 5 Inch Mini Portable Power Tools
                  </router-link>
                  <ul class="products-price">
                    <li>
                      $119.00
                      <del>$150.00</del>
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
                <img src="/test/static/picture/product-35.jpg" alt="Image">
                <div class="product-content">
                  <router-link to="/vertical/product-details" class="title">
                    Professional 2000W 25mm Electric Jack Hammer Drill
                  </router-link>
                  <ul class="products-price">
                    <li>
                      $200.00
                      <del>$250.00</del>
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
                <img src="/test/static/picture/product-5.jpg" alt="Image">
                <div class="product-content">
                  <router-link to="/vertical/product-details" class="title">
                    Electrical Magnetic Impact Power Hammer Drills Machine
                  </router-link>
                  <ul class="products-price">
                    <li>
                      $170.00
                      <del>$220.00</del>
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
          <div class="col-lg-4 col-md-6">
            <div class="section-title">
              <h2>最高評價商品</h2>
            </div>
            <ul class="trending-product-list special-product-list">
              <li class="single-list">
                <img src="/test/static/picture/product-7.jpg" alt="Image">
                <div class="product-content">
                  <router-link to="/vertical/product-details" class="title">
                    High Quality Industrial Stapler Powerful Heavy Duty Metal
                  </router-link>
                  <ul class="products-price">
                    <li>
                      $59.00
                      <del>$120.00</del>
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
                <img src="/test/static/picture/product-9.jpg" alt="Image">
                <div class="product-content">
                  <router-link to="/vertical/product-details" class="title">
                    High Quality Carbon Steel Professional Power Tools
                  </router-link>
                  <ul class="products-price">
                    <li>
                      $99.00
                      <del>$130.00</del>
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
                <img src="/test/static/picture/product-3.jpg" alt="Image">
                <div class="product-content">
                  <router-link to="/vertical/product-details" class="title">
                    DFMALB 20V Max XX Oscillating Multi Variable Speed Tool
                  </router-link>
                  <ul class="products-price">
                    <li>
                      $125.00
                      <del>$200.00</del>
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
    </section>


    <section class="services-area pt-0 pb-30">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-6">
            <div class="single-services">
              <div class="icon">
                <img src="/test/static/picture/support.png" alt="Image">
              </div>
              <h3>客戶支援</h3>
              <p>24/7 我們提供最好的客戶服務</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-services">
              <div class="icon">
                <img src="/test/static/picture/payment.png" alt="Image">
              </div>
              <h3>安全付款</h3>
              <p>使用全球頂級付款方式付款</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-services">
              <div class="icon">
                <img src="/test/static/picture/network.png" alt="Image">
              </div>
              <h3>全球配送</h3>
              <p>您想要的商品，送到您想要的地方</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="subscribe-area ptb-54">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-2">
            <div class="logo">
              <router-link to="/vertical/index">
                <img src="/test/static/picture/white-logo.png" alt="Image">
              </router-link>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="subscribe-content">
              <span>首次訂購享 7 折優惠</span>
              <h3>訂閱我們的電子報</h3>
              <p>訂閱電子報，獲取所有最新資訊</p>
            </div>
          </div>
          <div class="col-lg-5">
            <form class="newsletter-form" data-toggle="validator">
              <input type="email" class="form-control" placeholder="您的電子郵件地址" name="EMAIL" required=""
                     autocomplete="off"
              >
              <button class="submit-btn" type="submit">
                訂閱
              </button>
              <div id="validator-newsletter" class="form-result"></div>
            </form>
          </div>
        </div>
      </div>
    </section>


    <VerticalFoot />

  </div>
</template>

<script>
import VerticalHead from './components/head.vue'
import VerticalFoot from './components/foot.vue'

export default {
  name: 'Index2',
  components: { VerticalHead, VerticalFoot },
  metaInfo: {
    title: 'Ehay - 工具商店 HTML 模板'
  }
}
</script>

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
