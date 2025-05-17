import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./Components/Home";
import AddCoffee from "./Components/AddCoffee";
import UpdateCoffee from "./Components/UpdateCoffee";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import AuthProvider from "./Context/AuthProvider";
import User from "./Components/User";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index : true,
        loader : () => fetch('http://localhost:4000/coffees'),
        Component: Home
      },
      {
        path : 'addCoffee',
        Component: AddCoffee
      },
      {
        path : 'updateCoffee/:id',
        loader: ({params}) => fetch(`http://localhost:4000/coffees/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path : 'signin',
        Component: SignIn
      },
      {
        path : 'signup',
        Component : SignUp
      },
      {
        path : 'users',
        loader : () => fetch('http://localhost:4000/user'),
        Component : User
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
