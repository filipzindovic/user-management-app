<script setup>
import { computed } from "vue"
import { validateValue } from "@/helpers/validate"

const props = defineProps({
  icon: {
    type: Array,
    default: () => []
  },
  iconOptions: {
    type: Object,
    default: () => ({})
  },
  text: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "primary"
  }
})

const validTypes = ["primary", "secondary", "error", "no-style"]
const validatedType = computed(() => {
  return validateValue(validTypes, props.type)
})
</script>

<template>
  <button :class="['base-button', `base-button--${validatedType}`]">
    <font-awesome-icon v-if="icon?.length" :icon="icon" v-bind="iconOptions" />
    <p v-if="text">{{ text }}</p>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.base-button {
  width: fit-content;
  display: inline-flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  padding: 10px 14px;
  border-radius: 4px;
  font-size: inherit;
  cursor: pointer;
  color: inherit;

  &--primary {
    border: 1px solid white;
    background-color: $success-color;
    color: white;
  }

  &--secondary {
    border: 1px solid $light-contrast;
    color: $font-color;
    background-color: rgba($secondary-color, 0.05);
  }

  &--error {
    border: 1px solid $error-color;
    background-color: $error-color;
    color: white;
  }

  &--no-style {
    padding: 0;
    border: none;
    background-color: transparent;
  }
}
</style>
