import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import store from './store'

import HomeView from './views/HomeView.vue'
import WebSocketView from './views/WebSocketView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/websocket', component: WebSocketView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, left: 0 }
  }
})

createApp(App)
.use(router)
.use(store)
.mount('#app')
