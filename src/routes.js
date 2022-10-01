import Home from "./views/Home"
import Login from "./views/Login"
import AuthLayout from "./views/auth/"
import PrivateRoute from "./components/PrivateRoute"

export const routes = [{
        path: "/",
        element: < Home /> ,
        auth: true,
    },
    {
        path: "/auth",
        element: < AuthLayout /> ,
        children: [{
            path: 'login',
            element: < Login />
        }]
    }
]

const authCheck = routes => routes.map(route => {
    if(route?.auth){
        route.element = <PrivateRoute> {route.element} </PrivateRoute>
    }

    if(route?.children){
        route.children = authCheck(route.children)
    }

    return route
})

export default authCheck(routes)