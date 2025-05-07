import { motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { toast } from "react-toastify";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { delay: 0.2 },
  },
};

const JobDetailsModal = ({ job, onClose, url }) => {
  if (!job) return null;

const handleApply = () => {
    if (job) {
      window.open(url, "_blank", "noopener,noreferrer");
      toast.success("Opening application page", {
        description: "Good luck with your application!",
      });
      onClose()
    }
  };
  return (
    <motion.div
    className="fixed w-11/12 mx-auto z-50 flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      variants={backdrop}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="modal-box max-w-2xl w-full bg-base-100"
        variants={modal}
      >
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
        >
          <X />
        </button>

        
        <div className="space-y-2 text-sm">
          <img src={job.bannerImage} alt={job.title} />
          <h3 className="font-bold text-lg mb-2">{job.title}</h3>
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          <p>
            <strong>Type:</strong> {job.jobType}
          </p>
          <p>
            <strong>Salary:</strong> {job.salary}
          </p>
          <p>
            <strong>Description:</strong> {job.description}
          </p>
          <div>
            <h4 className="text-md font-semibold">Requirements</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {job?.requirements?.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="modal-action mt-4">
          <button className="btn" onClick={onClose}>
            Close
          </button>
          <button className="btn btn-primary" onClick={handleApply}>
            Apply <ExternalLink className="w-4 h-4 ml-1" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default JobDetailsModal;
