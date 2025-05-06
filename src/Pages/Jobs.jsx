import React, { useContext, useEffect, useState } from "react";
import JobCard from "../Components/JobCard";
import JobDetailsModal from "../Components/JobDetailsModal";
import { CompaniesContext } from "../Store/Context/CompaniesContext";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";


const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [allJobs, setAllJobs] = useState([]);
  const { data } = useContext(CompaniesContext);
  useEffect(() => {
    try {
      const filteringJobs = data.map((company) => company.jobs);
      setAllJobs(filteringJobs.flat());
    } catch (error) {
      toast.error(error.message);
    }
  }, [data, setAllJobs]);

  return (
    <>
      <Helmet>
        <title>Jobs - SnowJobHub</title>
        <meta
          name="description"
          content="Learn more about SnowJobHub, the innovative job exploration platform"
        />
      </Helmet>
      <motion.div
        className="text-center my-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-700">
          Start
          <span className="text-blue-500">Your Career</span> Journey Here
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
        Empowering Your Future, One Job at a Time.        </p>
      </motion.div>
      <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {allJobs.map((job) => (
          <JobCard key={job.id} job={job} onClick={setSelectedJob} />
        ))}

        <JobDetailsModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          url={`www.hsdfjs`}
        />
      </div>
    </>
  );
};

export default Jobs;
