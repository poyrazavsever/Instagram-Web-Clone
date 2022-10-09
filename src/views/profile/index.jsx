import { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink, Outlet } from "react-router-dom"
import { getUserInfo } from "../../firebase";
import Header from "./components/header";
import { Post, Tagged } from "../../icons"
import classNames from "classnames";


function PorfileLayout() {

    const { username } = useParams();
    const [user, setUser] = useState(false)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        getUserInfo(username)
            .then(user => {
                setUser(user)
            })
            .catch(err => {
                setUser(false)
            })
    }, [])

    return user && (
        <div>
            <Header user={user} />
            <nav className="border-t flex justify-center items-center gap-x-16">

                <NavLink to={`/${username}`} end={true}
                className = {({isActive}) => classNames({
                    "text-sm flex  py-3 border-t  tracking-widest items-center -mt-px gap-x-1.5 font-semibold" : true,
                    "text-[#8e8e8e] border-transparent" : !isActive,
                    "text-black border-black" : isActive
                })}>
                    <Post className="w-3 h-3"/>
                    POSTS
                </NavLink>

                <NavLink to={`/${username}/tagged`} end={true}
                className = {({isActive}) => classNames({
                    "text-sm flex  py-3 border-t  tracking-widest items-center -mt-px gap-x-1.5 font-semibold" : true,
                    "text-[#8e8e8e] border-transparent" : !isActive,
                    "text-black border-black" : isActive
                })}>
                    <Tagged className="w-3 h-3"/>
                    TAGGED
                </NavLink>


            </nav>

            <Outlet />
        </div>
    )
}

export default PorfileLayout