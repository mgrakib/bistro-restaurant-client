import React from 'react';

const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
		<div className=''>
			<div className='card glass'>
				<div className='bg-black'>
					<figure>
						<img
							src={image}
							alt='car!'
						/>
					</figure>
				</div>
				<div className='flex flex-col items-center p-5 space-y-4 bg-[#F3F3F3] justify-between'>
					<h2 className='card-title'>{name}</h2>
					<p>How to park your car at your garage?</p>
					<div className='card-actions '>
						<button className='btn btn-outline border-b-2 border-0 text-orange-500'>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;