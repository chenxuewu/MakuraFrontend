<template>
  <div>
      <Detail :productId="productId" :isFront="false" :isMyProduct="true" />
  </div>
</template>
<script>
import Detail from '@v/front/product/components/productDetail.vue';

export default {
  components: {
    Detail,
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
<style lang="scss">

.box {
  height: auto;
}

</style>

