import React from 'react'
import { LogoInstagram } from "../icons"
import { Link } from "react-router-dom"
import Search from "./Search"
import { logout } from '../firebase'


function Header() {
    return (
        <header className=' bg-white border-b border-gray-300 '>

            <div className='h-[60px] flex items-center justify-between container mx-auto'>

                <Link to="/">
                    <LogoInstagram className="text-3xl" />
                </Link>

                <Search />

                <nav>
                    <button onClick={logout}>Logout</button>
                </nav>

            </div>
            

        </header>
    )
}

export default Header