import React from 'react'
import { Users } from "../data"
import { Arrow } from "../icons"

function Stories() {
  return (
    <div className='w-[480px] flex items-center bg-black p-5 py-6 rounded-lg border border-zinc-800 mt-7'>

      {Users.map((user) => {
        return (

          <div className='inline-block pr-4 text-center'>
            <img src={user.image} alt="ppPhotoStorie" className='rounded-full border w-16 h-16 border-zinc-800 p-[2px]' />
            <p className='text-zinc-500 text-xs'>{user.name}</p>
          </div>

        )
      })}

      <div className="flex cursor-pointer justify-center items-center rotate-180 text-xs w-5 h-5 bg-white rounded-full">
        <Arrow color="gray" className="w-4 h-4"/>
      </div>


    </div>
  )
}

export default Stories