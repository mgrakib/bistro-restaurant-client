import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useManageItem = () => {
    const {data: menuItems = [],refetch,
		isLoading } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const result = await axios(`http://localhost:5000/menu`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('access-token')}` }
            });
            return result.data;
        }
        })
    
    return {menuItems, refetch, isLoading}
};

export default useManageItem;