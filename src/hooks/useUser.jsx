import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const axiosSecure = useAxiosSecure();
   
    const {refetch,data: allUsers=[]} = useQuery({
        queryKey: ['cart', allUsers?.email],
        queryFn: async () => {
             const res = await axiosSecure.get(`/allUsers?email=${allUsers?.email}`); ;
             return res.data;
        }
    })
    return [allUsers, refetch];
};

export default useUser;