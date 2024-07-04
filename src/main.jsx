import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectDetails from "./Pages/ProjectDetails.jsx";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetails />,
    loader: () => fetch("/projects.json").then((res) => res.json()),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
