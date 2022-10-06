import React from 'react'

function Separator({label="OR"}) {
    return (
        <div className='flex items-center pt-2 my-2'>
            <div className='h-px bg-gray-300 flex-1'></div>
            <span className='px-4 text-[13px] text-gray-500 font-medium'>{label}</span>
            <div className='h-px bg-gray-300 flex-1'></div>
        </div>
    )
}

export default Separator