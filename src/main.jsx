import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import Login from './Components/Login';
import SignUp from './Components/SignUp';



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        index:true,
        Component: Home,
      },
      {
        path: '/allProducts',
        Component: AllProducts,
      },
      {
        path: '/singUp',
        Component: SignUp
      },
      {
        path: '/login',
        Component: Login
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
