import React, {useRef, useEffect} from 'react'

function Login() {

  const ref = useRef()

  useEffect(() => {
		let images = ref.current.querySelectorAll('img'),
			total = images.length,
			current = 0
		const imageSlider = () => {
			if (current > 0) {
				images[current - 1].classList.add('opacity-0')
			} else {
				images[total - 1].classList.add('opacity-0')
			}
			images[current].classList.remove('opacity-0')
			if (current === total - 1) {
				current = 0
			} else {
				current += 1
			}
		}
		imageSlider()
		let interval = setInterval(imageSlider, 3000)
		return () => {
			clearInterval(interval)
		}
	}, [ref])

  return (
    <div className='h-full w-full flex items-center justify-center'>
      <div className='w-[380px] bg-logo-pattern relative h-[581px] bg-[lenght:468.32px_634.15px] bg-[top_left_-46px]'>
        <div className='w-[250px] h-[538px] absolute top-[27px] right-[18px]' ref={ref}>

          <img className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity ease-linear duration-500' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" alt="photo1" /> 

          <img className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity ease-linear duration-500' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png" alt="photo1" /> 

          <img className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity ease-linear duration-500' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png" alt="photo1" /> 

          <img className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity ease-linear duration-500' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png" alt="photo1" />


        </div>
      </div>
    </div>
  )
}

export default Login