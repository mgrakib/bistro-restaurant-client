/** @format */

import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import useAdmin from "../../hooks/useAdmin";
import { ScaleLoader } from "react-spinners";
const Dashboard = () => {
	// TODO: Have to load data from server
	// const isAdmin = true;

	const { isAdmin, isAdminLoading } = useAdmin();
	

	if (isAdminLoading) {
		return (
			<div className="w-full h-[100vh] flex items-center justify-center">
				<ScaleLoader color='#36d7b7' />
			</div>
		);
	}

	return (
		<div className='drawer drawer-mobile'>
			<input
				id='my-drawer-2'
				type='checkbox'
				className='drawer-toggle'
			/>
			<div className='drawer-content '>
				<label
					htmlFor='my-drawer-2'
					className='btn btn-primary drawer-button lg:hidden'
				>
					Open drawer
				</label>

				<div className=' w-full'>
					<Outlet />
				</div>
			</div>
			<div className='drawer-side  md:bg-[#D1A054]'>
				<label
					htmlFor='my-drawer-2'
					className='drawer-overlay'
				></label>

				<ul className='menu p-4 w-80  text-base-content'>
					<div>
						<h2 className='text-2xl font-bold'>BISTRO BOSS</h2>
						<span className='font-bold tracking-[7px]'>
							Restaurant
						</span>
					</div>
					{isAdmin ? (
						<>
							<li>
								<NavLink
									to={"/"}
									className={({ isActive }) =>
										isActive ? "active" : "default"
									}
								>
									<AiTwotoneHome /> Admin Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/dashboard/add-item"}
									className={({ isActive }) =>
										isActive ? "active" : "default"
									}
								>
									<AiTwotoneHome /> Add Items
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/dashboard/manage-items"}
									className={({ isActive }) =>
										isActive ? "active" : "default"
									}
								>
									<AiTwotoneHome /> Manage Itesm
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/dashboard/my-cart"}
									className={({ isActive }) =>
										isActive ? "active" : "default"
									}
								>
									<AiTwotoneHome /> Manage Booking
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/dashboard/all-users"}
									className={({ isActive }) =>
										isActive ? "active" : "default"
									}
								>
									<AiTwotoneHome /> All Users
								</NavLink>
							</li>
						</>
					) : (
						<>
							<li>
								<NavLink
									to={"/"}
									className={({ isActive }) =>
										isActive ? "active" : "default"
									}
								>
									<AiTwotoneHome /> User Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/dashboard/payment"}
									className={({ isActive }) =>
										isActive ? "active" : "default"
									}
								>
									<AiTwotoneHome /> reservation
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/"}
									className={({ isActive }) =>
										isActive ? "active" : "default"
									}
								>
									<AiTwotoneHome /> payment history
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/dashboard/my-cart"}
									className={({ isActive }) =>
										isActive ? "active" : "default"
									}
								>
									<AiTwotoneHome /> my cart
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/"}
									className={({ isActive }) =>
										isActive ? "active" : "default"
									}
								>
									<AiTwotoneHome /> add review
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/"}
									className={({ isActive }) =>
										isActive ? "active" : "default"
									}
								>
									<AiTwotoneHome /> my booking
								</NavLink>
							</li>
						</>
					)}

					<div className='divider'></div>

					<li>
						<NavLink
							to={"/"}
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
						>
							<AiTwotoneHome /> Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/"}
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
						>
							<AiTwotoneHome /> Menu
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/"}
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
						>
							<AiTwotoneHome /> Shop
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/"}
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
						>
							<AiTwotoneHome /> Contact
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
