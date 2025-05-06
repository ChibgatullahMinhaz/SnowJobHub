import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowRightIcon } from "lucide-react";



const JobCard = ({ job, onClick }) => {
  return (
    <motion.div
      className="card shadow-md bg-base-100 transition-all cursor-pointer hover:shadow-xl"
     
      initial={{ opacity: 1, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="card-body">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="card-title">{job.title}</h2>
          <p className="text-sm text-gray-500 mt-1">
            {job.location}{" "}
            {job.remote && (
              <span className="italic">(Remote available)</span>
            )}
          </p>
        </div>
        <span className="badge badge-info">{job.jobType}</span>
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2">Salary range:</p>
        <p className="font-medium text-success">{job?.salary}</p>
      </div>
     
        <div className="card-actions justify-end mt-4">
        <button
          className="btn bg-[#64B5F6] hover:bg-[#42A5F5] text-white btn-sm"
          onClick={() => onClick(job)}
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
      </div>
    </motion.div>
  );
};

export default JobCard;