import React from 'react'

function SettingsInput({ id, label, type = "text", warning, warningBottom }) {

    return (

        <div className='flex flex-col items-start'>

            <div className='flex items-start  gap-x-6'>
                <label htmlFor={id}
                    className="text-base font-semibold">
                    {label}
                </label>

                <div>

                    <input id={id} type={type}
                        className="border border-[#dbdbdb] bg-transparent rounded h-8 w-64" />

                    <p className='text-xs text-[#8e8e8e] pt-3 pl-1'>{warning} <span className='block pt-2'>{warningBottom}</span></p>

                </div>


            </div>



        </div>
    )
}

export default SettingsInput