import React, { useContext, useState } from "react";
import { CompaniesContext } from "../Store/Context/CompaniesContext";
import { Link,  useParams } from "react-router-dom";
import { Grid2X2, LayoutList, ExternalLink, ArrowRight, X } from "lucide-react";
import { toast } from "react-toastify";
import JobDetailsModal from "../Components/JobDetailsModal";
import JobCard from "../Components/JobCard";
import { Helmet } from "react-helmet";

const DetailsPage = () => {
  const { data } = useContext(CompaniesContext);
  const { Id } = useParams();
  const [viewType, setViewType] = useState("list");
  const [selectedJob, setSelectedJob] = useState(null);
  const findCompanyById = (id) => {
    return data.find((company) => company.id === id);
  };
  const company = findCompanyById(Id || "");

  

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Company not found</h1>
          <p className="mb-6">
            The company you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/"
            className="btn bg-[#1976D2] hover:bg-[#1565C0] text-white "
          >
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (

    <div className="container mx-auto py-10 px-4 md:px-6">
        <Helmet>
        <title>SnowJobHub || Company Details page</title>
        <meta name="description" content="This is SnowJobHub" />
        <meta
          name="snowjobhub"
          content="React, SnowJobHub
, company details"
        />
      </Helmet>
      {/* Company Details */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
          <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{company.name}</h1>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="badge bg-[#F3E8FF] text-blue-900  ">
                {company?.industry}
              </span>
              <span className="badge bg-[#F3E8FF] text-blue-900  ">
                {company?.location}
              </span>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-3">About {company?.name}</h2>
          <p className="text-gray-700 mb-6">{company?.description}</p>

          <Link
            href={company?.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary-focus transition-colors"
          >
            Visit website
            <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Job Listings */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Available Positions</h2>
          <div className="flex space-x-2">
            <button
              className={`btn btn-sm ${
                viewType === "list" ? "btn-active" : "btn-outline"
              }`}
              onClick={() => setViewType("list")}
            >
              <LayoutList className="h-4 w-4 mr-2" />
              List
            </button>
            <button
              className={`btn btn-sm ${
                viewType === "grid" ? "btn-active" : "btn-outline"
              }`}
              onClick={() => setViewType("grid")}
            >
              <Grid2X2 className="h-4 w-4 mr-2" />
              Grid
            </button>
          </div>
        </div>

        {company.jobs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No open positions at the moment. Check back later!
            </p>
          </div>
        ) : (
          <div
            className={`grid gap-6 ${
              viewType === "grid"
                ? "md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {company.jobs.map((job) => (
              <>
                <JobCard key={job.id} job={job} onClick={setSelectedJob} />
              </>
            ))}
            <JobDetailsModal
              job={selectedJob}
              onClose={() => setSelectedJob(null)}
              url={company.website}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
