<script setup>
import { computed } from "vue"
import { validateValue } from "@/helpers/validate"

const props = defineProps({
  type: {
    type: String,
    default: "primary"
  }
})

const validTypes = ["primary"]
const validatedType = computed(() => {
  return validateValue(validTypes, props.type)
})
</script>

<template>
  <p :class="['base-text', `base-text--${validatedType}`]"><slot /></p>
</template>

<style lang="scss" scoped>
.base-text {
  &--primary {
    font-size: $default-font-size;
  }
}
</style>
