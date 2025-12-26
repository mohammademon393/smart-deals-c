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
import AuthProvider from './Contexts/AuthProvider';
import MyProducts from './Components/MyProducts';
import MyBids from './Components/MyBids';



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
      {
        path: '/myProducts',
        Component: MyProducts
      },
      {
        path: '/myBids',
        Component: MyBids
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>
);
