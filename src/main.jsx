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
import PrivetRoute from './Contexts/PrivetRoute';
import MyProducts from './pages/MyProducts';
import MyBids from './pages/MyBids';



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
        element: <PrivetRoute>
          <MyProducts></MyProducts>
        </PrivetRoute>
      },
      {
        path: '/myBids',
        element: <PrivetRoute>
          <MyBids></MyBids>
        </PrivetRoute>
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
