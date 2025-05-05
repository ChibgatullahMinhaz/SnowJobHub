import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Atom } from "react-loading-indicators";
import { LoaderContext } from "../Store/Context/LocaderContext";
import { toast } from "react-toastify";

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

const HowItWorks = () => {
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  const [stepsData, setStepsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/howToWork.json");
        if (!res.ok) {
          throw new Error("Failed to load data");
        }
        const data = await res.json();
        setStepsData(data);
      } catch (error) {
        setError(error.message);
        toast.error("Error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setIsLoading]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Atom color="#32cd32" size="large" text="" textColor="" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="py-16 bg-winter-softGray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-blue-500">Snow</span>
            <span className="text-gray-700">Job</span>
            <span className="text-blue-500">Hub</span> Works
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our platform makes it easy to find and apply for jobs that match
            your skills and career goals.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stepsData.map((step) => (
            <motion.div
              key={step.id}
              variants={item}
              className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center frost-card"
            >
              <div className="text-4xl mb-4 bg-winter-lightPurple p-4 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
