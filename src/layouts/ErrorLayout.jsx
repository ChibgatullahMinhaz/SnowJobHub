import React from "react";
import { Helmet } from "react-helmet";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";
import AstronautAnimation from "../Components/AstronautAnimation";

const ErrorLayout = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-white p-4">
        <Helmet>
        <title>SnowJobHub || Error page</title>
        <meta name="description" content="This is SnowJobHub" />
        <meta
          name="keywords"
          content="React, SnowJobHub
, error"
        />
      </Helmet>
      <div className="w-full max-w-3xl text-center">
        <div className="mb-8">
          <AstronautAnimation />
        </div>

        <h1 className="text-7xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          404
        </h1>

        <div className="space-y-4">
          <h2 className="text-3xl font-medium mb-2">
            Houston, we have a problem!
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            The page you're looking for has floated off into space.
          </p>

          <div className="text-lg text-slate-400 mb-2">
            <code className="bg-slate-700 px-2 py-1 rounded">
              {location.pathname}
            </code>
            <span className="ml-2">was not found on this server</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={() => window.history.back()}
            variant="outline"
            className="bg-transparent border-slate-500 hover:bg-slate-700 text-white group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Go Back
          </button>

          <button
            asChild
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </button>
        </div>

        <div className="mt-16 text-sm text-slate-500">
          <p>Lost? Don't worry, even astronauts get lost sometimes.</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorLayout;
