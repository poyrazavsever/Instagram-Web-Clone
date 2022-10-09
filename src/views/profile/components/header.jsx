import React from 'react'

function Header({ user }) {

    return (
        <header className='flex items-center py-4 pb-10 px-24 gap-x-24'>

            <img src="Images/ProfilePhotos/noavatar.jpg" alt="profilePhoto"
                className='w-[150px] h-[150px] rounded-full ' />

            <div>

                <div className='mb-4'>
                    <h1 className='text-[28px] font-light'>{user.username}</h1>
                </div>


                <nav className='flex items-center gap-x-10'>
                    <div><span className='font-semibold'>{user.posts}</span> posts</div>
                    <div><span className='font-semibold'>{user.followers.length}</span> followers</div>
                    <div><span className='font-semibold'>{user.following.length}</span> following</div>
                </nav>

            </div>

        </header>
    )
}

export default Header