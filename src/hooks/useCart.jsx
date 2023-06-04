/** @format */

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import axios from "axios";


const useCart = () => {
	const { user, loading } = useAuth();
	
	const {
		isLoading,
		data: cart = [],
		refetch,
	} = useQuery({
		queryKey: ["cart", user?.email],
		enabled: !loading,
		queryFn: async () => {
			const result = await axios(
				`http://localhost:5000/carts/?email=${user?.email}`, {
					headers: {authorization: `Bearer ${localStorage.getItem('access-token')}`}
				}
			);
			
			return result.data;
		},
	});


    
	return {cart, refetch, isLoading}
};

export default useCart;
