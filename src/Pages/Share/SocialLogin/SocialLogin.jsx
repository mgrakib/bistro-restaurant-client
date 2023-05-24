import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
		<div className='flex flex-col justify-center items-center py-2 gap-3'>
			<p>Or sing in with</p>
			<div className='flex items-center gap-3'>
				<div className='w-[42px] h-[42px] border border-gray-800 rounded-full cursor-pointer flex items-center justify-center'>
					<FaFacebookF />
				</div>
				<div className='w-[42px] h-[42px] border border-gray-800 rounded-full cursor-pointer flex items-center justify-center'>
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