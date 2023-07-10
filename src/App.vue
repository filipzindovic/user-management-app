<script setup>
import { RouterView } from "vue-router"
import MainNavBar from "./components/molecules/MainNavBar.vue"
</script>

<template>
  <MainNavBar class="app__navbar" />
  <div class="app__content">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.app {
  &__navbar {
    position: sticky;
    top: 0;
  }

  &__content {
    padding: 20px 12px;
  }
}
</style>
