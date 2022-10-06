import Home from "./views/Home"
import Login from "./views/auth/Login"
import Register from "./views/auth/Register"
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
            },
            {
                path: "register",
                element: < Register />
            }
        ]
    },

]


const authCheck = routes => routes.map(route => {
    if (route?.auth) {
        route.element = < PrivateRoute > {
            route.element
        } </PrivateRoute>
    }

    if (route?.children) {
        route.children = authCheck(route.children)
    }

    return route
})

export default authCheck(routes)