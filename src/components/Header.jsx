import React, { useState } from 'react'
import { LogoInstagram, ProfilePhoto, Settings } from "../icons"
import { Link, NavLink } from "react-router-dom"
import SearchBox from "./Search"
import { Home, Message, PlusSquare, Compass, Heart } from "../icons"
import { useSelector } from 'react-redux'
import classNames from 'classnames'


function Header() {

    const user = useSelector(state => state.auth.user)
    const [visible, setVisible] = useState(false)

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

                    <div className='relative'>

                        <div className='cursor-pointer' onClick={() => visible ? setVisible(false) : setVisible(true)}>
                            <img src="Images/ProfilePhotos/noavatar.jpg" alt="ppPhoto"
                            className='w-6 h-6 rounded-full' />
                        </div>

                        <div  onClick={() => visible ? setVisible(false) : setVisible(true)} className={classNames({
                            'absolute left-0 top-10 -translate-x-3/4 rounded-md shadow-xl flex flex-col bg-white text-base w-[220px] transition-all' : true,
                            "-translate-y-[200%] opacity-0" : !visible,
                        })}>

                            <NavLink to={`/${user.username}`} className="flex items-center gap-2 py-3 pl-6 transition-all hover:bg-zinc-100">
                                <ProfilePhoto />
                                Profile
                            </NavLink>

                            <NavLink to="/settings" className="flex items-center gap-2 py-3 pl-6 transition-all hover:bg-zinc-100">
                                <Settings />
                                Settings
                            </NavLink>

                            <hr />

                            <NavLink to="/logout" className="py-3 pl-6 transition-all hover:bg-zinc-100">
                                Log Out
                            </NavLink>
                        </div>

                    </div>


                </nav>

            </div>


        </header>
    )
}

export default Header