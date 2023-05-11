import "./App.css";

import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav/Index";

const navLinks = [
  {
    name: "Lugar 1",
    path: "/",
  },
  {
    name: "Lugar 2",
    path: "/",
  },
  {
    name: "Lugar 3",
    path: "/",
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
