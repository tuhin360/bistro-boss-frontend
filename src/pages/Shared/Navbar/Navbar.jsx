import { NavLink, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().catch((error) => console.log(error));
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/contact", label: "Contact Us" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/menu", label: "Our Menu" },
    { to: "/order/salad", label: "Order Food" },
  ];

  const navOptions = navLinks.map((link) => (
    <li key={link.to}>
      <NavLink
        to={link.to}
        className={({ isActive }) =>
          `block px-3 py-2 font-medium uppercase transition-colors duration-200 ${
            isActive ? "text-yellow-400" : "hover:text-yellow-300"
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
        <Link to="/" className="text-xl font-bold tracking-wide text-yellow-400">
          BISTRO BOSS
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
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover border border-yellow-400"
                />
              )}
              <span className="text-yellow-300 text-sm">{user.displayName}</span>
              <button
                onClick={handleLogout}
                className="text-sm uppercase hover:text-yellow-400"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `block px-3 py-2 font-medium uppercase transition-colors duration-200 ${
                    isActive ? "text-yellow-400" : "hover:text-yellow-300"
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
            <span className="text-lg font-bold text-yellow-400">Menu</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={28} className="text-white" />
            </button>
          </div>

          <ul className="flex flex-col space-y-2 uppercase flex-grow">{navOptions}</ul>

          {user ? (
            <div className="flex flex-col items-start mt-6 border-t border-gray-700 pt-4 space-y-2">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover border border-yellow-400"
                />
              )}
              <span className="text-yellow-300 text-sm">{user.displayName}</span>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="uppercase text-sm hover:text-yellow-400"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="mt-4 text-sm hover:text-yellow-400"
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
