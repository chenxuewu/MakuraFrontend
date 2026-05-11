<template>
    <div>
        <Header />
        <ProductDetail :productId="productId" :isFront="true" :isMyProduct="false" />
        <Footer />
    </div>
</template>
  
<script>
import Header from '@v/front/components/header.vue';
import Footer from '@v/front/components/footer.vue';
import ProductDetail from '@v/front/product/components/productDetail.vue';

export default {
    components: {
        Header,
        Footer,
        ProductDetail,
    },
    data() {
        return {
            productId: "",
        };
    },

    created() {
        this.productId = this.$route.query.id;
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

</style>