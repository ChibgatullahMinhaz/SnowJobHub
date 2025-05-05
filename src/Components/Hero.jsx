import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);
  return (
    <div className="relative z-10 overflow-hidden bg-gradient-to-b from-white via-[#f3f2fb] to-white">
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float z-0"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float z-0"></div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Find Your <span className="text-purple-600">Dream Job</span> with Ease
          </motion.h1>
          <motion.p
            className="text-lg text-slate-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            Explore job opportunities from top companies all in one place.
            SnowJobHub helps you find the perfect position that matches your skills and career goals.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <Link to="/companies">
              <button className="btn w-full sm:w-auto bg-[#64B5F6] hover:bg-[#42A5F5] text-white">Browse Companies</button>
            </Link>
            <Link to="/SingUp">
              <button className="btn w-full sm:w-auto bg-white hover:bg-[#A689FA]">Create Account</button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="md:w-1/2">
          <motion.img
            src="https://i.ibb.co.com/fGVjCZsG/Gemini-Generated-Image-y4ayfny4ayfny4ay.jpg"
            alt="Person searching for jobs"
            className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[500px]"
            loading="lazy" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
