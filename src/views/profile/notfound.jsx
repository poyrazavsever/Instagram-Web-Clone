import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='text-center grid gap-y-6 pt-8'>
        <h6 className='text-[28px] font-semibold'>Sorry, this page isn't available.</h6>
        <p>
            The link you followed may be broken, or the page may have been removed. <Link className='text-link' to="/">Go back to Instagram.</Link>
        </p>
    </div>
  )
}

export default NotFound