import { ref, computed } from "vue"
import { defineStore } from "pinia"
import { getAllUsers, deleteUser } from "@/api/users"
import { useCountriesStore } from "@/stores/countries"
import { formatDate } from "@/helpers/format"

export const useUsersStore = defineStore("users", () => {
  const usersData = ref([])
  const usersDataIsLoading = ref(false)
  const userDeleteInProgress = ref(false)

  const sortedUsersData = computed(() => {
    return usersData?.value?.sort((userA, userB) => userB?.["updated-ts"] - userA?.["updated-ts"])
  })

  const formattedUsersData = computed(() => {
    const { getCountryById } = useCountriesStore()

    return sortedUsersData?.value?.map((user) => ({
      id: user?.id,
      cc: getCountryById(user?.cc)?.name,
      name: user?.name,
      "modified-by": user?.["modified-by"],
      "updated-ts": formatDate(user?.["updated-ts"])
    }))
  })

  function setUsersDataIsLoading(value) {
    usersDataIsLoading.value = value
  }

  function setUserDeleteInProgress(value) {
    userDeleteInProgress.value = value
  }

  async function setUsersData() {
    setUsersDataIsLoading(true)

    const response = await getAllUsers()

    if (response?.status === 200 && response?.data?.length) {
      usersData?.value?.push(...response.data)
    }

    setUsersDataIsLoading(false)
  }

  async function removeUser(id) {
    setUserDeleteInProgress(true)

    const response = await deleteUser(id)

    if (response?.status === 200 && response?.data) {
      const index = usersData?.value?.findIndex((user) => user?.id === id)

      if (index >= 0) {
        usersData.value.splice(index, 1)
      }
    }

    setUserDeleteInProgress(false)
  }

  function findUserById(id) {
    const user = usersData?.value.find((user) => user?.id === parseInt(id))

    return user ?? {}
  }

  return {
    usersData,
    usersDataIsLoading,
    formattedUsersData,
    findUserById,
    setUsersData,
    setUsersDataIsLoading,
    removeUser,
    setUserDeleteInProgress
  }
})
