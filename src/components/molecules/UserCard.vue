<script setup>
import BaseText from "@/components/atoms/BaseText.vue"
import BaseButton from "@/components/atoms/BaseButton.vue"
import BaseCard from "@/components/atoms/BaseCard.vue"
import BaseLabel from "@/components/atoms/BaseLabel.vue"

defineProps({
  options: {
    type: Array,
    default: () => []
  }
})

defineEmits(["edit", "delete"])
</script>

<template>
  <BaseCard class="user-card">
    <div class="user-card__list">
      <div class="user-card__list__item" v-for="(option, index) in options" :key="index">
        <BaseLabel>{{ option?.label }}</BaseLabel>
        <BaseText class="ellipsis">{{ option?.value }}</BaseText>
      </div>
    </div>
    <div class="user-card__actions">
      <BaseButton
        class="user-card__actions--edit"
        :icon="['far', 'pen-to-square']"
        type="no-style"
        @click="$emit('edit')"
      />
      <BaseButton
        class="user-card__actions--delete"
        :icon="['far', 'trash-can']"
        type="no-style"
        @click="$emit('delete')"
      />
    </div>
  </BaseCard>
</template>

<style lang="scss" scoped>
.user-card {
  display: flex;
  gap: 12px;

  @media only screen and (max-width: $medium-breakpoint) {
    flex-direction: column;
  }

  &__list {
    flex: 1;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    &__item {
      width: 120px;
    }
  }

  &__actions {
    display: flex;
    gap: 8px;
    font-size: $large-font-size;

    &--edit {
      color: $secondary-color;
    }

    &--delete {
      color: $error-color;
    }

    @media only screen and (max-width: $medium-breakpoint) {
      justify-content: flex-end;
    }
  }
}
</style>
