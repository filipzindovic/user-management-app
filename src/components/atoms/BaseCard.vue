<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.base-card {
  border: 1px solid $light-contrast;
  box-shadow: 0px 0px 6px -3px rgba(0, 0, 0, 1);
  background-color: white;
  border-radius: 6px;
  padding: 16px;
}
</style>
