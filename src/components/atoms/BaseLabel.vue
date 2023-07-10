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
  <label :class="['base-label', `base-label--${validatedType}`]"><slot /></label>
</template>

<style lang="scss" scoped>
.base-label {
  font-size: $small-font-size;
  color: rgba($font-color, 0.9);

  &--primary {
    text-decoration: underline;
    text-underline-position: under;
  }
}
</style>
