/** @format */
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

import Lottie from "lottie-react";
import loading from "../../../public/loading.json";
AOS.init();
const Modal = ({ isLoading }) => {


    console.log(isLoading);
	return (
		<div
			
			className={`fixed flex items-center justify-center ${
				isLoading ? "visible" : "invisible"
			}`}
		>
			<div className='p-6 bg-white w-[500px] h-[300px] flex justify-center rounded-xl'>
				<div className='w-[70px]'>
					<Lottie animationData={loading} />
				</div>
			</div>
		</div>
	);
};

export default Modal;
