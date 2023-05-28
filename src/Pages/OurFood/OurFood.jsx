import Cover from "../../components/Cover/Cover";
import ourFoodImg from '../../assets/menu/banner3.jpg'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
import { Helmet } from "react-helmet-async";

const OurFood = () => {
    const [tabIndex, setTabIndex] = useState(0);
	const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === "drinks");
	const pizza = menu.filter(item => item.category === "pizza");
	const dessert = menu.filter(item => item.category === "dessert");
	const soup = menu.filter(item => item.category === "soup");
	const salad = menu.filter(item => item.category === "salad");
	
	return (
		<div>
			<Helmet>
				<title>Food Order | Bristo Resturent</title>
			</Helmet>
			<Cover
				title='OUR SHOP'
				image={ourFoodImg}
			/>

			<div className='text-center py-10 px-[200px]'>
				<Tabs
					selectedIndex={tabIndex}
					onSelect={index => setTabIndex(index)}
				>
					<TabList>
						<Tab>Salad</Tab>
						<Tab>Pizza</Tab>
						<Tab>Soups</Tab>
						<Tab>Desserts</Tab>
						<Tab>Drinks</Tab>
					</TabList>
					<TabPanel>
						<div className='grid md:grid-cols-3 gap-10'>
							{salad.map(item => (
								<FoodCard
									key={item._id}
									item={item}
								/>
							))}
						</div>

					
					</TabPanel>
					<TabPanel>
						<div className='grid md:grid-cols-3 gap-10'>
							{pizza.map(item => (
								<FoodCard
									key={item._id}
									item={item}
								/>
							))}
						</div>
					</TabPanel>
					<TabPanel>
						<div className='grid md:grid-cols-3 gap-10'>
							{soup.map(item => (
								<FoodCard
									key={item._id}
									item={item}
								/>
							))}
						</div>
					</TabPanel>
					<TabPanel>
						<div className='grid md:grid-cols-3 gap-10'>
							{dessert.map(item => (
								<FoodCard
									key={item._id}
									item={item}
								/>
							))}
						</div>
					</TabPanel>
					<TabPanel>
						<div className='grid md:grid-cols-3 gap-10'>
							{drinks.map(item => (
								<FoodCard
									key={item._id}
									item={item}
								/>
							))}
						</div>
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default OurFood;