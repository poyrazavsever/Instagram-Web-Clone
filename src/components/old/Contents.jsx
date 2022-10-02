import React from 'react'
import { DotsThree, Heart, Message, Send, Bookmark } from "../icons"

function Contents() {
    return (
        <div className='sm:w-[500px] w-2/3 border rounded-md border-zinc-800 bg-black'>

            <div className='flex w-full items-center border border-zinc-900 rounded-b-md justify-between py-3 px-2'>

                <div className='flex gap-3 items-center'>
                    <img src="Images/ProfilePhotos/images7.jpg" alt="contentPhoto"
                        className='w-12 h-12 rounded-full border border-border p-[2px]' />
                    <div className='text-white'>
                        <p className='text-sm font-medium'>Poyrazisko</p>
                        <p className='text-xs'>#yazilim</p>
                    </div>
                </div>

                <DotsThree color="#dadada" className="text-2xl mr-3" />

            </div>

            <div>
                <img src="Images/Other/content1.jpg" alt="contentPhoto"
                    className='w-full' />

                <div className='flex justify-between w-full text-white py-4 px-3 text-2xl'>
                    <div className='flex gap-3'>
                        <Heart />
                        <Message />
                        <Send />
                    </div>
                    <Bookmark />
                </div>
            </div>

        </div>
    )
}

export default Contents