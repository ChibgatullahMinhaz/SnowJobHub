import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Store/Context/AuthContext";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function MyProfile() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSingout = () => {
    logout()
      .then(() => {
        toast.success("Log-out Successfully");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleUpdate = () => {
    navigate("/use/updateProfile");
  };

  return (
    <motion.div
      className="min-h-screen px-8 py-12 bg-gradient-to-br from-gray-100 to-white text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        variants={containerVariants}
      >
        👤 My Profile
      </motion.h1>

      <motion.div
        className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-6"
        variants={containerVariants}
      >
        <motion.img
          src={user?.photoURL}
          alt="Profile"
          className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-gray-300"
          whileHover={{ scale: 1.1 }}
        />

        <motion.h2 className="text-xl font-semibold text-center capitalize">
          {user?.displayName}
        </motion.h2>

        <motion.p className="text-center mt-2 text-gray-600">
          Front-end Developer | MERN Stack Learner
        </motion.p>

        <motion.div className="mt-4 text-center">
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
          <p>
            <strong>Location:</strong> Habiganj, Bangladesh
          </p>
        </motion.div>
      </motion.div>

      <motion.div className="mt-6 flex justify-center gap-4 flex-wrap">
        <motion.button
          onClick={handleSingout}
          whileTap={{ scale: 0.95 }}
          whileHover={{
            scale: 1.05,
            borderColor: "#3b82f6",
            cursor: "pointer",
          }}
          className="relative px-6 py-2 border border-blue-500 text-blue-500 rounded-full overflow-hidden group transition-all duration-300"
        >
          <span className="absolute w-0 h-full left-0 top-0 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>
          <span className="relative z-10 group-hover:text-white transition-all duration-300">
            {" "}
            ❄️ Logout
          </span>
        </motion.button>

        <motion.button
          onClick={handleUpdate}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-green-200 to-green-400 hover:from-green-300 hover:to-green-500 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300"
        >
          ✏️ Update Info
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
