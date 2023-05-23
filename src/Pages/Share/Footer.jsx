import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
		<>
			<footer className='footer gap-0 bg-neutral text-neutral-content'>
				<div className='bg-[#1F2937] w-full p-10 flex items-center justify-end'>
					<div className='mr-20 text-center'>
						<h4 className='text-2xl mb-4 '>CONTACT US</h4>
						<div className='space-y-1'>
							<p>123 ABS Street, Uni 21, Bangladesh</p>
							<p>+88 123456789</p>
							<p>Mon - Fri: 08:00 - 22:00</p>
							<p>Sat - Sun: 10:00 - 23:00</p>
						</div>
					</div>
				</div>
				<div className='bg-[#111827] w-full h-full p-10 flex items-center '>
					<div className='ml-20 text-center'>
						<h4 className='text-2xl mb-4 '>Follow US</h4>
						<div className='space-y-1'>
							<p>Join us on social media</p>
							<div className='text-white flex items-center text-2xl gap-2 justify-center'>
								<FaFacebookF />
								<FaInstagram />
								<FaTwitter />
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div className='text-center p-4 bg-[#151515] text-white'>
				<p>
					Copyright © 2023 - All right reserved by ACME Industries Ltd
				</p>
			</div>
		</>
	);
};

export default Footer;