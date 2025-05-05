import React, { useContext, useEffect, useState } from "react";
import { CompaniesContext } from "../Context/CompaniesContext";
import { LoaderContext } from "../Context/LocaderContext";
import { toast } from "react-toastify";

const CompaniesProvider = ({ children }) => {
    const [data, setAllData] = useState([]);
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
  }, [setIsLoading]);

  const companyData = {
    isLoading,
    setIsLoading,
    data,
    setAllData
  };
  return <CompaniesContext.Provider value={companyData}>{children}</CompaniesContext.Provider>;
};

export default CompaniesProvider;
