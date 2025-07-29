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
  FaUsers,
} from "react-icons/fa";
import { MdHomeFilled, MdRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";
import useCart from "../hooks/useCart";
import { Helmet } from "react-helmet-async";
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";
import { BiSolidBookBookmark } from "react-icons/bi";
import useAdmin from "../hooks/useAdmin";
import FloatingContactButtons from "../components/FloatingContactButtons/FloatingContactButtons";


const UserLinks = [
  { to: "/dashboard/userHome", icon: <MdHomeFilled />, label: "User Home" },
  {
    to: "/dashboard/reservation",
    icon: <FaCalendarAlt />,
    label: "Reservation",
  },
  {
    to: "/dashboard/paymentHistory",
    icon: <FaWallet />,
    label: "Payment History",
  },
  { to: "/dashboard/cart", icon: <FaShoppingCart />, label: "My Cart" },
  { to: "/dashboard/addReview", icon: <MdRateReview />, label: "Add Review" },
  { to: "/dashboard/myBooking", icon: <TbBrandBooking />, label: "My Booking" },
];

const AdminLinks = [
  { to: "/dashboard/adminHome", icon: <MdHomeFilled />, label: "Admin Home" },
  { to: "/dashboard/addItem", icon: <ImSpoonKnife />, label: "Add Item" },
  { to: "/dashboard/manageItems", icon: <TfiMenuAlt />, label: "Manage Items" },
  {
    to: "/dashboard/manageBookings",
    icon: <BiSolidBookBookmark />,
    label: "Manage Bookings",
  },
  { to: "/dashboard/allUsers", icon: <FaUsers />, label: "All Users" },
];

const mainLinks = [
  { to: "/", icon: <MdHomeFilled />, label: "Home" },
  { to: "/menu", icon: <IoMdMenu />, label: "Menu" },
  { to: "/order/salad", icon: <FaShoppingBag />, label: "Shop" },
  { to: "/contact", icon: <FaEnvelope />, label: "Contact" },
];

const Dashboard = () => {
  const [cart] = useCart();
  const [open, setOpen] = useState(false);
  const [isAdmin] = useAdmin();

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-2 py-1 rounded hover:bg-orange-500 ${
      isActive ? "text-white bg-blue-500" : "text-black"
    }`;

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Mobile Top Bar */}
        <div className="md:hidden flex justify-between items-center bg-orange-400 p-4">
          <div className="text-white font-cinzel font-extrabold text-xl tracking-wide">
            My Dashboard
          </div>
          <button onClick={() => setOpen(!open)} className="text-white">
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
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
          <div className="p-4 text-center">
            <Link
              to="/"
              className="text-xl md:text-2xl font-extrabold tracking-wider text-white transition duration-300 ease-out transform hover:scale-105 font-cinzel block"
            >
              BISTRO BOSS
              <span className="block text-sm md:text-base tracking-[0.35em] font-light mt-1">
                Restaurant
              </span>
            </Link>
          </div>

          <ul className="p-4 space-y-1">
            {(isAdmin ? AdminLinks : UserLinks).map((link) => (
              <li key={link.to} className="font-medium font-cinzel text-base">
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
              <li key={link.to} className="font-medium font-cinzel text-base">
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
         <FloatingContactButtons />
      </div>
    </>
  );
};

export default Dashboard;
