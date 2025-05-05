import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ErrorLayout from "../layouts/ErrorLayout";
import SingUp from "../Features/SingUp";
import Login from "../Features/Login";
import AllCompanies from "../Components/AllCompanies";
import Jobs from "../Pages/Jobs";
import DetailsPage from "../Pages/DetailsPage";
import PrivetRoute from "./PrivetRoute";
import ResetPassword from "../Components/ResetPassword";
import MyProfile from "../Pages/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs",
        element: <PrivetRoute><Jobs></Jobs></PrivetRoute> ,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/companies/details/:name/:Id",
        element: <DetailsPage></DetailsPage>,
      },
      {
        path: "/companies",
        element: <PrivetRoute><AllCompanies></AllCompanies></PrivetRoute> ,
      },
      {
        path: "/resetPassword",
        element: <ResetPassword></ResetPassword> ,
      },
      {
        path: "/user/:name/Profile",
        element: <PrivetRoute> <MyProfile></MyProfile> </PrivetRoute> ,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/SingUp",
        element: <SingUp></SingUp>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorLayout></ErrorLayout>,
  },
]);
