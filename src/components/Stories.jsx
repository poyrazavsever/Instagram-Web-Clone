import React, { useRef, useEffect } from 'react'
import { Users } from "../data"
import { Arrow } from "../icons"

function Stories() {


  const ulRef = useRef();
  const btnRef = useRef();
  
  useEffect(() => {
    const ulElement = ulRef.current;
    const btnElement = btnRef.current;
    ulElement.addEventListener("wheel", (e) => {
      e.preventDefault()
      ulElement.scrollLeft += e.deltaY
    })

    btnElement.addEventListener("click", (e) => {
      e.preventDefault()
      ulElement.scrollLeft += 200;
    })
  }) 


  return (
    <div className='flex w-2/3 sm:w-[500px] items-center bg-black p-5 py-6 rounded-lg border border-zinc-800'>

      <ul ref={ulRef} className='flex flex-nowrap scroll-smooth overflow-x-hidden'>

        {Users.map((user, index) => {
          return (

            <li key={index} className='inline-block pr-4 text-center'>
              <img src={user.image} alt="ppPhotoStorie" className='rounded-full border w-16 h-16 border-zinc-800 p-[2px]' />
              <p className='text-zinc-500 text-xs pt-1'>{user.name}</p>
            </li>

          )
        })}
      </ul>

      <button ref={btnRef}>
        <div className="flex z-20 cursor-pointer justify-center items-center rotate-180 text-xs w-5 h-5 bg-white rounded-full">
          <Arrow color="gray" className="w-4 h-4" />
        </div>
      </button>


    </div>
  )
}

export default Stories