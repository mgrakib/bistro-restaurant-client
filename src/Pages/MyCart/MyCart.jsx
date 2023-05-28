/** @format */

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useCart from "../../hooks/useCart";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import Loader from "../../components/Loader/Loader";

const MyCart = () => {
	const { isLoading, cart, refetch } = useCart();
	
	const total = cart.reduce((acc, obj) => {
		return acc + obj.price;
	}, 0);

	const handelDelete = _id => {
		console.log(_id)
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then(result => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/carts/${_id}`, {
					method: "DELETE",
				})
					.then(res => res.json())
					.then(data => {
						refetch();
						if (data.deletedCount > 0) {
							Swal.fire(
								"Deleted!",
								"Your file has been deleted. ",
								"success"
							);
						}
					});
			}
		});
	};
	return (
		<div className='px-8'>
			<SectionTitle
				subTitle={"My Cart"}
				title={"WANNA ADD MORE?"}
			/>

			<div className='flex items-center justify-between py-4'>
				<h2 className='text-2xl font-semibold'>
					Total orders: {cart.length}
				</h2>
				<h2 className='text-2xl font-semibold'>
					Total Price: ${total.toFixed(2)}
				</h2>

				<button className='btn bg-[#D1A054] text-center'>Pay</button>
			</div>

			<div className='overflow-x-auto w-full flex flex-col '>
				<table className='table w-full relative'>
					{/* head */}
					<thead>
						<tr>
							<th className='bg-[#D1A054] '>#</th>
							<th className='bg-[#D1A054] '>ITEM IMAGE</th>
							<th className='bg-[#D1A054] '>ITEM NAME</th>
							<th className='bg-[#D1A054] text-center'>PRICE</th>
							<th className='bg-[#D1A054] '>ACTION</th>
						</tr>
					</thead>
						<tbody>
							{!isLoading ? cart.map((ietm, index) => (
								<tr
									key={ietm._id}
									className=''
								>
									<td>{index + 1}</td>
									<td>
										<div className='flex items-center space-x-3'>
											<div className='avatar'>
												<div className='mask mask-squircle w-12 h-12'>
													<img
														src={ietm.image}
														alt='Avatar Tailwind CSS Component'
													/>
												</div>
											</div>
										</div>
									</td>
									<td>{ietm.name}</td>
									<td className='text-end'>
										${ietm.price.toFixed(2)}
									</td>
									<th>
										<button
											onClick={() =>
												handelDelete(ietm._id)
											}
											className='bg-[rgb(185,28,28)] text-white p-3 rounded-md hover:shadow-[3px_3px_5px_rgba(185,28,28,0.8)] duration-200'
										>
											<FaRegTrashAlt size={22} />
										</button>
									</th>
								</tr>
							)) : ""}
					</tbody>
				</table>
				{isLoading ? <div className="mt-[100px] text-center">
						<Loader></Loader></div>: ""}
			</div>
		</div>
	);
};

export default MyCart;
