/** @format */
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import login from "../../../public/106680-login-and-sign-up.json";
import {
	loadCaptchaEnginge,
	LoadCanvasTemplate,
	LoadCanvasTemplateNoReload,
	validateCaptcha,
} from "react-simple-captcha";
import { useEffect } from "react";
import loingImg from '../../assets/menu/menu-bg.png'
import { Link } from "react-router-dom";
import SocialLogin from "../Share/SocialLogin/SocialLogin";
const Login = () => {
    const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = data => console.log(data);

    useEffect(() => {
        loadCaptchaEnginge(6); 
    },[])
	return (
		<div
			style={{ backgroundImage: `url(${loingImg})` }}
			className='w-[100%] h-[100vh] flex items-center justify-center px-20'
		>
			<div className='shadow-2xl p-10 grid  md:grid-cols-2 items-center gap-10'>
				<div>
					<Lottie animationData={login} />
				</div>
				<div>
					<h2 className='text-center text-2xl font-bold'>Login</h2>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className='space-y-3'
					>
						{/* Email */}
						<div>
							<label htmlFor=''>Email</label>
							<div>
								<input
									{...register("email")}
									className='w-full p-3 rounded-md outline-none border border-gray-600'
								/>
							</div>
						</div>
						{/* Password */}
						<div>
							<label htmlFor=''>Password</label>
							<div>
								<input
									{...register("password")}
									className='w-full p-3 rounded-md outline-none border border-gray-600'
									type='password'
								/>
							</div>
						</div>
						<div className=''>
							<LoadCanvasTemplate />
						</div>
						<input
							{...register("password")}
							className='w-full p-3 rounded-md outline-none border border-gray-600'
							type='password'
							placeholder='type here'
						/>

						<input
							className='w-full p-3 rounded-md outline-none border border-gray-600 bg-[#DBB984]'
							type='submit'
							value='Login'
						/>
					</form>

					<p className='text-center text-[#D5AA68]'>
						<small>
							New Here? <Link className="font-bold">Create a New Account</Link>
						</small>
                    </p>
                    <SocialLogin />
				</div>
			</div>
		</div>
	);
};

export default Login;
