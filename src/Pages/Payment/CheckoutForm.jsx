/** @format */

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = ({ price }) => {
	const { user } = useAuth();

	const stripe = useStripe();
	const elements = useElements();
	const [cardError, setCardError] = useState("");
	const [clientSecret, setClientSecret] = useState("");

	useEffect(() => {
		
		fetch("http://localhost:5000/create-payment-intent", {
			method: "POST",
			headers: { "Content-Type": "application/json", authorization:`Bearer ${localStorage.getItem('access-token')}` },
			body: JSON.stringify({ price }),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data.clientSecret);
				setClientSecret(data.clientSecret);
			});
	}, []);

	const handleSubmit = async event => {
		// Block native form submission.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return;
		}

		const card = elements.getElement(CardElement);

		if (card == null) {
			return;
		}

		// Use your card Element with other Stripe.js APIs
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (error) {
			console.log("[error]", error);
			setCardError(error.message);
		} else {
			console.log("[PaymentMethod]", paymentMethod);
		}

		const { paymentIntent, error: conformError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: user?.displayName || "anonymous",
						email: user?.email || "unknown",
					},
				},
			});

		if (conformError) {
			console.log(conformError);
		}

		console.log(paymentIntent);
	};

	return (
		<>
			<h2 className='text-2xl font-semibold'>
				Total Price: ${price.toFixed(2)}
			</h2>
			<form
				className='w-2/3 px-[100px]'
				onSubmit={handleSubmit}
			>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: "16px",
								color: "#424770",
								"::placeholder": {
									color: "#aab7c4",
								},
							},
							invalid: {
								color: "#9e2146",
							},
						},
					}}
				/>

				<button
					type='submit'
					className='btn btn-sm btn-primary mt-10'
					disabled={!stripe || !clientSecret}
				>
					Pay
				</button>
			</form>

			{cardError ? <p>{cardError}</p> : ""}
		</>
	);
};

export default CheckoutForm;
