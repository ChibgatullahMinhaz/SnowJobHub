import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Store/Context/AuthContext";
import { updateProfile, updatePassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { auth } from "../Utilities/firebase.init";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function UpdateProfile() {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [address, setAddress] = useState("Habiganj, Bangladesh");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      toast.success("Profile updated successfully!");
      navigate(`/user/${name}/Profile`);
    } catch (error) {
      toast.error(error.message || "Update failed");
    }
  };

  return (
    <>
      <title>SnowJobHub - updateProfile My Profile</title>
      <meta
        name="description"
        content="This is SnowJobHub updateProfile My Profile"
      />
      <meta
        name="SnowJobHub"
        content="React, SnowJobHub
, updateProfile My Profile"
      />
      <motion.div
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.form
          onSubmit={handleUpdate}
          className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
          variants={containerVariants}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Update Profile
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Display Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Photo URL
            </label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded"
          >
            Update Information
          </button>
        </motion.form>
      </motion.div>
    </>
  );
}
