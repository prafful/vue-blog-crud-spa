<template>
  <div class="hello">
    <h1>{{ msg }}{{id}}</h1>
    <h3>{{blog.title}}</h3>
    <p> {{blog.body}} </p>
  </div>
</template>

<script>
export default {
  
  data: function(){
    return {
      msg: 'You clicked on Blog with id: ',
      id: this.$route.params.myid,
      blog:{}
    }
  },
  created: function(){
    console.log(this.$route)
    console.log(this.$route.params.myid)
    this.$http.get('http://localhost:3000/blogs'+'/'+ this.id )
                .then(res=>{
                    console.log(res)
                    this.blog = res.data
                }, err=>{
                    console.log(err)
                })

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
