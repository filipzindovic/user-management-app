<script setup>
import BaseCard from "@/components/atoms/BaseCard.vue"
import UserForm from "@/components/organisms/UserForm.vue"
import { createUser, getAllUsers } from "@/api/users"

async function handleSaveClick(user) {
  await createUser(user)
  getAllUsers()
}
</script>

<template>
  <BaseCard class="create-view">
    <h2>Create user</h2>
    <UserForm @save="handleSaveClick" />
  </BaseCard>
</template>

<style lang="scss" scoped>
.create-view {
  display: flex;
  gap: 20px;
  flex-direction: column;
}
</style>
