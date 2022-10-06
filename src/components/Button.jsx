import React from 'react'

function Button({type="button",children, ...props}) {
  return (
    <button
      type={type}
      {...props}
      className='h-[30px] mt-1 font-medium disabled:opacity-30 transition-all bg-btn text-white rounded-sm w-full flex justify-center items-center gap-x-2' >
        {children}
      </button>
  )
}

export default Button