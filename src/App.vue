<template>
  <div id="app">
    <!-- <component :is="layout">
      <router-view />
    </component> -->
    <router-view />
    <theme-picker />
  </div>
</template>

<script>
import ThemePicker from "@/components/ThemePicker";

export default {
  name: "App",
  // data() {
  //   return {
  //     default_layout: "Layout"
  //   };
  // },
  components: { ThemePicker },

  // computed: {
  //   layout() {
  //     return this.$route.meta.layout || this.default_layout;
  //   }
  // },
    metaInfo() {
        return {
            title: this.$store.state.settings.dynamicTitle && this.$store.state.settings.title,
            titleTemplate: title => {
                return title ? `${title} - ${process.env.VUE_APP_TITLE}` : process.env.VUE_APP_TITLE
            }
        }
    }
};
</script>
<style scoped>
#app .theme-picker {
  display: none;
}
</style>
