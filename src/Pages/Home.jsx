import React, { useEffect } from "react";
import Hero from "../Components/Hero";
import { Helmet } from "react-helmet";
import HowItWorks from "../Components/HowItWorks";

const Home = () => {
     useEffect(()=>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },[])
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
    </>
  );
};

export default Home;
