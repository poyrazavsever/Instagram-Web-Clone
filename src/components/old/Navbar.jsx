import React from 'react'
import { LogoInstagram, Arrow, Search, Home, Message, PlusSquare, Compass, Heart } from "../icons"

function Navbar() {
    return (
        <div className='w-full px-4 bg-black py-4 border-b border-zinc-800'>

            <div className='w-full md:w-8/12 lg:w-1/2 mx-auto flex items-center justify-between gap-12'>
                <div className='flex items-center justify-center gap-2 cursor-pointer'>
                    <LogoInstagram color="#fff" className='text-3xl' />
                    <Arrow color="#ffff" className='-rotate-90 text-sm' />
                </div>

                <div className="relative hidden md:block">
                    <input type="text" className='border-none outline-none text-xs text-white bg-search p-2 rounded-md pl-10 placeholder:text-sm placeholder:text-zinc-600' placeholder='Ara' />
                    <Search className="absolute text-base text-zinc-600 top-[9px] left-3" />
                </div>

                <div className='flex items-center gap-5'>
                    <Home className="link-icon" />
                    <Message className="link-icon" />
                    <PlusSquare className="link-icon" />
                    <Compass className="link-icon" />
                    <Heart className="link-icon" />
                    <img src='Images/ProfilePhotos/images7.jpg' alt='ppPhoto' className='w-8 rounded-full' />
                </div>
            </div>

        </div>
    )
}

export default Navbar