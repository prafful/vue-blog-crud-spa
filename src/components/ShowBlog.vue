<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="ss" placeholder="search blogs..."> {{searchtitle}}
    <div v-for="(blog, index) in searchBlogs" v-bind:key="index"> 

      <h2>{{blog.id}} {{  blog.title | change-to-uppercase }}</h2>
      <p> {{ blog.body | show100 }} </p>
      <router-link v-bind:to="'/edit/'+blog.id">
        <button>Edit</button> 
      </router-link>
      &nbsp; 
      <button v-on:click="deleteBlog(blog.id)">Delete</button>
    </div>
  </div>
</template>

<script>


export default {
  name: 'ShowBlog',
  data: function(){
      return {
          msg:'Show Blogs',
          blogs:[],
          ss:''
      }
  },
  methods:{
    deleteBlog: function(id){
      console.log("Delete Blog with id: " + id)
      this.$http.delete('http://localhost:3000/blogs' +'/' + id )
                .then(res=>{
                  console.log(res)
                  this.getBlogs()
                }, err=>{
                  console.log(err)
                })
    },
    getBlogs: function(){
        this.$http.get('http://localhost:3000/blogs')
              .then(res=>{
                console.log(res.data)
                this.blogs = res.data
              }, err=>{
                console.log(err)
              })
    }
  },
  computed:{
    searchBlogs: function(){
      return this.blogs.filter((blog)=>{
        //return boolean depending on given statement
        //console.log(this.ss)
        //console.log(blog)
        return blog.title.match(this.ss)
      })
    }
  },
  created:function(){
    this.getBlogs()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




</style>
