import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Snowfall from "react-snowfall";

const MainLayout = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-full z-[1000] pointer-events-none">
        <Snowfall snowflakeCount={100} />
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white shadow"
      >
        <Navbar />
      </motion.header>

     
      <main className="minHight relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative z-10">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
