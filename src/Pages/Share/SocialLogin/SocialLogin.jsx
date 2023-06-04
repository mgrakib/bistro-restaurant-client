/** @format */

import React from "react";
import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from || "/";
	const { googleLogin } = useContext(AuthContext);

	const handelGoogleLogin = () => {
		googleLogin()
			.then(res => {
				const saveUser = {
					name: res.user.displayName,
					email: res.user.email,
				};
				fetch(`http://localhost:5000/users`, {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(saveUser),
				})
					.then(res => res.json())
					.then(() => {
						
						navigate(from, { replace: true });
					});
			})
			.catch(err => console.log(err.message));
	};
	return (
		<div className='flex flex-col justify-center items-center py-2 gap-3'>
			<p>Or sing in with</p>
			<div className='flex items-center gap-3'>
				<div className='w-[42px] h-[42px] border border-gray-800 rounded-full cursor-pointer flex items-center justify-center'>
					<FaFacebookF />
				</div>
				<div
					onClick={handelGoogleLogin}
					className='w-[42px] h-[42px] border border-gray-800 rounded-full cursor-pointer flex items-center justify-center'
				>
					<FaGoogle />
				</div>
				<div className='w-[42px] h-[42px] border border-gray-800 rounded-full cursor-pointer flex items-center justify-center'>
					<FaGithub />
				</div>
			</div>
		</div>
	);
};

export default SocialLogin;
