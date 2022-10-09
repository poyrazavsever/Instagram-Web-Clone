import React, { useRef, useEffect } from 'react'
import { LogoInstagram, FaFacebookOfficial } from "../../icons"
import Input from "../../components/Input"
import { Navigate, useLocation, Link } from "react-router-dom"
import { login } from "../../firebase"
import { Formik, Form } from "formik"
import { LoginSchema } from "../../validation/login-schema"
import Button from '../../components/Button'
import Separator from '../../components/Separator'
import { useSelector } from 'react-redux'
import {Helmet} from "react-helmet"


function Login() {

	const location = useLocation()
	const user = useSelector(state => state.auth.user)

	const ref = useRef()

	useEffect(() => {
		let images = ref.current.querySelectorAll('img'),
			total = images.length,
			current = 0
		const imageSlider = () => {
			images[(current > 0 ? current : total) - 1].classList.add('opacity-0')
			images[current].classList.remove('opacity-0')
			current = current === total - 1 ? 0 : current + 1;
		}
		imageSlider()
		let interval = setInterval(imageSlider, 3000)
		return () => {
			clearInterval(interval)
		}
	}, [ref])

	const handleSubmit = async (values, actions) => {
		await login(values.username, values.password)

	}

	const images = [
		"https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png",
		"https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png",
		"https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png",
		"https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
	]


	if (user) {
		return <Navigate to={location.state?.return_url || "/"} replace={true} />
	}


	return (
		<div className='h-full w-full flex flex-wrap overflow-auto gap-x-8 items-center justify-center'>

			<Helmet>
				<title>Login ✦ Instagram</title>
			</Helmet>

			<div className='w-[380px] hidden md:block bg-logo-pattern relative h-[581px] bg-[lenght:468.32px_634.15px] bg-[top_left_-46px]'>
				<div className="w-[250px] h-[538px] absolute top-[27px] right-[18px]" ref={ref}>
					{images.map((image, key) => (
						<img key={key} className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
							src={image}
							alt="" />
					))}
				</div>
			</div>

			<div className='w-[350px] flex flex-col gap-5'>

				<div className=' bg-white border px-[40px] pt-8 pb-6'>
					<a href="/login" className='flex justify-center mb-8'>
						<LogoInstagram className="text-5xl" />
					</a>

					<Formik
						validationSchema={LoginSchema}
						initialValues={{
							username: "",
							password: ""
						}}
						onSubmit={handleSubmit}
					>
						{({ isSubmitting, isValid, dirty, values }) => (
							<Form className='grid gap-y-3'>

								<Input name="username" label="Username, email or phone" />

								<Input type="password" name="password" label="Password" />

								<Button type='submit' disabled={!isValid || !dirty || isSubmitting}>Log In</Button>

								<Separator />


								<div className='text-facebook mt-4 justify-center font-semibold flex items-center gap-2'>
									<FaFacebookOfficial className="text-lg" color="#385185" />
									Log in with Facebook
								</div>

								<a href="/login" className='text-link flex justify-center items-center text-xs'>Forgot password?</a>

							</Form>
						)}

					</Formik>

				</div>

				<div className='bg-white border p-4 text-center text-sm'>
					Don't have an account? <Link to='/auth/register' className='font-semibold text-btn'>Sign up</Link>
				</div>
			</div>






		</div>
	)
}

export default Login