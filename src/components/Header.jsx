import React from 'react'
import { LogoInstagram } from "../icons"
import { Link, NavLink } from "react-router-dom"
import SearchBox from "./Search"
import { logout } from '../firebase'
import { Home, Message, PlusSquare, Compass, Heart } from "../icons"
import { useSelector } from 'react-redux'


function Header() {

    const user = useSelector(state => state.auth.user)

    return (
        <header className=' bg-white border-b border-gray-300 '>

            <div className='h-[60px] flex items-center justify-between container mx-auto'>

                <Link to="/">
                    <LogoInstagram className="text-3xl" />
                </Link>

                <SearchBox />

                <nav className='flex items-center gap-x-6'>

                    <NavLink to="/">
                        <Home />
                    </NavLink>

                    <NavLink to="/">
                        <Message />
                    </NavLink>

                    <NavLink to="/">
                        <PlusSquare />
                    </NavLink>

                    <NavLink to="/">
                        < Compass />
                    </NavLink>

                    <NavLink to="/">
                        <Heart />
                    </NavLink>

                    <NavLink to={`/${user.username}`}>
                        <img src="Images/ProfilePhotos/noavatar.jpg" alt="ppPhoto" 
                        className='w-6 h-6 rounded-full'/>
                    </NavLink>
                    
                </nav>

            </div>


        </header>
    )
}

export default Header