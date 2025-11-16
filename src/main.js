import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Initialize Memberstack
import memberstack from '@memberstack/dom'

memberstack.init({
  publicKey: 'pk_5e8b63f46c1e4f2d8a1b2c3d4e5f6789' // Replace with your actual Memberstack public key
})

const app = createApp(App)

app.use(router)

app.mount('#app')