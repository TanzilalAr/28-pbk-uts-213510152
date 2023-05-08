import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";

import './index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
addIcons(FaFlag, RiZhihuFill);
