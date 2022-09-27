import React from 'react'
import { LogoInstagram, Arrow, Search, Home, Message, PlusSquare, Compass, Heart } from "../icons"

function Navbar() {
    return (
        <div className='w-full flex justify-around bg-black py-3'>

            <div className='flex items-center gap-2 cursor-pointer'>
                <LogoInstagram color="#fff" className='text-4xl' />
                <Arrow color="#ffff" className='-rotate-90' />
            </div>

            <div className = "relative hidden sm:block">
                <input type="text" className='border-none outline-none text-lg text-white bg-search p-2 rounded-md pl-10 placeholder:text-zinc-600' placeholder='Ara'/>
                <Search className="absolute text-xl text-zinc-600 top-[12px] left-2" />
            </div>

            <div className='flex items-center gap-5'>
                <Home className="link-icon"/>
                <Message className="link-icon"/>
                <PlusSquare className="link-icon"/>
                <Compass className="link-icon"/>
                <Heart className="link-icon"/>
                <img src='Images/ProfilePhotos/ppfoto1.jpg' className='w-8 rounded-full'/>
            </div>

        </div>
    )
}

export default Navbar