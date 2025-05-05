import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
const JobCard = ({ job, onClick }) => {
  return (
    <motion.div
      className="card shadow-md bg-base-100 transition-all cursor-pointer hover:shadow-xl"
      onClick={() => onClick(job)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="card-body">
        <h2 className="card-title text-lg">{job.title}</h2>
        <p className="text-sm text-gray-500">
          {job.location} {job.remote && "(Remote)"}
        </p>
        <p className="text-green-600 font-semibold">
          {job.salary?.min} - {job.salary?.max} {job.salary?.currency}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-primary">
            View Details <ArrowRightIcon className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
