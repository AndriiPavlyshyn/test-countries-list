import './assets/main.css'
import { auth0 }       from '@/auth/auth.ts'
import router          from '@/routes.ts'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App           from './App.vue'


const app = createApp(App)

app.use(auth0);
app.use(router)
app.use(createPinia())

app.mount('#app')
