import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/routes";
import LoaderProvider from "./Store/Provider/LoaderProvider";
import AuthProvider from "./Store/Provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoaderProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </LoaderProvider>
  </StrictMode>
);
