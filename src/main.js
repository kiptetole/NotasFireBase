import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'
import VueRouter from 'vue-router'

import login from './components/login.vue'
import listanotas from './components/listanotas.vue'
import registro from './components/registro.vue'

Vue.use(firestorePlugin)
Vue.use(VueRouter)

Vue.config.productionTip = false

const rutas = [
  {path: '/login', component: login},
  {path: '/registro', component: registro},
  {path: '/listanotas', component: listanotas},
  {path: '/*', component: login}
]

const router = new VueRouter({
  'routes':rutas
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')