import {
  createBrowserRouter,
  RouterProvider
} from "react-router";
import React from "react";
import { createRoot } from 'react-dom/client'

import './index.css'
import App from "./App";
import Repository from "./pages/Repository";
import Galery from "./pages/Galery";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/repositorys",
    element:<Repository/>
  },
  {
    path:"/galery",
    element:<Galery/>
  }
])

const root = document.getElementById("root");
createRoot(root).render(
  <RouterProvider router={router} />
)