import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CompanyDetails from "../Pages/CompanyDetails";
import ErrorLayout from "../layouts/ErrorLayout";
import SingUp from "../Features/SingUp";
import Login from "../Features/Login";
import AllCompanies from "../Components/AllCompanies";
import Jobs from "../Pages/Jobs";
import DetailsPage from "../Pages/DetailsPage";
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
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: '/companies/details/:name/:Id',
        element: <DetailsPage></DetailsPage>
      }
      ,
      {
        path: '/companies',
        element: <AllCompanies></AllCompanies>
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