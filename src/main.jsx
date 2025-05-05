import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/routes";
import LoaderProvider from "./Store/Provider/LoaderProvider";
import AuthProvider from "./Store/Provider/AuthProvider";
import CompaniesProvider from "./Store/Provider/CompaniesProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoaderProvider>
      <AuthProvider>
        <CompaniesProvider>
          <RouterProvider router={router} />
        </CompaniesProvider>
      </AuthProvider>
    </LoaderProvider>
  </StrictMode>
);
