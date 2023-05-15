import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./Pages/Home/Index.jsx";
import CountryPage from "./Pages/CountryPage/Index.jsx";
import CityPage from "./Pages/CityPage/Index.jsx";
import CityInfoPage from "./Pages/CityInfoPage/Index.jsx";

import { franceAboutPage, euaAboutPage, spainAboutPage } from "./Data/texts.js";
import { franceLinks, euaLinks, spainLinks } from "./Data/linkArrays.js";

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
        path: "/eua",
        element: (
          <CountryPage
            pageName="Pé Na Estrada - Estados-Unidos"
            sectionTitle="Sobre os Estados-Unidos"
            sectionText={euaAboutPage}
            linkArray={euaLinks}
          />
        ),
      },
      {
        path: "/espanha",
        element: (
          <CountryPage
            pageName="Pé Na Estrada - Espanha"
            sectionTitle="Sobre a Espanha"
            sectionText={spainAboutPage}
            linkArray={spainLinks}
          />
        ),
      },
      {
        path: "/franca/:id",
        element: (
          <CityPage
            pageName="Pé Na Estrada - França"
            sectionTitle="Sobre Paris"
          />
        ),
      },
      {
        path: "/franca/:id/:id",
        element: <CityInfoPage pageName="Pé Na Estrada - França" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
