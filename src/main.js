import Vue from 'vue'
import App from './App.vue'
import blogRoutes from "./routes/routes";

import VueRouter from "vue-router";

Vue.use(VueRouter)

const blogrouter = new VueRouter({
  routes:blogRoutes,
  mode:'history'
})



new Vue({
  render: h => h(App),
  router:blogrouter
}).$mount('#app')
