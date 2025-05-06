import React from "react";
import Hero from "../Components/Hero";
import { Helmet } from "react-helmet";
import HowItWorks from "../Components/HowItWorks";
import CompaniesSection from "../Components/CompaniesSection";
import Achievements from "../Components/Achievements";
import Testimonials from "../Components/Testimonials";

const Home = () => {

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
