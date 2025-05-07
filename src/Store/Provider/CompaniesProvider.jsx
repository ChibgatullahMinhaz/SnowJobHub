import React, { useContext, useEffect, useState } from "react";
import { CompaniesContext } from "../Context/CompaniesContext";
import { toast } from "react-toastify";

const CompaniesProvider = ({ children }) => {
  const [data, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/jobData.json");
        const data = await res.json();
        setAllData(data);
      } catch (error) {
        toast.warning(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const companyData = {
    isLoading,
    setIsLoading,
    data,
    setAllData,
  };
  return (
    <CompaniesContext.Provider value={companyData}>
      {children}
    </CompaniesContext.Provider>
  );
};

export default CompaniesProvider;
