import Vue from 'vue'
import App from './App.vue'
import blogRoutes from "./routes/routes";
import axios from "axios";
import VueRouter from "vue-router";

//Vue.use(VueResource)
Vue.use(VueRouter)
//use new alias for $http so that all $http request mentods can be reused!
Vue.prototype.$http = axios


const blogrouter = new VueRouter({
  routes:blogRoutes,
  mode:'history'
})



new Vue({
  render: h => h(App),
  router:blogrouter
}).$mount('#app')
