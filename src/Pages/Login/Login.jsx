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
import loingImg from "../../assets/menu/menu-bg.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Share/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";
import Modal from "../Register/Modal";
import Swal from "sweetalert2";
const Login = () => {
	const { userLogin } = useContext(AuthContext);
	const [isDisable, setIsDisable] = useState(true);
	const [error, setError] = useState(true);
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from || "/";


	console.log('from ', from, ' locai ', location);
	const handelCapcha = e => {

			const user_captcha_value = e.target.value;

			if (validateCaptcha(user_captcha_value) == true) {
				setIsDisable(false)
			} else {
				alert("Captcha Does Not Match");
				setIsDisable(true);
			}
	};


	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = data => {
		setIsLoading(true);
		setError('')
		const { email, password } = data;
		userLogin(email, password)
			.then(() => {
				setIsLoading(false);
				Swal.fire({
					icon: "success",
					title: "Yeap...",
					text: "Successfully Login!",
					footer: '<a href="">Why do I have this issue?</a>',
				});
				navigate(from, { replace: true });
			})
			.catch(err => {
				setError(err.message)
				setIsLoading(false);
			});
	};

	useEffect(() => {
		loadCaptchaEnginge(6);
	}, []);
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
									{...register("email", { required: true })}
									className='w-full p-3 rounded-md outline-none border border-gray-600'
								/>
								{errors.email && (
									<span className='text-red-500'>
										Name is required
									</span>
								)}
							</div>
						</div>
						{/* Password */}
						<div>
							<label htmlFor=''>Password</label>
							<div>
								<input
									{...register("password", {
										required: true,
										minLength: 6,
										maxLength: 20,
										pattern:
											/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/i,
									})}
									className='w-full p-3 rounded-md outline-none border border-gray-600'
									type='password'
								/>
								{errors.password && (
									<span className='text-red-500'>
										Password is required
									</span>
								)}
								{errors.password?.type === "maxLength" && (
									<span className='text-red-500'>
										Password will be max 20
									</span>
								)}
								{errors.password?.type === "pattern" && (
									<span className='text-red-500'>
										One UpperLetter One small Letter Specal
										leatter number
									</span>
								)}
								{errors.password?.type === "minLength" && (
									<span className='text-red-500'>
										Password must be more 6
									</span>
								)}
							</div>
						</div>
						<div className=''>
							<LoadCanvasTemplate />
						</div>
						<input
							{...register("campta")}
							className='w-full p-3 rounded-md outline-none border border-gray-600'
							type='text'
							placeholder='type here'
							onBlur={handelCapcha}
						/>

						<p>
							<small className='text-red-500'>{error}</small>
						</p>
						<input
							className='w-full p-3 rounded-md outline-none border border-gray-600 bg-[#DBB984] cursor-pointer btn'
							type='submit'
							value='Login'
							disabled={false}
						/>
					</form>

					<p className='text-center text-[#D5AA68]'>
						<small>
							New Here?{" "}
							<Link
								to={"/register"}
								className='font-bold'
							>
								Create a New Account
							</Link>
						</small>
					</p>
					<SocialLogin />
				</div>
			</div>
			<Modal isLoading={isLoading}/>
		</div>
	);
};

export default Login;
