import React from 'react'
import Stories from "../components/Stories";
import Contents from "../components/Contents";
import Navbar from "../components/Navbar"

function Home() {
    return (
        <div className='bg-bg w-full h-screen flex flex-col items-center gap-12'>

            <Navbar/>    

            <Stories />

            <Contents />
            
        </div>
    )
}

export default Home