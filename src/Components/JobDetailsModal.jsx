import { motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { delay: 0.2 }
  }
};

const JobDetailsModal = ({ job, onClose, onApply }) => {
  if (!job) return null;

  return (
    <motion.div
      className="fixed w-11/12 inset-0  z-50 flex items-center justify-center"
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

        <h3 className="font-bold text-lg mb-2">{job.title}</h3>
        <div className="space-y-2 text-sm">
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Type:</strong> {job.type}</p>
          <p><strong>Salary:</strong> {job.salary?.min} - {job.salary?.max} {job.salary?.currency}</p>
          <p><strong>Description:</strong> {job.description}</p>
        </div>

        <div className="modal-action mt-4">
          <button className="btn" onClick={onClose}>
            Close
          </button>
          <button className="btn btn-primary" onClick={onApply}>
            Apply <ExternalLink className="w-4 h-4 ml-1" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default JobDetailsModal;
