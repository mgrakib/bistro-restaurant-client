/** @format */
import { set, useForm } from "react-hook-form";
import Lottie from "lottie-react";
import login from "../../../public/106680-login-and-sign-up.json";

import { useEffect } from "react";
import loingImg from "../../assets/menu/menu-bg.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Share/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";
import Swal from "sweetalert2";
import Modal from "../Register/Modal";

const Register = () => {
	const { createUser, updateUserNamePhoto } = useContext(AuthContext);
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from || "/";
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	

	const onSubmit = data => {
		setIsLoading(true);
		const { name, email, photo, password } = data;

		createUser(email, password)
			.then(res =>
				updateUserNamePhoto(name, photo)
					.then(res => {
						const saveUser = { name, email };

						
						fetch(`http://localhost:5000/users`, {
							method: "POST",
							headers: { "content-type": "application/json" },
							body: JSON.stringify(saveUser),
						})
							.then(res => res.json())
							.then(() => {
								setIsLoading(false);
								Swal.fire({
									icon: "success",
									title: "Yeap...",
									text: "Successfully Create account!",
									footer: '<a href="">Why do I have this issue?</a>',
								});
								navigate(from, { replace: true });
							});
					})
					.catch(err => {
						setIsLoading(false);
						setError(err.message);
					})
			)
			.catch(err => {
				setIsLoading(false);
				setError(err.message);
			});
	};

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
					<h2 className='text-center text-2xl font-bold'>Sing up</h2>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className='space-y-3'
					>
						{/* Name */}
						<div>
							<label htmlFor=''>Name</label>
							<div>
								<input
									{...register("name", { required: true })}
									className='w-full p-3 rounded-md outline-none border border-gray-600'
									type='text'
								/>
							</div>
							{errors.name && (
								<span className='text-red-500'>
									Name is required
								</span>
							)}
						</div>
						{/* Email */}
						<div>
							<label htmlFor=''>Email</label>
							<div>
								<input
									{...register("email")}
									className='w-full p-3 rounded-md outline-none border border-gray-600'
									type='email'
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
										Name is required
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

						{/* Photo */}
						<div>
							<label htmlFor=''>Photo Url</label>
							<div>
								<input
									{...register("photo")}
									className='w-full p-3 rounded-md outline-none border border-gray-600'
									type='text'
								/>
							</div>
						</div>

						<p>
							<small className='text-red-500'>{error}</small>
						</p>
						<input
							className='w-full p-3 rounded-md outline-none border border-gray-600 bg-[#DBB984] cursor-pointer'
							type='submit'
							value='Register'
						/>
					</form>

					<p className='text-center text-[#D5AA68]'>
						<small>
							Already registered?{" "}
							<Link
								to={"/login"}
								className='font-bold'
							>
								Go to log in
							</Link>
						</small>
					</p>
					<SocialLogin />
				</div>
			</div>
			<Modal isLoading={isLoading} />
		</div>
	);
};

export default Register;
