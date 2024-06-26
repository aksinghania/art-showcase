import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Store from "./pages/Store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Wrapper = ({ Component }) => (
  <>
    <Navbar routes={routesobject} />
    <Component />
  </>
);
const routesobject = {
  Home: "/art-showcase/",
  Gallery: "/art-showcase/Gallery",
  Testimonials: "/art-showcase/Testimonials",
  Store: "/art-showcase/Store",
};
const routes = [
  {
    path: routesobject.Gallery,
    element: <Wrapper Component={Gallery} />,
  },
  {
    path: routesobject.Home,
    element: <Wrapper Component={Home} />,
  },
  {
    path: routesobject.Testimonials,
    element: <Wrapper Component={Testimonials} />,
  },
  {
    path: routesobject.Store,
    element: <Wrapper Component={Store} />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
