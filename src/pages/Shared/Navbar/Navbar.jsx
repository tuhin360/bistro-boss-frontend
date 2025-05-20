import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        >
          Our Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
        >
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 max-w-screen-xl text-white font-bold bg-black bg-opacity-50 mx-auto">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-90 rounded-box w-52 uppercase"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex uppercase">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
