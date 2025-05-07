import React, { useContext } from "react";
import Logo from "./Logo";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Store/Context/AuthContext";
import { motion } from "framer-motion";

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Jobs", path: "/Jobs" },
  { name: "Contact", path: "/Contact" },
];
const AnimatedLink = ({ to, children }) => (
  <NavLink to={to}>
    {({ isActive }) => (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative px-4 py-2 border border-blue-500 text-blue-500 rounded-full overflow-hidden group transition-all cursor-pointer duration-300"
      >
        <span
          className={`absolute h-full left-0 top-0 bg-blue-500 transition-all duration-300 ease-in-out z-0 ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        ></span>
        <span
          className={`relative z-10 transition-all duration-300 ${
            isActive ? "text-white" : "group-hover:text-white"
          }`}
        >
          {children}
        </span>
      </motion.div>
    )}
  </NavLink>
);

const Navbar = () => {
  const { user, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUserProfile = () => {
    navigate(`/user/${user.displayName}/Profile`);
  };

  return (
    <>
      {!isLoading && (
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm bg-base-300 dropdown-content rounded-box z-10 mt-3 w-32 p-2 shadow space-y-2 hover:bg-base-300"
              >
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    <NavLink
                    to={link.path}
                      
                      className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500"
                    >
                      <svg
                        class="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                      <span className="relative">{link.name}</span>
                    </NavLink>
                  </li>
                ))}
                {!user && (
                  <div className="action flex flex-col gap-y-3">
                    <Link
                      className="btn bg-[#1976D2] hover:bg-[#1565C0] text-white"
                      to={`/login`}
                    >
                      Login
                    </Link>
                    <Link
                      className="btn bg-[#64B5F6] hover:bg-[#42A5F5] text-white"
                      to={`/SingUp`}
                    >
                      SingUp
                    </Link>
                  </div>
                )}
              </ul>
            </div>
            <Link to={`/`}>
              <Logo />
            </Link>
          </div>

          <div className="navbar-end lg:hidden">
            {user && (
              <div className="flex gap-x-1.5 items-center">
                <img
                  onClick={handleUserProfile}
                  className="h-10 w-10 rounded-full cursor-pointer"
                  src={user?.photoURL}
                  alt={user?.displayName}
                />
              </div>
            )}
          </div>

          <div className="navbar-end hidden lg:flex items-center gap-x-4">
            <motion.ul
              className="flex gap-x-4"
              initial="hidden"
              whileInView="visible"
              variants={list}
            >
              {navLinks.map((link, idx) => (
                <motion.li key={idx} variants={item}>
                  <AnimatedLink to={link.path}>{link.name}</AnimatedLink>
                </motion.li>
              ))}
            </motion.ul>
            {user ? (
              <div className="flex gap-x-1.5 items-center">
                <img
                  onClick={handleUserProfile}
                  className="h-14 w-14 rounded-full cursor-pointer"
                  src={user?.photoURL}
                  alt={user?.displayName}
                />
              </div>
            ) : (
              <div className="action flex gap-x-3.5">
                <Link
                  className="btn bg-[#1976D2] hover:bg-[#1565C0] text-white"
                  to={`/login`}
                >
                  Login
                </Link>
                <Link
                  className="btn bg-[#64B5F6] hover:bg-[#42A5F5] text-white"
                  to={`/SingUp`}
                >
                  SingUp
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
