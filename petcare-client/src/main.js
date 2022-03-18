import { createApp } from 'vue'
import axios from 'axios'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
    .use(router)
    .use(store)

app.config.globalProperties.$http = axios

app.mount("#app")

const token = localStorage.getItem('token')
if (token) {
    app.config.globalProperties.$http.defaults.headers.common['Authorization'] = token
}