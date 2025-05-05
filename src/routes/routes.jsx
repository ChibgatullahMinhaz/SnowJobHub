import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CompanyDetails from "../Pages/CompanyDetails";
import ErrorLayout from "../layouts/ErrorLayout";
import SingUp from "../Features/SingUp";
import Login from "../Features/Login";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: '/companies/details/:name',
        element: <CompanyDetails></CompanyDetails>
      }
      ,
      {
        path: '/login',
        element: <Login></Login>
      }
      ,
      {
        path: '/SingUp',
        element: <SingUp></SingUp>
      }
      ,

      
    ],
  }
  ,
  {
    path: "*",
    element: <ErrorLayout></ErrorLayout>
  }
]);