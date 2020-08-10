<template>
  <span>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <div>
          <span v-if="error.length">
            <span v-for="(err, index) in error" v-bind:key="index">
              {{err}}
            </span>
          </span>
      </div>
      <form >
        <label>User Id:</label>
        <input type="number" v-model.lazy="blog.userId"  required>
        <br>
        <label>Title:</label>
        <input type="text"  v-model.lazy="blog.title"  required>
        <br>
        <label >Body:</label>
        <textarea cols="30" rows="10" v-model.lazy="blog.body" ></textarea>
        <br>
         <button v-on:click.prevent="addBlog()">Add Submit</button>
         &nbsp; &nbsp;
          <button type="button"  v-on:click="addBlog()">Add Button</button>
      </form>
    </div>
    <div>
      <h3>Preview:</h3>
      UserId: {{ blog.userId }}
      <br>
      Title: {{ blog.title }}      
      <br>
      Body: {{ blog.body }}
    </div>
  </span>

</template>

<script>
export default {
  name: 'AddBlog',
  data: function(){
      return {
          msg:"Add Blog",
          blog:{
             "userId":0,
             "title": "",
             "body": ""
          },
          error:[]
      }
 },
 methods:{
   addBlog: function(){
     let validBlog = this.validateBlog()
     if(localStorage){
       localStorage.setItem("blog"+this.blog.id, JSON.stringify(this.blog))
     }
      if(validBlog){
              this.$http.post('http://localhost:3000/blogs', this.blog)
                .then(res=>{
                  console.log(res)
                  this.$router.push({path:'/show'})
                }, err=>{
                  console.log(err)
                })
          }
      }

     ,
   validateBlog: function(){
     console.log("Validating....");
     if(this.blog.id == 0){
       this.error.push("Id must be non zero")
       return false
     }
     if(this.blog.title === ""){
       this.error.push("Title cannot be blank!")
       return false
     }
     return true
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
