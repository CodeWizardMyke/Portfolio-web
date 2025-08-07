import {
  createBrowserRouter,
  RouterProvider
} from "react-router";
import React from "react";
import { createRoot } from 'react-dom/client'

import './index.css'
import App from "./App";
import Repository from "./pages/Repository";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/repositorys",
    element:<Repository/>
  }
])

const root = document.getElementById("root");
createRoot(root).render(
  <RouterProvider router={router} />
)