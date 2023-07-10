<script setup>
defineProps({
  message: {
    type: String,
    default: ""
  }
})
</script>

<template>
  <div class="base-error">
    <font-awesome-icon size="xl" :icon="['fas', 'circle-exclamation']" />
    <p v-if="message">{{ message }}</p>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.base-error {
  margin: 0 auto;
  padding: 12px;
  color: inherit;
  text-align: center;
}
</style>
