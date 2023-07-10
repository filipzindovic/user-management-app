<script setup>
defineProps({
  icon: {
    type: Array,
    default: () => []
  },
  iconOptions: {
    type: Object,
    default: () => ({})
  },
  title: {
    type: String,
    default: ""
  },
  to: {
    type: String,
    default: ""
  }
})
</script>

<template>
  <RouterLink :to="to" class="base-nav-item">
    <font-awesome-icon v-if="icon?.length" :icon="icon" v-bind="iconOptions" />
    <p v-if="title">{{ title }}</p>
  </RouterLink>
</template>
