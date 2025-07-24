import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { IoIosWallet } from "react-icons/io";
import { FaTruck, FaUsers } from "react-icons/fa";
import { PiChefHatFill } from "react-icons/pi";
const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="w-16 h-16 border-4 border-t-transparent border-purple-500 rounded-full animate-spin shadow-lg"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="flex justify-center items-center gap-4 bg-gradient-to-br from-purple-700 via-purple-500 to-pink-400 text-white p-4 rounded-2xl shadow-lg">
          <IoIosWallet className="size-14" />
          <div>
            <p className="text-3xl font-bold">{stats.revenueAmount}</p>
            <p>Revenue</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 text-white p-4 rounded-2xl shadow-lg">
          <FaUsers className="size-14" />
          <div>
            <p className="text-3xl font-bold">{stats.users}</p>
            <p>Customers</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 bg-gradient-to-br from-pink-600 via-pink-400 to-rose-300 text-white p-4 rounded-2xl shadow-lg">
          <PiChefHatFill className="size-14" />
          <div>
            <p className="text-3xl font-bold">{stats.menuItems}</p>
            <p>Products</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 bg-gradient-to-br from-sky-500 via-cyan-400 to-blue-300 text-white p-4 rounded-2xl shadow-lg">
          <FaTruck className="size-14" />
          <div>
            <p className="text-3xl font-bold">{stats.orders}</p>
            <p>Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
