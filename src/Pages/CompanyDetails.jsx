import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Grid2X2, LayoutList, ExternalLink, ArrowRight, X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Mock JSON data - replace with your actual import
const companyDetailsData = [
  {
    id: "company1",
    name: "Tech Innovations Inc.",
    logo: "https://via.placeholder.com/150/abcdef/ffffff?Text=TI",
    industry: "Software Development",
    location: "San Francisco, CA",
    foundedYear: 2010,
    employeeCount: "50-200",
    description: "A leading software company focused on innovative solutions.",
    website: "https://techinnovations.com",
    jobs: [
      {
        id: "job1",
        title: "Frontend Developer",
        location: "San Francisco, CA",
        remote: true,
        type: "Full-time",
        salary: { min: 80000, max: 120000, currency: "USD" },
        description:
          "We are looking for a skilled frontend developer to join our team.",
        responsibilities: [
          "Develop user interfaces",
          "Write clean code",
          "Collaborate with designers",
        ],
        requirements: ["React.js", "JavaScript", "HTML", "CSS"],
        postedAt: "2025-05-01T10:00:00Z",
        applyUrl: "https://techinnovations.com/apply/frontend",
      },
      {
        id: "job2",
        title: "Backend Engineer",
        location: "New York, NY",
        remote: false,
        type: "Full-time",
        salary: { min: 90000, max: 130000, currency: "USD" },
        description:
          "Seeking a talented backend engineer with experience in Node.js.",
        responsibilities: [
          "Develop server-side logic",
          "Database management",
          "API design",
        ],
        requirements: ["Node.js", "Express.js", "PostgreSQL"],
        postedAt: "2025-04-25T14:30:00Z",
        applyUrl: "https://techinnovations.com/apply/backend",
      },
    ],
  },
  // Add more company data here
];

const findCompanyById = (id) => {
  return companyDetailsData.find((company) => company.id === id);
};

// Basic function to format currency
const formatCurrency = (amount, currency) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);
};

// Function to format currency values
function formatSalaryRange(min, max, currency) {
  return `${formatCurrency(min, currency)} - ${formatCurrency(max, currency)}`;
}

const CompanyDetails = () => {
//   const { data } = useContext();
//   const { id } = useParams();
//   const company = findCompanyById(id || ""); 
//   const [viewType, setViewType] = useState("list");
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenJobDetails = (job) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
  };

  const handleCloseJobDetails = () => {
    setSelectedJob(null);
    setIsDialogOpen(false);
  };

  const handleApply = () => {
    if (selectedJob) {
      window.open(selectedJob.applyUrl, "_blank", "noopener,noreferrer");
      toast.success("Opening application page", {
        description: "Good luck with your application!",
      });
    }
  };

//   if (!company) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold mb-4">Company not found</h1>
//           <p className="mb-6">
//             The company you're looking for doesn't exist or has been removed.
//           </p>
//           <Link to="/" className="btn btn-primary">
//             Go Back Home
//           </Link>
//         </div>
//       </div>
//     );
//   }

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <ToastContainer /> {/* Add this to enable react-toastify */}
      {/* Company Details */}
      {/* <div className="mb-12">
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
              <span className="badge badge-primary">{company.industry}</span>
              <span className="badge badge-secondary">{company.location}</span>
              <span className="badge badge-accent">
                Founded {company.foundedYear}
              </span>
              <span className="badge">{company.employeeCount} employees</span>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-3">About {company.name}</h2>
          <p className="text-gray-700 mb-6">{company.description}</p>

          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary-focus transition-colors"
          >
            Visit website
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div> */}
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
              <div
                key={job.id}
                className="card card-compact bg-base-100 shadow-md hover:shadow-lg transition-shadow"
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
                    <span className="badge badge-info">{job.type}</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Salary range:</p>
                    <p className="font-medium text-success">
                      {formatSalaryRange(
                        job.salary.min,
                        job.salary.max,
                        job.salary.currency
                      )}
                    </p>
                  </div>
                  {viewType === "list" && (
                    <p className="mt-4 text-gray-700 line-clamp-2">
                      {job.description}
                    </p>
                  )}
                  <div className="card-actions justify-end mt-4">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleOpenJobDetails(job)}
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Job Details Modal */}
      {isDialogOpen && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-25">
          <div className="modal-box relative w-auto max-w-2xl">
            <button
              onClick={handleCloseJobDetails}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="font-bold text-lg">{selectedJob.title}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="badge badge-info">{selectedJob.type}</span>
              <span className="badge">{selectedJob.location}</span>
              {selectedJob.remote && (
                <span className="badge badge-success">Remote Available</span>
              )}
            </div>
            <div className="space-y-4 my-4">
              <div>
                <h4 className="text-md font-semibold">Salary Range</h4>
                <p className="text-success font-medium">
                 dfhj
                </p>
              </div>
              <div>
                <h4 className="text-md font-semibold">Description</h4>
                <p className="text-gray-700">{selectedJob.description}</p>
              </div>
              <div>
                <h4 className="text-md font-semibold">Responsibilities</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {selectedJob.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-md font-semibold">Requirements</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {selectedJob.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-md font-semibold">Posted</h4>
                <p className="text-gray-500">
                  {new Date(selectedJob.postedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="modal-action justify-between">
              <button
                className="btn btn-outline"
                onClick={handleCloseJobDetails}
              >
                <X className="h-4 w-4 mr-2" />
                Close
              </button>
              <button className="btn btn-primary gap-2" onClick={handleApply}>
                Apply Now
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyDetails; // Exporting the component with the original name
