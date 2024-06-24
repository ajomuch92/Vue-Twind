import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { install } from '@twind/core'
import config from '../twind.config'

install(config)

createApp(App)
  .use(router)
  .mount('#app')
