import Cover from '../../components/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessirtsImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useMenu from '../../hooks/useMenu';
import DisplayManu from '../Home/Menu/DisplayManu';
import ItemsShow from './ItemsShow/ItemsShow';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered");
    const pizza = menu.filter(item => item.category === "pizza");
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");

    return (
		<div>
			<Helmet>
				<title>Food Menu | Bristo Resturent</title>
			</Helmet>
			<Cover
				title='our menu'
				image={menuImg}
			/>

			<div className='py-5 px-[300px]'>
				<SectionTitle
					subTitle="Don't miss"
					title="TODAY'S OFFER"
				/>

				<ItemsShow
					items={offered}
					btn=''
				/>
			</div>

			<Cover
				title='desserts'
				image={dessirtsImg}
			/>
			<div className='py-5 px-[300px]'>
				<ItemsShow
					items={dessert}
					btn=''
				/>
			</div>
			<Cover
				title='pizza'
				image={pizzaImg}
			/>
			<div className='py-5 px-[300px]'>
				<ItemsShow
					items={pizza}
					btn=''
				/>
			</div>
			<Cover
				title='salad'
				image={saladImg}
			/>
			<div className='py-5 px-[300px]'>
				<ItemsShow
					items={salad}
					btn=''
				/>
			</div>
			<Cover
				title='soup'
				image={soupImg}
			/>
			<div className='py-5 px-[300px]'>
				<ItemsShow
					items={soup}
					btn=''
				/>
			</div>
		</div>
	);
};

export default Order;