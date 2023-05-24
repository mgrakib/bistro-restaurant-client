import React from 'react';
import DisplayManu from '../../Home/Menu/DisplayManu';

const ItemsShow = ({items, }) => {
    return (
		<div>
			<div className='mt-8 grid md:grid-cols-2 gap-6'>
				{items.map(item => (
					<DisplayManu
						key={item._id}
						item={item}
					/>
				))}
			</div>
			<div className='text-center py-3'>
				<button className='btn btn-outline border-b-2 border-0'>
					ORDER YOUR FAVOURITE FOOD
				</button>
			</div>
		</div>
	);
};

export default ItemsShow;