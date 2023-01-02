import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGravatar from "vue3-gravatar";

import './style.css'

const app = createApp(App)
app.use(VueGravatar);
app.use(router)

app.mount('#app')
