<template>
  <div>
    <section class="subscribe-area pt-30 pb-30" style="padding-bottom: 8px; padding-top: 8px;">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-2">
            <div class="logo">
              <a href="">
                <img src="@/assets/front/picture/white-logo.png" alt="Image">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="footer-area pt-30 pb-30" style="padding-top: 15px; padding-bottom: 0px;">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h3>服務時間</h3>
              <ul class="info-list">
                <li>
                  <i class="ri-time-line"></i>
                  Mon-Sat 8:00 AM - 8:00 PM
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h3>物流合作</h3>
              <ul class="import-link">
                <li>
                <div class="qr-711">
                <img src="@/assets/front/picture/711.jpg" alt="">
              </div>
              </li>
              <li>
                <div class="qr-familymart">
                <img src="@/assets/front/picture/familymart.jpg" alt="">
              </div>
              </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h3>基本資訊</h3>
              <ul class="import-link">
                <li>
                  <a href="#">09769-82467</a>
                </li>
<!--                <li>-->
<!--                  <a href="products.html">Products</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <a href="terms-conditions.html">Money-back Guarantee!</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <a href="blog.html">Blog</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <a href="privacy-policy.html">Accessibility</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <a href="contact.html">Contact</a>-->
<!--                </li>-->
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h3>關注我們</h3>
              <ul>

              <li>
                <div class="qr-code">
                <img src="@/assets/front/picture/twocode.png" alt="">
              </div>
              </li>
              <li>

              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return { scrollTop: 0 };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(this.scrollTop);
    },
  },
};
</script>

<style scoped>
.qr-code img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0;
  max-height: 80px; /* Adjust as needed */
}
.qr-familymart img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0;
  max-height: 30px; /* Adjust as needed */
}
.qr-711 img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0;
  max-height: 30px; /* Adjust as needed */
}

@media (max-width: 576px) {
  .qr-code img {
    max-height: 80px; /* Smaller size for mobile */
  }

  .qr-711 img {
    max-height: 80px; /* Smaller size for mobile */
  }

  .qr-familymart img {
    max-height: 80px; /* Smaller size for mobile */
  }
}
</style>
