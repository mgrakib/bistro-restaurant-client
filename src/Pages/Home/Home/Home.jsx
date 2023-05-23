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