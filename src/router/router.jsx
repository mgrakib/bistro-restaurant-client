/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Order from "../Pages/Order/Order";
import OurFood from "../Pages/OurFood/OurFood";
import Login from "../Pages/Login/Login";

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
		],
	},
]);

export default router;