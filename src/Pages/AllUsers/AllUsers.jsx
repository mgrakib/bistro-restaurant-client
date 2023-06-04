/** @format */

import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaRegTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";
import useAllUser from "../../hooks/useAllUser";

const AllUsers = () => {
	const { users, isLoading, refetch } = useAllUser();

	
	const handelAddAdmin = user => {
		fetch(`http://localhost:5000/users/admin/${user._id}`, {
			method: "PATCH",
		})
			.then(res => res.json())
			.then(data => {
				if (data.modifiedCount > 0) {
					refetch();
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: `${user.name} is made Admin`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	return (
		<div>
			<div className='px-8'>
				<SectionTitle
					subTitle={"My Cart"}
					title={"WANNA ADD MORE?"}
				/>

				<div className='flex items-center justify-between py-4'>
					<h2 className='text-2xl font-semibold'>
						Total orders: {users.length}
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
								<th className='bg-[#D1A054] '>PRICE</th>
								<th className='bg-[#D1A054] '>ACTION</th>
							</tr>
						</thead>
						<tbody>
							{!isLoading
								? users.map((user, index) => (
										<tr
											key={user._id}
											className=''
										>
											<td>{index + 1}</td>
											<td>{user?.name}</td>
											<td>{user?.email}</td>
											<td className=''>
												{user?.role ? (
													"Admin"
												) : (
													<button
														onClick={() =>
															handelAddAdmin(user)
														}
														className='bg-[rgb(205,150,29)] text-white p-3 rounded-md hover:shadow-[3px_3px_5px_rgba(205,150,29,0.8)] duration-200'
													>
														<FaUsers size={22} />
													</button>
												)}
											</td>
											<th>
												<button className='bg-[rgb(185,28,28)] text-white p-3 rounded-md hover:shadow-[3px_3px_5px_rgba(185,28,28,0.8)] duration-200'>
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
			</div>
		</div>
	);
};

export default AllUsers;
