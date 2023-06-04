/** @format */

import { useQuery } from "@tanstack/react-query";


const useMenu = () => {

	const {data:menu =[], isLoading } = useQuery({
		queryKey: ['menu'],
		queryFn: async () => {
			const result = await fetch(`http://localhost:5000/menu`);
			return result.json();
		}
	})

	
	return { menu, isLoading };
};

export default useMenu;
