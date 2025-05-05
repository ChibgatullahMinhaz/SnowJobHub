import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Link কম্পোনেন্টের মাধ্যমে রাউটিং হবে

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const CompaniesSection = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/companies.json");
        if (!res.ok) {
          throw new Error("Failed to load data");
        }
        const data = await res.json();
        setCompanies(data);
      } catch (error) {
        setError(error.message);
        console.error("Error loading companies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 className='text-gray-700'">
            {" "}
            <span className="text-blue-500">Our</span> Partner{" "}
            <span className="text-blue-500">Companies</span>{" "}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore a wide range of companies we work with.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {companies.map((company) => (
            <motion.div
              key={company.id}
              variants={item}
              className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
            >
              <Link to={company.detailsPage}>
                <div className="w-24 h-24 mb-4 flex items-center justify-center bg-gray-200 rounded-full">
                  <img
                    src={`${company.logo}`}
                    alt={company.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompaniesSection;
