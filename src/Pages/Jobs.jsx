import React, { useContext, useEffect, useState } from "react";
import { CompaniesContext } from "../Store/Context/CompaniesContext";
import { toast } from "react-toastify";
import { Atom } from "react-loading-indicators";

import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const Jobs = () => {
  const { data, isLoading, setIsLoading } = useContext(CompaniesContext);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    try {
      setIsLoading(true);
      setCompanies(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, data]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Atom
          color={["#00FFFF", "#B0E0E6", "#ADD8E6", "#FFFFFF"]}
          size="large"
        />
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-base-200"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto py-10 px-4 md:px-6">
        <div className="text-center mb-10">
          <motion.h1
            className="text-4xl font-bold mb-4 text-primary"
            variants={cardVariants}
          >
            Job Board
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variants={cardVariants}
            transition={{ delay: 0.2 }}
          >
            Find your next career opportunity with top companies
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <motion.div
              key={company.id}
              className="card card-compact bg-base-100 shadow-md hover:shadow-lg transition-shadow"
              variants={cardVariants}
            >
              <div className="card-body">
                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="card-title text-lg">{company.name}</h2>
                </div>
                <p className="line-clamp-3 text-gray-600 mb-4">
                  {company.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    {company.jobs.length} open position
                    {company.jobs.length !== 1 ? "s" : ""}
                  </div>
                  <Link
                    to={`/company/${company.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Company
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Jobs;
