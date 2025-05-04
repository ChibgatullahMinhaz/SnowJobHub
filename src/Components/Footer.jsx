import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-white text-[#333] border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Logo and About */}
        <div>
          <Logo />
          <p className="text-sm mt-2 text-gray-600">
            Snow Job Hub is your trusted job portal. Find local and Global opportunities with ease and elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-[#1976D2]">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#1976D2]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#1976D2]">About</Link></li>
            <li><Link to="/jobs" className="hover:text-[#1976D2]">Jobs</Link></li>
            <li><Link to="/contact" className="hover:text-[#1976D2]">Contact</Link></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold mb-3 text-[#1976D2]">Account</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/login" className="hover:text-[#1976D2]">Login</Link></li>
            <li><Link to="/SingUp" className="hover:text-[#1976D2]">Register</Link></li>
            <li><Link to="/profile" className="hover:text-[#1976D2]">My Profile</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3 text-[#1976D2]">Contact</h3>
          <p className="text-sm text-gray-600">
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
