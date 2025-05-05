import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Store/Context/AuthContext";
import { Atom } from "react-loading-indicators";

const PrivetRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Atom
          color={["#00FFFF", "#B0E0E6", "#ADD8E6", "#FFFFFF"]}
          size="large"
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }

  return children;
};

export default PrivetRoute;
