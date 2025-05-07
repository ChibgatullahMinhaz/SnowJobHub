import React from "react";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const NoJobsFound = ({ query }) => {
  return (
    <motion.div
      className="max-w-5/6 mx-auto text-center  p-10 bg-gray-100 rounded-xl shadow-md mt-10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center mb-4">
        <AlertCircle className="w-12 h-12 text-red-500" />
      </div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Jobs Found</h2>
      <p className="text-gray-600">
        We couldn't find any jobs matching{" "}
        <span className="text-blue-500 font-medium">"{query}"</span>.
      </p>
      <p className="text-gray-500 mt-1">Try a different keyword or reset your search.</p>
    </motion.div>
  );
};

export default NoJobsFound;
