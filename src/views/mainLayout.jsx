import React from 'react'
import Header from '../components/Header'
import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <>
      <Header />
      <div className='container mx-auto'>
        <Outlet />
      </div>

    </>
  )
}

export default MainLayout