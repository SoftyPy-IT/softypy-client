import { useQuery } from "react-query";

const usePopularServices = () => {
    const {isLoading:loading , refetch, data: singleservices = []} = useQuery({
        queryKey: ['singleservices'],
        queryFn: async () =>{
            const res = await fetch('https://softypy-server-liard.vercel.app/singleservices')
            return res.json() 
        }
    })
    return [singleservices, loading, refetch]
};

export default usePopularServices;