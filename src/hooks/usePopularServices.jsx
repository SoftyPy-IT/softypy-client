import { useQuery } from "react-query";
import { API_URL } from "../utils/util";

const usePopularServices = () => {
    const {isLoading:loading , refetch, data: singleservices = []} = useQuery({
        queryKey: ['singleservices'],
        queryFn: async () =>{
            const res = await fetch(`${API_URL}/singleservices`)
            return res.json() 
        }
    })
    return [singleservices, loading, refetch]
};

export default usePopularServices;