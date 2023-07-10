import { ref } from "vue"
import { defineStore } from "pinia"
import { getAllCountryNames } from "@/api/countries"

export const useCountriesStore = defineStore(
  "countries",
  () => {
    const countriesData = ref([])
    const countriesDataIsLoading = ref(false)

    function setCountryDataIsLoading(value) {
      countriesDataIsLoading.value = value
    }

    async function setCountriesData() {
      setCountryDataIsLoading(true)

      const response = await getAllCountryNames()

      if (response?.status === 200 && response?.data?.length) {
        countriesData?.value.push(...response.data)
      }

      setCountryDataIsLoading(false)
    }

    function getCountryById(id) {
      const country = countriesData?.value.find((country) => country?.cc === id)

      return country ?? {}
    }

    return {
      countriesData,
      countriesDataIsLoading,
      setCountriesData,
      setCountryDataIsLoading,
      getCountryById
    }
  },
  {
    persist: true
  }
)
