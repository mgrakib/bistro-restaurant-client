import React from 'react';
import "./DisplayManu.css";

const DisplayManu = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
		<div className='flex items-center gap-2'>
			<img
				src={image}
				alt=''
				className='item-img'
			/>
			<div>
				<h4
					className={`after:content-['---'] `}
				>
					{name}
				</h4>
				<p>{recipe}</p>
			</div>
			<p className='text-[#BB8506]'>${price}</p>
		</div>
	);
};

export default DisplayManu;