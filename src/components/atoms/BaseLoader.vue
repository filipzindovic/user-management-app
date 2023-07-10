<template>
  <div class="base-loader">
    <font-awesome-icon size="xl" :icon="['fas', 'spinner']" spin />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.base-loader {
  margin: 0 auto;
  padding: 12px;
  font-size: inherit;
  color: inherit;
  text-align: center;
}
</style>
