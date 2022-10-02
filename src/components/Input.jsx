import { useField } from 'formik'
import React, { useState, useEffect } from 'react'
import classNames from 'classnames'


function Input({ label, type = "text", ...props }) {


    const [field, meta, helpers] = useField(props)
    const [show, setShow] = useState(false)
    const [inputType, setType] = useState(type)

    useEffect(() => {
        if (show) {
            setType("text")
        } else if(type === "password") {
            setType("password")
        }
    }, [show])

    return (
        <label className='relative flex bg-zinc-100 border rounded-sm focus-within:border-gray-400'>

            <input type={inputType} className={classNames({
                "h-[38px] text-xs outline-none w-full cursor-text  px-2" : true,
                "pt-[10px]" : field.value
            })} {...field} {...props} />

            <small className={classNames({
               "absolute top-1/2 left-[9px] -translate-y-1/2 text-zinc-500  pointer-events-none transition-all" : true,
               "text-xs" : !field.value,
               "text-[9px] top-2" : field.value 
            })}>{label}</small>

            {type === "password" && field?.value && (
                <div onClick={() => setShow(show => !show)} className='cursor-pointer select-none font-semibold bg-zinc-50 text-sm mr-3 flex items-center'>
                    {show ? "Hide" : "Show"}
                </div>
            )}

        </label>
    )
}

export default Input