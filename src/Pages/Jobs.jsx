import React, { useState } from "react";
import JobCard from "../Components/JobCard";
import JobDetailsModal from "../Components/JobDetailsModal";




const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      remote: true,
      salary: { min: 50000, max: 80000, currency: "USD" },
      description: "Build responsive UIs and animations with React."
    }
    // ... more jobs
  ];
  
const Jobs = () => {
    const [selectedJob, setSelectedJob] = useState(null);



    return (
      <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} onClick={setSelectedJob} />
        ))}
  
        <JobDetailsModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          onApply={() => alert("Apply clicked")}
        />    
      </div>
    )
};

export default Jobs;
