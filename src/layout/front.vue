<template>
  <div>
    <Header />
    <!-- 路由 -->
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '@v/front/components/header.vue'
import Footer from '@v/front/components/footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      labelPosition: "top",
    };
  },
};
</script>

<style  scoped>
@import "~@a/front/css/bootstrap.min.css";
@import "~@a/front/css/owl.theme.default.min.css";
@import "~@a/front/css/owl.carousel.min.css";
@import "~@a/front/css/remixicon.css";
@import "~@a/front/css/meanmenu.min.css";
@import "~@a/front/css/animate.min.css";
@import "~@a/front/css/style.css";
@import "~@a/front/css/responsive.css";
</style>
