<template>
  <div
    class="base-title title-item"
    :class="{
      'has-border': !noBorder
    }"
    :style="{
      marginTop: marginTop,
      marginBottom: marginBottom
    }"
  >
    <span class="title-name">
      <slot>{{ title }}</slot>
    </span>
    <slot name="suffix" />
  </div>
</template>

<script>
export default {
  name: 'BaseTitle',
  props: {
    title: String,
    mTop: [String, Number],
    mBottom: [String, Number],
    noBorder: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    marginTop() {
      return this.$pxToRem(this.mTop);
    },
    marginBottom() {
      return this.$pxToRem(this.mBottom);
    }
  }
};
</script>

<style scoped lang="scss">
.title-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  font-weight: bold;
  font-size: 16px;
  color: var(--colorPrimary);
  margin-top: 32px;
  margin-bottom: 16px;

  .title-name {
    align-self: stretch;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding-right: 10px;

    &::before {
      content: '';
      display: block;
      height: 0.9em;
      width: 3px;
      background: var(--colorPrimary);
      margin-right: 8px;
    }
  }

  &.has-border {
    border-bottom: 1px solid #e1e3eb;
    .title-name {
      border-bottom: 1px solid var(--colorPrimary);
      margin-bottom: -1px;
    }
  }
}
</style>
