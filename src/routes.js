import Home from "./views/Home"
import MainLayout from "./views/mainLayout"
import PorfileLayout from "./views/profile/index"
import ProfileTagged from "./views/profile/tagged"
import ProfilePosts from "./views/profile/posts"
import Login from "./views/auth/Login"
import Register from "./views/auth/Register"
import AuthLayout from "./views/auth/"
import PrivateRoute from "./components/PrivateRoute"
import Logout from "./views/logout"
import SettingsLayout from "./views/settings/index"
import Edit from "./views/settings/edit"
import PasswordChange from "./views/settings/passwordChange"


export const routes = [{

        path: "/",
        element: < MainLayout /> ,
        auth: true,
        children : [
            {
                index:true,
                element: <Home />
            },
            
            {
                path:"/settings",
                element: <SettingsLayout />,
                children : [
                    {
                        path:"edit",
                        element: <Edit />
                    },
                    {
                        path:"password_change",
                        element: <PasswordChange />
                    }
                ]
            },

            {
                path:"logout",
                element: <Logout />
            },
            {
                path: ":username",
                element: <PorfileLayout />,
                children: [
                    {
                        index:true,
                        element: <ProfilePosts />
                    },
                    {
                        path:"tagged",
                        element: <ProfileTagged />
                    }
                ]
            }
        ]
    },

    {
        path: "/auth",
        element: < AuthLayout /> ,
        children: [
            {
                path: 'login',
                element: < Login />
            },
            {
                path: "register",
                element: < Register />
            },
        
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