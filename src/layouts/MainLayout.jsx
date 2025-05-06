import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Snowfall from "react-snowfall";
import { ToastContainer } from "react-toastify";
import { Atom } from "react-loading-indicators";
import ScrollToTop from "../Components/ScrollToTop";
import { Helmet } from "react-helmet";

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
const [isRouterLoader, setIsRouteLoading] = useState(false)
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timing = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timing);
  }, []);


  useEffect(() => {
    setIsRouteLoading(true);
    const timer = setTimeout(() => setIsRouteLoading(false), 200);
    return () => clearTimeout(timer);
  }, [location]);
  return (
    <>
      <Helmet>
        <title>SnowJobHub || Home page</title>
        <meta name="description" content="This is SnowJobHub" />
        <meta
          name="keywords"
          content="React, SnowJobHub
, jobs"
        />
      </Helmet>
     <ScrollToTop />
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Atom
            color={["#00FFFF", "#B0E0E6", "#ADD8E6", "#FFFFFF"]}
            size="large"
            text=""
            textColor=""
          />
        </div>
      ) : (
        <>
          <ToastContainer></ToastContainer>
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
              {isRouterLoader ? (
                <div className="flex justify-center items-center minHight">
                  <Atom
                    color={["#00FFFF", "#B0E0E6", "#ADD8E6", "#FFFFFF"]}
                    size="large"

                  />
                </div>
              ) : (
                <Outlet />
              )}
            </main>

            {/* Footer */}
            <footer>
              <Footer />
            </footer>
          </div>
        </>
      )}
    </>
  );
};

export default MainLayout;
