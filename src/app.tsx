import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import {Header} from "./components/header.tsx"
import { Medicine } from "./components/Medicine/medicine.tsx";

const Layout = () => (
  <div>
      <Header/>
      <Outlet />
  </div>
);

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
    element: <Layout />,
    children:[
      {
        path:"/",
        element:<><Medicine/></>
      },
      {
        path:"/LabTest",
        element:<></>
      },
      {
        path:"/Consult",
        element:<></>
      },
      {
        path:"/CancerCare",
        element:<></>
      },
      {
        path:"/Partnership",
        element:<></>
      },
      {
        path:"/Care",
        element:<></>
      },
      {
        path:"/login",
        element:<></>
      },
      {
        path:"/signup",
        element:<></>
      },
      {
        path:"/offers",
        element:<></>
      },
      {
        path:"/NeedHelp",
        element:<></>
      }
    ]
    }
  ]);
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}
