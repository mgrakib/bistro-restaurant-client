import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Share/NavBar';
import Footer from '../Pages/Share/Footer';

const Main = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;