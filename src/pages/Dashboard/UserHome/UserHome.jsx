import { IoIosWallet } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { FaPhoneAlt, FaShoppingCart, FaStar, FaWallet } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import useMenu from "../../../hooks/useMenu";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useReservation from "../../../hooks/useReservation";

const UserHome = () => {
  const { user } = useAuth();
  const [menu, loading] = useMenu();
  const [cart] = useCart();
  const axiosSecure = useAxiosSecure();
  const [reservation] = useReservation();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axiosSecure.get("/reviews").then((res) => setReviews(res.data));
  }, [axiosSecure]);

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="w-16 h-16 border-4 border-t-transparent border-purple-500 rounded-full animate-spin shadow-lg"></div>
      </div>
    );
  }

  const statCards = [
    {
      icon: <IoIosWallet className="size-14" />,
      value: menu.length,
      label: "Menu Items",
      bg: "from-purple-700 via-purple-500 to-pink-400",
    },
    {
      icon: <GoHomeFill className="size-14" />,
      value: cart.length,
      label: "Shop",
      bg: "from-yellow-400 via-orange-400 to-red-400",
    },
    {
      icon: <FaPhoneAlt className="size-14" />,
      value: 3,
      label: "Contact",
      bg: "from-pink-600 via-pink-400 to-rose-300",
    },
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold font-cinzel mb-6 text-gray-800">
        Hi, Welcome{" "}
        <span className="text-purple-600">{user?.displayName || "Back"}</span>
      </h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {statCards.map((card, idx) => (
          <div
            key={idx}
            className={`flex justify-center items-center gap-4 p-4 rounded-2xl shadow-xl text-white bg-gradient-to-br ${card.bg}`}
          >
            {card.icon}
            <div>
              <p className="text-3xl font-extrabold font-inter">{card.value}</p>
              <p className="font-inter font-medium text-lg">{card.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* User Info & Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-lg">
        {/* User Profile */}
        <div className="flex flex-col items-center justify-center gap-4 text-center ">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-purple-400 shadow-lg object-cover"
          />
          <h3 className="font-cinzel font-semibold text-2xl text-gray-700">
            {user?.displayName}
          </h3>
        </div>

        {/* User Activity Summary */}
        <div className="space-y-4">
          <h2 className="font-cinzel font-bold text-2xl text-gray-800">
            Your Activities
          </h2>

          <div className="flex items-center gap-3 text-2xl text-gray-700 font-cinzel font-semibold">
            <FaShoppingCart className="text-blue-500 " />
            Orders: <span className="font-semibold">{cart.length}</span>
          </div>

          <div className="flex items-center gap-3  text-gray-700 text-2xl font-cinzel font-semibold">
            <FaStar className="text-green-500" />
            Reviews: <span className="font-semibold">{reviews.length}</span>
          </div>

          <div className="flex items-center gap-3 text-2xl text-gray-700 font-semibold font-cinzel">
            <SlCalender className="text-orange-500" />
            Bookings: <span className="font-semibold">{reservation.length}</span>
          </div>

          <div className="flex items-center gap-3 text-2xl  text-gray-700 font-semibold font-cinzel">
            <FaWallet className="text-red-500" />
            Payments: <span className="font-semibold">{payments.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
