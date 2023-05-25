import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Pages/Share/NavBar';
import Footer from '../Pages/Share/Footer';

const Main = () => {
    const location = useLocation();
    const showNavBarFooter =
		location.pathname.includes("login") ||
		location.pathname.includes("register");
    return (
		<>
			{showNavBarFooter || <NavBar />}
			<Outlet />
			{showNavBarFooter || <Footer />}
		</>
	);
};

export default Main;