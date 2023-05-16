import "./App.css";

import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav/Index";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "França",
    path: "/franca",
  },
  {
    name: "Estados Unidos",
    path: "/eua",
  },
  {
    name: "Espanha",
    path: "/espanha",
  },
];

function App() {
  return (
    <>
      <Nav navLinks={navLinks} />
      <Outlet />
    </>
  );
}

export default App;
