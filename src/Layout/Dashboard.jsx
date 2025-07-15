import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaCalendarAlt,
  FaEnvelope,
  FaShoppingBag,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { MdHomeFilled, MdRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

const dashboardLinks = [
  { to: "/dashboard/user-home", icon: <FaShoppingCart />, label: "User Home" },
  {
    to: "/dashboard/reservation",
    icon: <FaCalendarAlt />,
    label: "Reservation",
  },
  { to: "/dashboard/payment", icon: <FaWallet />, label: "Payment History" },
  { to: "/dashboard/cart", icon: <FaShoppingCart />, label: "My Cart" },
  { to: "/dashboard/review", icon: <MdRateReview />, label: "Add Review" },
  { to: "/dashboard/booking", icon: <TbBrandBooking />, label: "My Booking" },
];

const mainLinks = [
  { to: "/", icon: <MdHomeFilled />, label: "Home" },
  { to: "/home", icon: <IoMdMenu />, label: "Menu" },
  { to: "/order/salad", icon: <FaShoppingBag />, label: "Shop" },
  { to: "/contact", icon: <FaEnvelope />, label: "Contact" },
];

const Dashboard = () => {
  const [cart] = useCart();
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-2 py-1 rounded hover:bg-orange-500 ${
      isActive ? "text-white bg-blue-500" : "text-black"
    }`;

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 min-h-screen uppercase bg-orange-400">
        <Link
          to="/"
          className="text-xl px-6 block  mt-4 font-bold tracking-wide text-black "
        >
          BISTRO BOSS
        </Link>
        <ul className=" p-4 space-y-1">
          {dashboardLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass}>
                {link.icon}
                {link.to === "/dashboard/cart"
                  ? `${link.label} (${cart.length})`
                  : link.label}
              </NavLink>
            </li>
          ))}

          <div className="divider before:bg-white after:bg-white"></div>

          {mainLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass}>
                {link.icon}
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
