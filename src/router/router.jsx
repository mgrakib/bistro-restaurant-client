/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Order from "../Pages/Order/Order";
import OurFood from "../Pages/OurFood/OurFood";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MyCart from "../Pages/MyCart/MyCart";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AddAnItem from "../Pages/AddAnItem/AddAnItem";
import ManageItems from "../Pages/ManageItems/ManageItems";
import Payment from "../Pages/Payment/Payment";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/order",
				element: <Order />,
			},
			{
				path: "/our-food",
				element: <OurFood />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
		],
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
		children: [
			{
				path: "/dashboard/my-cart",
				element: <MyCart />,
			},
			{
				path: "/dashboard/all-users",
				element: <AllUsers />,
			},
			{
				path: "/dashboard/add-item",
				element: <AddAnItem />,
			},
			{
				path: "/dashboard/manage-items",
				element: <ManageItems />,
			},
			{
				path: "/dashboard/payment",
				element: <Payment />,
			},
		],
	},
]);

export default router;