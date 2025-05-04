import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const About = () => {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    },[])
  return (
    <>
      <Helmet>
        <title>About - SnowJobHub</title>
        <meta name="description" content="Learn more about SnowJobHub, the innovative job exploration platform" />
      </Helmet>

      <div className="relative bg-gradient-to-b from-white via-gray-200 to-white py-16">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-winter-lightBlue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float z-0"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-winter-lightPurple rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float z-0"></div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 text-winter-purple">About SnowJobHub</h1>
              <p className="text-xl text-slate-600">
                Connecting talented professionals with their ideal career opportunities
              </p>
            </div>

            <div className="space-y-10">
              <div className="bg-white rounded-xl shadow-lg p-8 frost-card">
                <h2 className="text-2xl font-bold mb-4 text-winter-purple">Our Mission</h2>
                <p className="text-slate-600">
                  SnowJobHub was founded with a simple mission: to create a transparent, user-friendly platform
                  that connects job seekers with quality opportunities. We believe that finding the right job
                  shouldn't be a frustrating experience, but an empowering journey that leads to fulfilling careers.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 frost-card">
                <h2 className="text-2xl font-bold mb-4 text-winter-purple">What Makes Us Different</h2>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>
                    <strong>Company-Focused Approach:</strong> We highlight companies rather than just listing jobs,
                    helping you find employers that match your values and career goals.
                  </li>
                  <li>
                    <strong>Transparent Information:</strong> We provide detailed job descriptions, requirements,
                    and salary information to help you make informed decisions.
                  </li>
                  <li>
                    <strong>Direct Application:</strong> Apply directly through company websites, eliminating middlemen
                    and ensuring your application reaches the right people.
                  </li>
                  <li>
                    <strong>Winter Themed Design:</strong> Our clean, winter-inspired interface provides a calm,
                    refreshing job search experience.
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 frost-card">
                <h2 className="text-2xl font-bold mb-4 text-winter-purple">Our Story</h2>
                <p className="text-slate-600">
                  SnowJobHub was created in 2024 by a team of professionals who experienced firsthand the challenges
                  of navigating the job market. Frustrated by misleading job listings and unclear requirements,
                  we set out to build a platform that prioritizes transparency and user experience.
                </p>
                <p className="text-slate-600 mt-4">
                  Today, SnowJobHub serves thousands of job seekers and partners with hundreds of companies to
                  create meaningful connections that lead to fulfilling careers and successful teams.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
