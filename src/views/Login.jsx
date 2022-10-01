import React, { useRef, useEffect, useState } from 'react'
import { LogoInstagram, FaFacebookOfficial } from "../icons"
import Input from "../components/Input"

function Login() {

	const [email, setEmail] = useState()
	const [password, setPassword] = useState()

	const enable = email && password

	const ref = useRef()

	useEffect(() => {
		let images = ref.current.querySelectorAll('img'),
			total = images.length,
			current = 0
		const imageSlider = () => {
			images[(current > 0 ? current : total) - 1].classList.add("opacity-0");
			images[current].classList.remove("opacity-0");
			current = current === total - 1 ? 0 : current + 1;
		}
		imageSlider()
		let interval = setInterval(imageSlider, 3000)
		return () => {
			clearInterval(interval)
		}
	}, [ref])


	return (
		<div className='h-full w-full flex flex-wrap overflow-auto gap-x-8 items-center justify-center'>

			<div className='w-[380px] hidden md:block bg-logo-pattern relative h-[581px] bg-[lenght:468.32px_634.15px] bg-[top_left_-46px]'>
				<div className='w-[250px] h-[538px] absolute top-[27px] right-[18px]' ref={ref}>

					<img className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity ease-linear duration-500' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" alt="photo1" />

					<img className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity ease-linear duration-500' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png" alt="photo1" />

					<img className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity ease-linear duration-500' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png" alt="photo1" />

					<img className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity ease-linear duration-500' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png" alt="photo1" />




				</div>
			</div>

			<div className='w-[350px] flex flex-col gap-5'>

				<div className=' bg-white border px-[40px] pt-8 pb-6'>
					<a href="/login" className='flex justify-center mb-8'>
						<LogoInstagram className="text-5xl" />
					</a>

					<form className='grid gap-y-3'>

						<Input value={email} onChange={e => setEmail(e.target.value)} type="text" label="Email" />

						<Input value={password} onChange={e => setPassword(e.target.value)} type="password" label="Password" />

						<button type='submit' disabled={!enable} className='h-[30px] mt-1 font-medium disabled:opacity-30 transition-all bg-btn text-white rounded-sm'>Log In</button>

						<div className='flex items-center pt-2 my-2'>
							<div className='h-px bg-gray-300 flex-1'></div>
							<span className='px-4 text-[13px] text-gray-500 font-medium'>OR</span>
							<div className='h-px bg-gray-300 flex-1'></div>
						</div>


						<div className='text-facebook mt-4 justify-center font-semibold flex items-center gap-2'>
							<FaFacebookOfficial className="text-lg" color="#385185" />
							Log in with Facebook
						</div>

						<a href="/login" className='text-link flex justify-center items-center text-xs'>Forgot password?</a>

					</form>

				</div>

				<div className='bg-white border p-4 text-center text-sm'>
					Don't have an account? <a href='/login' className='font-semibold text-btn'>Sign up</a> 
				</div>
			</div>

			




		</div>
	)
}

export default Login