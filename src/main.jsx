import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./Pages/Home/Index.jsx";
import CountryPage from "./Pages/CountryPage/Index.jsx";
import CityPage from "./Pages/CityPage/Index.jsx";

import { franceAboutPage } from "./Data/texts.js";
import { franceLinks } from "./Data/linkArrays.js";
import { paris, bordeaux, strasbourg } from "./Data/textDetail.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/franca",
        element: (
          <CountryPage
            pageName="Pé Na Estrada - França"
            sectionTitle="Sobre a França"
            sectionText={franceAboutPage}
            linkArray={franceLinks}
          />
        ),
      },
      {
        path: "/franca/:id",
        element: (
          <CityPage
            pageName="Pé Na Estrada - França"
            sectionTitle="Sobre a França"
            pageInfo={(paris, bordeaux, strasbourg)}
          />
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
