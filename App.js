import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import RestaurantDetails from "./src/components/RestaurantDetails";
import Error from "./src/components/Error";
import LoginForm from "./src/components/LoginForm";
import AboutC from "./src/components/AboutClass";
import RestaurantMenu from "./src/components/RestaurantMenuClass";
import Demo from "./src/components/Demo";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/demo",
        element: <Demo />,
      },
      {
        path: "/about",
        element: (
          <About
          // name="Gokul J"
          // details={{
          //   id: "1234",
          //   location: "Perundurai",
          // }}
          />
        ),
      },
      {
        path: "/restaurant/:rId",
        element: <RestaurantDetails />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
    errorElement: <Error />,
  },
]);

const rootReact = ReactDOM.createRoot(document.getElementById("root"));

rootReact.render(<RouterProvider router={appRouter} />);
