import { NavLink, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const handleLogout = () => {
    logOut().catch((error) => console.log(error));
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Our Menu" },
    { to: "/order/salad", label: "Order Food" },
    {
      to: isAdmin ? "/dashboard/adminHome" : "/dashboard/userHome",
      label: "Dashboard",
    },
    { to: "/contact", label: "Contact Us" },
    {
      to: "/dashboard/cart",
      label: (
        <div className="relative group cursor-pointer">
          <button className="relative group focus:outline-none">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-600 to-green-800 border-[3px] border-yellow-500 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
              <FaShoppingCart className="text-white text-lg sm:text-2xl" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-red-500 text-black text-[9px] sm:text-[11px] min-w-[16px] sm:min-w-[18px] h-[16px] sm:h-[18px] px-[4px] sm:px-[5px] flex items-center justify-center rounded-full font-bold font-inter shadow-sm">
              {cart.length}
            </div>
          </button>
        </div>
      ),
    },
  ];

  const navOptions = navLinks.map((link) => (
    <li key={link.to}>
      <NavLink
        to={link.to}
        className={({ isActive }) =>
          `block px-3 py-2 font-medium uppercase transition duration-300 ease-out transform hover:scale-105 ${
            isActive
              ? "text-yellow-400 text-lg sm:text-xl font-inter font-extrabold"
              : "hover:text-yellow-300 text-lg sm:text-xl font-inter font-extrabold"
          }`
        }
        onClick={() => setMenuOpen(false)}
      >
        {link.label}
      </NavLink>
    </li>
  ));

  return (
    <nav className="fixed z-50 w-full max-w-screen-xl mx-auto bg-black bg-opacity-60 text-white font-semibold">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-extrabold tracking-wider text-white transition duration-300 ease-out transform hover:scale-105 font-cinzel"
        >
          BISTRO BOSS
          <br />
          <span className="text-base sm:text-xl text-white tracking-[0.50em] block w-full font-extrabold font-cinzel">
            Restaurant
          </span>
        </Link>

        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-5 uppercase">
          {navOptions}
          {user ? (
            <li className="flex items-center gap-2">
              {user.photoURL && (
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user.displayName}
                >
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-8 h-8 rounded-full object-cover border border-yellow-400"
                  />
                </div>
              )}
              <button
                onClick={handleLogout}
                className="text-lg sm:text-xl font-inter font-medium uppercase hover:text-yellow-400 transition duration-300 ease-out transform hover:scale-105"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `block px-3 py-2 font-medium uppercase transition-colors duration-300 ease-out transform hover:scale-105 ${
                    isActive
                      ? "text-yellow-400 text-lg sm:text-xl font-inter font-extrabold"
                      : "hover:text-yellow-300 text-lg sm:text-xl font-inter font-extrabold"
                  }`
                }
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-black bg-opacity-95 z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <span> </span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={28} className="text-white" />
            </button>
          </div>

          <ul className="flex flex-col space-y-2 uppercase flex-grow font-inter font-extrabold">
            {navOptions}
          </ul>

          {user ? (
            <div className="flex flex-col items-start mt-6 border-t border-gray-700 pt-4 space-y-2">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover border border-yellow-400"
                />
              )}
              <span className="text-yellow-300 text-sm font-inter font-extrabold">
                {user.displayName}
              </span>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="uppercase text-sm hover:text-yellow-400 sm:text-xl font-inter font-extrabold"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="mt-4 text-sm hover:text-yellow-400 font-inter font-extrabold uppercase"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
