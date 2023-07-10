import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/create-user",
      name: "create-user",
      component: () => import("@/views/users/CreateView.vue")
    },
    {
      path: "/edit-user/:id",
      name: "edit-user",
      component: () => import("@/views/users/EditView.vue")
    }
  ]
})

export default router
