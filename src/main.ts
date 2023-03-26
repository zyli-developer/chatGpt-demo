import '@/styles/normalize.less'
import '@/styles/main.less'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'




const app = createApp(App)

app.use(createPinia())

app.mount('#app')
