import React, { useState } from 'react'
import { Search, MdiCloseCircle } from "../icons"
import classNames from 'classnames'

function SearchBox() {

  const [open, setOpen] = useState(false)

  return (
    <div className='w-[268px] relative'>

      <span className={classNames({
        "absolute top-0 left-0 h-9 w-9 pointer-events-none flex items-center justify-center text-[#8e8e8e]" : true, 
        "hidden" : open
      })}>
        <Search className="w-4 h-4" />
      </span>

      <input onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} type="text" placeholder='Search' className='h-9 w-full rounded bg-[#efefef] pl-9 focus:pl-3 outline-none' />

      <button onClick={() => setOpen(false)} className={classNames({
        "absolute top-0 right-0 w-9 h-9 justify-center items-center text-[#c7c7c7] hidden" : true,
        "!flex" : open
      })}>
        <MdiCloseCircle />
      </button>

    </div>
  )
}

export default SearchBox