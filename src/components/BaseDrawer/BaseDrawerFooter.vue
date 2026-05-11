<template>
  <div v-if="hasBaseDrawer" />
  <div
    v-else
    class="base-drawer-footer"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseDrawerFooter',
  inject: {
    updateBaseDrawerFooter: {
      default: null
    }
  },
  data() {
    return {
      hasBaseDrawer: true
    };
  },
  mounted() {
    this.updateFooter();
  },
  updated() {
    this.updateFooter();
  },
  methods: {
    updateFooter() {
      this.hasBaseDrawer = !!this.updateBaseDrawerFooter;
      if (this.hasBaseDrawer) {
        const VNodeList = this.$scopedSlots.default?.() || [];
        this.updateBaseDrawerFooter?.(VNodeList);
      }
    }
  },
};
</script>

<style scoped lang="scss">
@import './baseDrawer.scss';
</style>
