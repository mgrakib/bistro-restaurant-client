import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AiTwotoneHome } from "react-icons/ai";
const Dashboard = () => {
    return (
		<div className='drawer drawer-mobile'>
			<input
				id='my-drawer-2'
				type='checkbox'
				className='drawer-toggle'
			/>
			<div className='drawer-content flex flex-col items-center justify-center'>
				<div className=' w-full'>
					<Outlet />
				</div>
				<label
					htmlFor='my-drawer-2'
					className='btn btn-primary drawer-button lg:hidden'
				>
					Open drawer
				</label>
			</div>
			<div className='drawer-side bg-gray-500 md:bg-[#D1A054]'>
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
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
						>
							<AiTwotoneHome /> User Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
						>
							<AiTwotoneHome /> reservation
						</NavLink>
					</li>
					<li>
						<NavLink
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
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
						>
							<AiTwotoneHome /> add review
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
						>
							<AiTwotoneHome /> my booking
						</NavLink>
					</li>

					<div className='divider'></div>

					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
						>
							<AiTwotoneHome /> Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
						>
							<AiTwotoneHome /> Menu
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active" : "default"
							}
						>
							<AiTwotoneHome /> Shop
						</NavLink>
					</li>
					<li>
						<NavLink
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