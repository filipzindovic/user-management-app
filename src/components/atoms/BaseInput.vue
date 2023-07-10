<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ""
  }
})

defineEmits(["update:modelValue"])
</script>

<template>
  <input
    class="base-input"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style lang="scss" scoped>
.base-input {
  border: 1px solid $light-contrast;
  border-radius: 4px;
  font-size: inherit;
  color: inherit;
  padding: 11px 8px;

  &:focus-visible {
    outline: none;
  }
}
</style>
