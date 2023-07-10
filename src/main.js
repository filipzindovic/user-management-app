import "./assets/main.css"

import { createApp } from "vue"
import { createPinia } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

// FontAwesome and cherry-picked library.
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import "@/configs/fontawesome"
// MultiSelect stylesheet
import "vue-multiselect/dist/vue-multiselect.css"
// Toast lib & stylesheet
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

import App from "./App.vue"
import router from "./router"

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.component("font-awesome-icon", FontAwesomeIcon)
app.use(pinia)
app.use(router)
app.use(Toast)

app.mount("#app")
