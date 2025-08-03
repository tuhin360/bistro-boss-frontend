import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useReservation = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    refetch,
    data: reservation = [],
  } = useQuery({
    queryKey: ['reservation', user?.email],
    enabled: !!user?.email, // ✅ Only run if email is available
    queryFn: async () => {
      const res = await axiosSecure.get(`/reservations?email=${user.email}`);
      return res.data;
    },
  });

  return [reservation, refetch];
};

export default useReservation;
