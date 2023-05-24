import { Helmet } from "react-helmet-async";
import ContactNumber from "../../../components/ContactNumber/ContactNumber";
import BristoBoss from "../BristoBoss/BristoBoss";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import Featured from "../Featured/Featured";
import Menu from "../Menu/Menu";
import OnlineOrder from "../OnlineOrder/OnlineOrder";
import Reviews from "../Reviews/Reviews";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
		<div>
			<Helmet>
				<title>Home | Bristo Resturent</title>
			</Helmet>
			<Slider />
			<OnlineOrder />
			<BristoBoss />
			<Menu />
			<ContactNumber />
			<ChefRecommend />
			<Featured />
			<Reviews />
		</div>
	);
};

export default Home;