<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="(blog, index) in blogs" v-bind:key="index"> 
      <h2>{{blog.id}} {{  blog.title  }}</h2>
      <p> {{ blog.body }} </p>
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
          blogs:[]
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
  created:function(){
    this.getBlogs()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




</style>
