import React, { useRef } from 'react'
import { LogoInstagram, FaFacebookOfficial } from "../../icons"
import Input from "../../components/Input"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { register } from "../../firebase"
import { Formik, Form } from "formik"
import { RegisterSchema } from "../../validation/register-schema"
import Button from '../../components/Button'
import Separator from '../../components/Separator'


function Register() {

	const navigate = useNavigate()
	const location = useLocation()

	const ref = useRef()


	const handleSubmit = async (values, actions) => {

		const response = await register(values)
		if (response) {
			navigate(location.state?.return_url || "/", {
				replace: true
			})
		}

	}

	return (

		<div className='w-[350px] flex flex-col gap-5'>

			<div className=' bg-white border px-[40px] pt-8 pb-6'>
				<a href="/login" className='flex justify-center mb-4'>
					<LogoInstagram className="text-5xl" />
				</a>

				<p className='text-[17px] text-center font-semibold text-[#8e8e8e] mb-6'>
					Sign up to see photos and videos from your friends
				</p>

				<Button>
					<FaFacebookOfficial className="text-base" color="white" />
					Log in with Facebook
				</Button>

				<Separator />

				<Formik
					validationSchema={RegisterSchema}
					initialValues={{
						email: "",
						full_name: "",
						username: "",
						password: ""
					}}
					onSubmit={handleSubmit}
				>
					{({ isSubmitting, isValid, dirty, values }) => (
						<Form className='grid gap-y-3'>

							<Input name="email" label="Mobile Number or Email" />

							<Input name="full_name" label="Name and surname" />

							<Input name="username" label="User Name" />

							<Input type="password" name="password" label="Password" />

							<p className='text-xs text-[#8e8e8e] py-2 text-center'>
								People using our service may have uploaded your contact information to Instagram. 
								 <a href="#" className='font-semibold'> Learn More</a> 
								<br /><br />
								By signing up, you agree to our <a href="#" className='font-semibold'>Terms</a>  , <a href="#" className='font-semibold'>Privacy Policy</a>  and <a href="#" className='font-semibold'>Cookies Policy</a>  .
							</p>

							<Button type='submit' disabled={!isValid || !dirty || isSubmitting}>Sign Up</Button>

						</Form>
					)}

				</Formik>

			</div>

			<div className='bg-white border p-4 text-center text-sm'>
				Have an account? <Link to='/auth/login' className='font-semibold text-btn'>Log In</Link>
			</div>
		</div>


	)
}

export default Register