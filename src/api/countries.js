import axiosInstance from "@/configs/api"
import { useToast } from "vue-toastification"

const toast = useToast()

const getAllCountryNames = async (id, requestObj) => {
  try {
    const response = await axiosInstance.put("/countries", requestObj)
    return response
  } catch (error) {
    toast.error("Error fetching country list")
    return error
  }
}

export { getAllCountryNames }
