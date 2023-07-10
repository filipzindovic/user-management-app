import axiosInstance from "@/configs/api"
import { useToast } from "vue-toastification"

const toast = useToast()

const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get("/users")
    return response
  } catch (error) {
    toast.error("Could not fetch users list")
    return error
  }
}

const getUserById = async (id) => {
  try {
    const response = await axiosInstance.get(`/users/${id}`)
    return response
  } catch (error) {
    toast.error("Could not fetch user")
    return error
  }
}

const createUser = async (requestObj) => {
  try {
    const response = await axiosInstance.post("/users", requestObj)
    toast.success("Successfully created user")
    return response
  } catch (error) {
    toast.error("Error creating user")
    return error
  }
}

const editUser = async (id, requestObj) => {
  try {
    const response = await axiosInstance.put(`/users/${id}`, requestObj)
    toast.success("Successfully edited user")
    return response
  } catch (error) {
    toast.error("Error editing user")
    return error
  }
}

const deleteUser = async (id) => {
  try {
    const response = await axiosInstance.delete(`/users/${id}`)
    toast.success("Successfully deleted user")
    return response
  } catch (error) {
    toast.error("Error deleting user")
    return error
  }
}

export { getAllUsers, getUserById, createUser, editUser, deleteUser }
