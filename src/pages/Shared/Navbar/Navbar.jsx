import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/contact", label: "Contact Us" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/menu", label: "Our Menu" },
    { to: "/order/salad", label: "Order Food" },
    { to: "/login", label: "Login" },
  ];

  const navOptions = navLinks.map((link) => (
    <li key={link.to}>
      <NavLink
        to={link.to}
        className={({ isActive }) =>
          `block px-3 py-2 font-medium uppercase transition-colors duration-200 ${
            isActive ? "text-yellow-400" : " hover:text-yellow-300"
          }`
        }
        onClick={() => setMenuOpen(false)}
      >
        {link.label}
      </NavLink>
    </li>
  ));

  return (
    <nav className="fixed z-50 w-full max-w-screen-xl mx-auto bg-black bg-opacity-50 text-white font-bold">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <span className="text-xl font-bold">BISTRO BOSS</span>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <ul className="hidden lg:flex space-x-2 uppercase">{navOptions}</ul>
      </div>
     
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-black bg-opacity-90 z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white mb-4"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <ul className="flex flex-col space-y-1 uppercase">{navOptions}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
