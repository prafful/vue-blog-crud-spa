<template>
  <div id="app">
    <navbar></navbar>
   <router-view></router-view>
    
  </div>
</template>

<script>

import NavBar from "./components/Navigation.vue";


export default {
  name: 'App',
  components:{
    'navbar':NavBar
  },
  mounted: function(){
    console.log("App Component mounted!")
    /* eslint-disable no-debugger */
    //debugger
    console.log(process.env.MYMESSAGE)
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
