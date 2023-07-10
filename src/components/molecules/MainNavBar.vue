<script setup>
import BaseNavItem from "@/components/atoms/BaseNavItem.vue"
</script>

<template>
  <nav class="main-nav-bar">
    <BaseNavItem
      class="main-nav-bar__item"
      :icon="['far', 'user-circle']"
      :icon-options="{
        size: 'xl'
      }"
      to="/"
    />
  </nav>
</template>

<style lang="scss" scoped>
.main-nav-bar {
  background-color: $primary-color;
  padding: 12px;
  box-shadow: 0px 5px 8px -4px rgba(0, 0, 0, 0.7);

  &__item {
    color: white;
  }
}
</style>
