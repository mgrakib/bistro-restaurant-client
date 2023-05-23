import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import chefRecommend from '../../../assets/home/slide2.jpg'
const ChefRecommend = () => {
 
    return (
		<section className='px-[300px] py-[50px]'>
			<SectionTitle
				subTitle={"Should Try"}
				title={"CHEF RECOMMENDS"}
			/>

			<div className='grid md:grid-cols-3 gap-10'>
				<div className='card card-compact bg-base-100 shadow-xl'>
					<figure className='h-[200px]'>
						<img
							src={chefRecommend}
							alt='Shoes'
						/>
					</figure>
					<div className='card-body text-center'>
						<h2 className='text-2xl'>Caeser Salad</h2>
						<p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
						<div className='card-actions justify-center'>
							<button className='btn btn-outline border-b-2 border-0 text-[#BB8506]'>Buy Now</button>
						</div>
					</div>
				</div>
				<div className='card card-compact bg-base-100 shadow-xl'>
					<figure className='h-[200px]'>
						<img
							src={chefRecommend}
							alt='Shoes'
						/>
					</figure>
					<div className='card-body text-center'>
						<h2 className='text-2xl'>Caeser Salad</h2>
						<p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
						<div className='card-actions justify-center'>
							<button className='btn btn-outline border-b-2 border-0 text-[#BB8506]'>Buy Now</button>
						</div>
					</div>
				</div>

				<div className='card card-compact bg-base-100 shadow-xl'>
					<figure className='h-[200px]'>
						<img
							src={chefRecommend}
							alt='Shoes'
						/>
					</figure>
					<div className='card-body text-center'>
						<h2 className='text-2xl'>Caeser Salad</h2>
						<p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
						<div className='card-actions justify-center'>
							<button className='btn btn-outline border-b-2 border-0 text-[#BB8506]'>Buy Now</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ChefRecommend;