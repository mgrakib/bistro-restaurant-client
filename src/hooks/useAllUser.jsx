import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllUser = () => {

   const {
		data: users = [],
		isLoading,
		refetch,
   } = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const result = await axios(`http://localhost:5000/users`, {
				headers: {authorization :`Bearer ${localStorage.getItem('access-token')}` }
			});

			
			return result.data;
		},
   });

    
    return {users, isLoading, refetch}
}

export default useAllUser;