import React, { useContext, useEffect } from "react";
import Hero from "../Components/Hero";
import { Helmet } from "react-helmet";
import HowItWorks from "../Components/HowItWorks";
import CompaniesSection from "../Components/CompaniesSection";
import Achievements from "../Components/Achievements";
import Testimonials from "../Components/Testimonials";
import { useLocation } from "react-router-dom";
import { LoaderContext } from "../Store/Context/LocaderContext";

const Home = () => {
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const timing = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timing);
  }, [location, setIsLoading]);
  return (
    <>
      <Helmet>
        <title>SnowJobHub || Home</title>
        <meta name="description" content="This is SnowJobHub" />
        <meta
          name="keywords"
          content="React, SnowJobHub
, jobs"
        />
      </Helmet>

      <Hero></Hero>
      <HowItWorks></HowItWorks>
      <CompaniesSection></CompaniesSection>
      <Achievements></Achievements>
      <Testimonials></Testimonials>
    </>
  );
};

export default Home;
