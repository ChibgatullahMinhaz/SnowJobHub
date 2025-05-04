import React from "react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  space-y-2"
          >
            <li>
              <NavLink to={`/`}>Home</NavLink>
            </li>
            <li>
              <NavLink to={`/about`}>about</NavLink>
            </li>
            <li>
              <NavLink to={`/Jobs`}>Jobs</NavLink>
            </li>
            <li>
              <NavLink to={`/Contact`}>Contact</NavLink>
            </li>
            <div className="action flex flex-col gap-y-3">
              <Link
                className=" btn bg-[#1976D2] hover:bg-[#1565C0] text-white "
                to={`/login`}
              >
                {" "}
                Login
              </Link>
              <Link
                className=" btn bg-[#64B5F6] hover:bg-[#42A5F5] text-white "
                to={`/SingUp`}
              >
                {" "}
                SingUp
              </Link>
            </div>
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-3 space-x-3">
          <li>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={`/about`}>about</NavLink>
          </li>
          <li>
            <NavLink to={`/Jobs`}>Jobs</NavLink>
          </li>
          <li>
            <NavLink to={`/Contact`}>Contact</NavLink>
          </li>
        </ul>
        <div className="action flex gap-x-3.5">
          <Link
            className=" btn bg-[#1976D2] hover:bg-[#1565C0] text-white "
            to={`/login`}
          >
            {" "}
            Login
          </Link>
          <Link
            className=" btn bg-[#64B5F6] hover:bg-[#42A5F5] text-white "
            to={`/SingUp`}
          >
            {" "}
            SingUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
