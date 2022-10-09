import React from 'react'
import { Tagged } from '../../icons'

function ProfileTagged() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center pt-20'>
      <div className='w-[62px] h-[62px] border-2 rounded-full border-black flex items-center justify-center'>
        <Tagged className="h-8 w-8" />
      </div>
      <h6 className='text-[28px] font-light'>No Photos</h6>
    </div>
  )
}

export default ProfileTagged