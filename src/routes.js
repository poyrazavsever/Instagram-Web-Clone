import Home from "./views/Home"
import Login from "./views/Login"

export const routes = [
    {
        name:"Home",
        path:"/",
        component: Home,
        auth:false,
        exact:true
    },
    {
        name:"Login",
        path:"/login",
        component: Login,
        auth:true,
        exact:true
    }
]