import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Main from "../components/Layout/Layout";
import Contact from "../pages/contact";
import About from "../pages/About";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
