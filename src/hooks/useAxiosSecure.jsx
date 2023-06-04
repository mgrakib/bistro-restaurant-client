// /** @format */

// import axios from "axios";
// import { useContext, useEffect } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import { useNavigate } from "react-router-dom";

// const useAxiosSecure = () => {
// 	const { logOut } = useContext(AuthContext);
// 	const navigate = useNavigate();

// 	const axiosSecure = axios.create({
// 		baseURL: "http://localhost:5000",
// 	});

// 	useEffect(() => {
// 		axiosSecure.interceptors.request.use(config => {
// 			const token = localStorage.getItem("access-token");
// 			if (token) {
// 				config.headers.Authorization = `Bearer ${token}`;
// 			}
// 			return config;
// 		});

	
// 		axiosSecure.interceptors.response.use(
// 			response => {
// 				return response;
// 			},
// 			async error => {
// 				if (
// 					error &&
// 					(error.response.status === 401 ||
// 						error.response.status === 403)
// 				) {
// 					await logOut();
// 					navigate("/login");
// 				}

// 				return Promise.reject(error);
// 			}
// 		);
// 	}, [axiosSecure, logOut, navigate]);

// 	return { axiosSecure };
// };

// export default useAxiosSecure;



import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useAxiosSecure = () => {
	const { logOut } = useAuth();
	const navigate = useNavigate();

	const axiosSecure = axios.create({
		baseURL: "http://localhost:5000",
	});

	useEffect(() => {
		axiosSecure.interceptors.request.use(config => {
			const token = localStorage.getItem("access-token");
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		});

		axiosSecure.interceptors.response.use(
			response => response,
			async error => {
				if (
					error.response &&
					(error.response.status === 401 ||
						error.response.status === 403)
				) {
					await logOut();
					navigate("/login");
				}
				return Promise.reject(error);
			}
		);
	}, [logOut, navigate, axiosSecure]);

	return [axiosSecure];
};

export default useAxiosSecure;