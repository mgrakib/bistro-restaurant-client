/** @format */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaRegTrashAlt } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import Loader from "../../components/Loader/Loader";
import Swal from "sweetalert2";
import Modal from '../Register/Modal';
import { useState } from "react";
import useManageItem from "../../hooks/useManageItem";

const ManageItems = () => {
	const { menuItems, refetch, isLoading } = useManageItem();


    const [modalLoding, setModalLoding] = useState(false);

    const handelDelete = (id) => {
        console.log('handel de', id)
    
        Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then(async result => {
			if (result.isConfirmed) {
				const result = await axios.delete(
					`http://localhost:5000/menu/${id}`, {
						headers: {authorization : `Bearer ${localStorage.getItem('access-token')}`}
					}
				);
				console.log(result.data);
                if (result.data.deletedCount > 0) {
                       
                    refetch();
					Swal.fire(
						"Deleted!",
						"Your file has been deleted.",
						"success"
					);

					
				}
			}
		});
       
	};

	return (
		<div className='px-8'>
			<SectionTitle
				subTitle={"Hurry Up!"}
				title={"MANAGE ALL ITEMS"}
			/>

			<div className='flex items-center justify-between py-4'>
				<h2 className='text-2xl font-semibold'>
					Total orders: {menuItems.length}
				</h2>
			</div>

			<div className='overflow-x-auto w-full flex flex-col '>
				<table className='table w-full relative'>
					{/* head */}
					<thead>
						<tr>
							<th className='bg-[#D1A054] '>#</th>
							<th className='bg-[#D1A054] '>ITEM IMAGE</th>
							<th className='bg-[#D1A054] '>ITEM NAME</th>
							<th className='bg-[rgb(209,160,84)] text-center'>
								PRICE
							</th>
							<th className='bg-[#D1A054] '>ACTION</th>
							<th className='bg-[#D1A054] '>ACTION</th>
						</tr>
					</thead>
					<tbody>
						{!isLoading
							? menuItems.map((ietm, index) => (
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
											{ietm.price} {ietm._id}
										</td>
										<th>
											<button className='bg-[rgb(209,160,84)] text-white p-3 rounded-md hover:shadow-[3px_3px_5px_rgba(209,160,84,0.8)] duration-200'>
												<TbEdit size={22} />
											</button>
										</th>
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
							  ))
							: ""}
					</tbody>
				</table>
				{isLoading ? (
					<div className='mt-[100px] text-center'>
						<Loader></Loader>
					</div>
				) : (
					""
				)}
			</div>

			<Modal isLoading={modalLoding} />
		</div>
	);
};

export default ManageItems;
