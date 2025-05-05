import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { LoaderContext } from "../Store/Context/LocaderContext";
import { CompaniesContext } from "../Store/Context/CompaniesContext";

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
  const { data } = useContext(CompaniesContext);
  const { setIsLoading, isLoading } = useContext(LoaderContext);
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);
const navigate = useNavigate();
  useEffect(() => {
    try {
      setIsLoading(true)
      setCompanies(data.slice(0, 4));
    } catch (error) {
      setError(error.message)
    }finally{
      setIsLoading(false)
    }
  }, [setCompanies, data, setIsLoading]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Atom
          color={["#00FFFF", "#B0E0E6", "#ADD8E6", "#FFFFFF"]}
          size="large"
          text=""
          textColor=""
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleNavigateIntoDetailsPage= (company) => {
    navigate(`/companies/details/${company?.name}`)
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 cursor-pointer"
        >
          {companies.map((company) => (
            <motion.div
            onClick={()=>handleNavigateIntoDetailsPage(company)}
              key={company.id}
              variants={item}
              className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
            >
              <Link >
                <div className="w-24 h-24 mb-4 flex items-center justify-center bg-gray-200 rounded-full">
                  <img
                    src={`${company?.logo}`}
                    alt={company?.name}
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
