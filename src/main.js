import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./openai"

createApp(App).use(router).mount("#app")
