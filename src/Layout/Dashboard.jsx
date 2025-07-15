import React, { useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaEnvelope,
  FaShoppingBag,
  FaShoppingCart,
  FaWallet,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdHomeFilled, MdRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";
import useCart from "../hooks/useCart";

const dashboardLinks = [
  { to: "/dashboard/user-home", icon: <FaShoppingCart />, label: "User Home" },
  { to: "/dashboard/reservation", icon: <FaCalendarAlt />, label: "Reservation" },
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
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-2 py-1 rounded hover:bg-orange-500 ${
      isActive ? "text-white bg-blue-500" : "text-black"
    }`;

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex justify-between items-center bg-orange-400 p-4">
        <Link to="/" className="text-lg font-bold text-black">
          BISTRO BOSS
        </Link>
        <button onClick={() => setOpen(!open)} className="text-black">
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
  className={`bg-orange-400 uppercase 
    fixed z-50 top-14 
    md:static md:block 
    h-[calc(100vh-56px)] md:h-screen w-64 
    transition-transform duration-300
    ${open ? "translate-x-0" : "translate-x-full"} 
    md:translate-x-0
    md:left-0 md:right-auto right-0`}
>
        <Link
          to="/"
          className="hidden md:block text-xl px-6 mt-4 font-bold tracking-wide text-black"
        >
          BISTRO BOSS
        </Link>
        <ul className="p-4 space-y-1">
          {dashboardLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
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
              <NavLink
                to={link.to}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.icon}
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 pt-10 overflow-y-auto max-h-screen bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
