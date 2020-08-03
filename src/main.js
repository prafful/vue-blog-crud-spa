import Vue from 'vue'
import App from './App.vue'
import blogRoutes from "./routes/routes";
import axios from "axios";
import VueRouter from "vue-router";

//Vue.use(VueResource)
Vue.use(VueRouter)
//use new alias for $http so that all $http request mentods can be reused!
Vue.prototype.$http = axios

//Filter
Vue.filter('change-to-uppercase', function(value){
  console.log(value)
  return value.toUpperCase()
})

Vue.filter('show100', value=>{
  return value.slice(0,100) + "...."
})

const blogrouter = new VueRouter({
  routes:blogRoutes,
  mode:'history'
})



new Vue({
  render: h => h(App),
  router:blogrouter
}).$mount('#app')
