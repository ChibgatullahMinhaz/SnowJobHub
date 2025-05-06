import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-[#333] border-t mt-16">
      
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Logo and About */}
        <div>
          <Logo />
          <p className="text-sm mt-2 hover:text-[#1976D2] text-slate-300 ">
            Snow Job Hub is your trusted job portal. Find local and Global opportunities with ease and elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-3  text-lg font-semibold text-slate-300 ">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[#EEF6FB]">
            <li><Link to="/" className="hover:text-[#1976D2] text-[#EEF6FB]">Home</Link></li>
            <li><Link to="/about" className=" hover:text-[#1976D2] text-slate-300">About</Link></li>
            <li><Link to="/jobs" className=" hover:text-[#1976D2] text-slate-300">Jobs</Link></li>
            <li><Link to="/Contact" className=" hover:text-[#1976D2] text-slate-300">Contact</Link></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className=" mb-3  text-lg font-semibold text-slate-300 ">Account</h3>
          <ul className="space-y-2 ">
            <li><Link to="/login" className="hover:text-[#1976D2] text-slate-300">Login</Link></li>
            <li><Link to="/SingUp" className="hover:text-[#1976D2] text-slate-300">Register</Link></li>
            <li><Link to="/" className="hover:text-[#1976D2] text-slate-300">My Profile</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-3  text-lg font-semibold text-slate-300 ">Contact</h3>
          <p className="text-sm  hover:text-[#1976D2] text-slate-300">
            Email: support@snowjobhub.com <br />
            Location: Winter Valley, Snowland <br />
            Phone: +880-123-456789
          </p>
        </div>
      </div>

      <div className="text-center py-4 text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Snow Job Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;