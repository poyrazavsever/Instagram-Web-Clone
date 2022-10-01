import React, {useState, useEffect, useRef} from 'react'

function Input({label, type= "text", ...props}) {

    const [show, setShow] = useState(false)
    const [inputType, setType] = useState(type)
    const inputRef = useRef()

    useEffect(() => {
        if(show) {
            setType("text")
            inputRef.current.focus()
        }else{
            setType("password")
            inputRef.current.focus()
        }
    }, [show])

    return (
        <label className='relative flex bg-zinc-100 border rounded-sm focus-within:border-gray-400'>

            <input ref={inputRef} required type={inputType} className='  h-[38px] text-xs  outline-none w-full cursor-text  px-2 peer valid:pt-[10px]' {...props}/>

            <small className='absolute top-1/2 left-[9px] -translate-y-1/2 text-xs text-zinc-500  pointer-events-none transition-all peer-valid:text-[9px] peer-valid:top-2'>{label}</small>

            {type === "password" && props?.value && (
                <button type="button" onClick={() => setShow(show => !show)} className='font-semibold bg-zinc-50 text-sm mr-3 flex items-center'>
                    {show? "Hide" : "Show"}
                </button>
            )}
            
        </label>
    )
}

export default Input