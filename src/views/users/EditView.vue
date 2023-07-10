<script setup>
import { computed, ref } from "vue"
import { useRoute } from "vue-router"
import { useUsersStore } from "@/stores/users"
import { useCountriesStore } from "@/stores/countries"
import { getUserById, editUser, getAllUsers } from "@/api/users"
import BaseCard from "@/components/atoms/BaseCard.vue"
import UserForm from "@/components/organisms/UserForm.vue"
import BaseLoader from "@/components/atoms/BaseLoader.vue"
import BaseErrorMessage from "@/components/atoms/BaseErrorMessage.vue"

const route = useRoute()
const isLoading = ref(false)
const user = ref({})
const { usersData, findUserById } = useUsersStore()
const { getCountryById } = useCountriesStore()

initializeUserToEdit()

async function initializeUserToEdit() {
  if (!usersData?.length) {
    try {
      isLoading.value = true
      const response = await getUserById(route?.params?.id)

      if (response?.status === 200 && response?.data?.id) {
        Object.assign(user.value, response?.data)
      }

      isLoading.value = false
    } catch (error) {
      console.log(error)
    }
  } else {
    Object.assign(user.value, findUserById(route?.params?.id))
  }
}

const country = computed(() => {
  return getCountryById(user?.value?.cc)
})

async function handleSaveClick(user) {
  await editUser(route?.params?.id, user)
  getAllUsers()
}
</script>

<template>
  <BaseCard class="edit-view">
    <h2>Edit user</h2>
    <BaseLoader v-if="isLoading"><p>Loading user list...</p></BaseLoader>
    <BaseErrorMessage v-if="!isLoading && !user?.id" message="Could not load user data" />
    <UserForm
      v-else
      :name="user?.name"
      :country="country"
      :modified-by="user['modified-by']"
      @save="handleSaveClick"
    />
  </BaseCard>
</template>

<style lang="scss" scoped>
.edit-view {
  display: flex;
  gap: 20px;
  flex-direction: column;
}
</style>
