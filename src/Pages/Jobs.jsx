import React, { useContext, useEffect, useState } from "react";
import JobCard from "../Components/JobCard";
import JobDetailsModal from "../Components/JobDetailsModal";
import { CompaniesContext } from "../Store/Context/CompaniesContext";
import { toast } from "react-toastify";

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
