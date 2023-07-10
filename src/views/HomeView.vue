<script setup>
import BaseButton from "@/components/atoms/BaseButton.vue"
import UserList from "@/components/organisms/UserList.vue"
</script>

<template>
  <main class="home-view">
    <RouterLink to="/create-user">
      <BaseButton text="Create User" type="secondary" :icon="['fas', 'plus']" />
    </RouterLink>
    <UserList class="home-view__user-list" />
  </main>
</template>

<style lang="scss" scoped>
.home-view {
  &__user-list {
    padding: 20px 0;
  }
}
</style>
