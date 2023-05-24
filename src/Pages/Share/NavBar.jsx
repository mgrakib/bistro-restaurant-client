/** @format */

import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
    const navItems = (
		<>
			<li>
				<Link to='/'>HOME</Link>
			</li>
			<li>CONTACT US</li>
			<li>DASHBOARD</li>
			<li>
				<Link to={"/order"}>OUR MENU</Link>
			</li>
			<li>
				<Link to='/our-food'>OUR SHOP</Link>
			</li>
			<li>
				<Link to='/login'>LOGIN</Link>
			</li>
			<div className='h-[42px] w-[42px] rounded-full border border-gray-700 '></div>
			<div className='flex items-center gap-2'>
				<li>SING OUT</li>
				<span className=' w-[43px] h-[43px] flex items-center justify-center rounded-full bg-white border border-gray-600'>
					<FaUserAlt />
				</span>
			</div>
		</>
	);
	return (
		<div className='px-[55px] py-[32px] flex items-center justify-between bg-[#00000095] text-white fixed top-0 left-0 z-40 w-full'>
			<div className='px-2 text-center cursor-pointer'>
				<h4 className='text-xl font-bold'>BISTRO BOSS</h4>
				<p className='tracking-[5px]'>Restaurant</p>
			</div>
			<div>
				<ul className='flex items-center gap-5'>{navItems}</ul>
			</div>
		</div>
	);
};

export default NavBar;
