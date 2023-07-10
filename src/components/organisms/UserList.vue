<script setup>
import { computed } from "vue"
import { useRouter } from "vue-router"
import { storeToRefs } from "pinia"
import UserCard from "@/components/molecules/UserCard.vue"
import BaseLoader from "@/components/atoms/BaseLoader.vue"
import BaseErrorMessage from "@/components/atoms/BaseErrorMessage.vue"
import { USER_LABELS } from "@/constants/user"
import { useUsersStore } from "@/stores/users"
import { useCountriesStore } from "@/stores/countries"

const router = useRouter()
const userStore = useUsersStore()
const countriesStore = useCountriesStore()
const { setUsersData, removeUser } = userStore
const { setCountriesData } = countriesStore
const { usersData, usersDataIsLoading, formattedUsersData } = storeToRefs(userStore)
const { countriesData, countriesDataIsLoading } = storeToRefs(countriesStore)

if (!usersData?.value?.length && !usersDataIsLoading?.value) setUsersData()
if (!countriesData?.value?.length && !countriesDataIsLoading?.value) setCountriesData()

const dataIsLoading = computed(() => {
  return usersDataIsLoading?.value || countriesDataIsLoading?.value
})

const userOptions = computed(() => {
  return formattedUsersData?.value?.map((user) => {
    return {
      id: user?.id,
      options: Object.entries(user).map(([key, value]) => ({
        label: USER_LABELS?.[key] || "-",
        value: value || "-"
      }))
    }
  })
})

function handleEditClick(id) {
  router.push(`/edit-user/${id}`)
}
</script>

<template>
  <section class="user-list">
    <BaseLoader v-if="dataIsLoading"><p>Loading user list...</p></BaseLoader>
    <BaseErrorMessage
      v-else-if="!dataIsLoading && !userOptions?.length"
      message="No users to display"
    />
    <TransitionGroup v-else name="list" tag="ul" class="user-list__list">
      <li v-for="user in userOptions" :key="user?.id">
        <UserCard
          :options="user?.options"
          @delete="removeUser(user?.id)"
          @edit="handleEditClick(user?.id)"
        />
      </li>
    </TransitionGroup>
  </section>
</template>

<style lang="scss" scoped>
.user-list {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0;
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}
.list-leave-active {
  display: none;
  position: absolute;
}
</style>
