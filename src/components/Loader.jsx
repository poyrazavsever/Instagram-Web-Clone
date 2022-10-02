import React from 'react'
import {MdiInstagram, LogoInstagram} from "../icons"

function Loader() {
  return (
    <div className='w-full h-full fixed top-0 left-0 bg-black text-white flex flex-col gap-3 items-center justify-center text-2xl' >
        <MdiInstagram className="text-7xl animate-spin"/>
        <LogoInstagram className="text-3xl" />
    </div>
  )
}

export default Loader