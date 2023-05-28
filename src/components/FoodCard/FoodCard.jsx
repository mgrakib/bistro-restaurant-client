/** @format */

import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
	const [,refatch] = useCart();
	const navigate = useNavigate();
	const location = useLocation();
	const { user } = useContext(AuthContext);

	const { name, recipe, image, price, _id } = item;
	const handelAddToCart = item => {
		if (user && user.email) {
			const cartItem = {
				menuId: _id,
				name,
				image,
				price,
				email: user?.email,
			};

			fetch(`http://localhost:5000/carts`, {
				method: "POST",
				headers: {"Content-Type": 'application/json'},
				body: JSON.stringify(cartItem)
			}).then(res => res.json()).then(data => {
				if (data.acknowledged) {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Successful add!!",
						showConfirmButton: false,
						timer: 1500,
					});
				}
				refatch()
			})
		} else {
			navigate("/login", { state: { from: location } });
		}
	};
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
						<button
							onClick={() => handelAddToCart(item)}
							className='btn btn-outline border-b-2 border-0 text-orange-500'
						>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
