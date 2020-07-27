<template>
    <div>
        <ul>
            <li>
                <router-link to="/" exact>Welcome</router-link>
                
                <router-link to="/show" exact> Show Blog</router-link>
                
                <router-link to="/add" exact> Add Blog</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>

.router-link-active{
    background-color: lightgrey;
    color: red;
}

li{
    display: inline-block;
    margin: 10px;
    padding: 10px;

}

ul{
    list-style-type: none;

}


</style>