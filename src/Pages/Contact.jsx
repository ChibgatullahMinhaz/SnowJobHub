import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-10"
      >
        <motion.h2
          className="text-3xl font-bold text-blue-700 text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          ❄️ Contact Us
        </motion.h2>

        <motion.div
          className="space-y-6 text-blue-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <p className="font-semibold">📧 Email:</p>
            <p>support@snowjobhub.com</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <p className="font-semibold">📍 Location:</p>
            <p>Winter Valley, Snowland</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <p className="font-semibold">📞 Phone:</p>
            <p>+880-123-456789</p>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-all">
            ❄️ Send Message
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
