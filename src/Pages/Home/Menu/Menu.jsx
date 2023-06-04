import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import DisplayManu from './DisplayManu';
import useMenu from '../../../hooks/useMenu';

const Menu = () => {
	const {menu} = useMenu();
	
    return (
		<section className='py-[50px] px-[300px]'>
			<SectionTitle
				title={"FROM OUR MENU"}
				subTitle={"Check it out"}
			/>

			<div className='mt-8 grid md:grid-cols-2 gap-6'>
				{menu.map(item => (
					<DisplayManu
						key={item._id}
						item={item}
					/>
				))}
			</div>

			<div className='text-center py-3'>
				<button className='btn btn-outline border-b-2 border-0'>View Full Menu</button>
			</div>
		</section>
	);
};

export default Menu;