/** @format */

import React from "react";
import "./Featured.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg'
const Featured = () => {
	return (
		<div className='featured-bg px-[30px] py-[100px] relative'>
			<div className='w-full h-full absolute bg-[#000000bc] left-0 top-0'></div>

			<div className='z-40 relative '>
				<SectionTitle
					subTitle={"Check it out"}
					title={"FROM OUR MENU"}
				/>

				<div className='grid grid-cols-2 gap-5 my-5 items-center'>
					<img
						src={featured}
						alt=''
					/>
					<div className='text-white space-y-3'>
						<h3 className='text-2xl'>March 20, 2023</h3>
						<h3 className='text-2xl'>WHERE CAN I GET SOME?</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Vitae harum rem dicta enim molestias. Sit
							consequatur totam exercitationem cumque quia quis
							culpa? Quo perferendis officia inventore, qui error
							libero veritatis esse ad optio voluptatem debitis
							ullam, dolorem similique tempore dolorum obcaecati?
							Autem illo velit itaque earum cum ratione voluptate
							praesentium.
						</p>
						<button className='btn btn-outline border-b-2 border-0 text-white'>
							Read More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
