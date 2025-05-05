import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CompanyDetails from "../Pages/CompanyDetails";
import ErrorLayout from "../layouts/ErrorLayout";
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
      
      
    ],
  }
  ,
  {
    path: "*",
    element: <ErrorLayout></ErrorLayout>
  }
]);