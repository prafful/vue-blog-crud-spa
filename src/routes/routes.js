import AddBlog from "../components/AddBlog.vue";
import ShowBlog from "../components/ShowBlog.vue";
import HelloWorld from "../components/HelloWorld.vue";

export default [
    {
        path:'/',
        component:HelloWorld
    },
    {
        path:'/show',
        component:ShowBlog
    },
    {
        path:'/add',
        component:AddBlog
    }
]