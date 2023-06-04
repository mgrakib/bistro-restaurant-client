/** @format */

import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../hooks/useCart";


// TODO: prvide publishable key 
const stripePromise = loadStripe(import.meta.env.VITE_Publishable_Key);
const Payment = () => {
	const { cart } = useCart();
	const total = cart.reduce((sum, item) => sum + item.price, 0);
	const price = parseFloat(total.toFixed(2));
	return (
		<div>
			<SectionTitle
				title={"Payment"}
				subTitle={"please payment"}
			/>

			<div className='px-[100px] py-10'>
				<Elements stripe={stripePromise}>
					<CheckoutForm price={price} />
				</Elements>
			</div>
		</div>
	);
};

export default Payment;
