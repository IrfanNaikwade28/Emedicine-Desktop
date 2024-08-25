import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import {Header} from "./components/header.tsx"
import { Medicine } from "./components/Medicine/medicine.tsx";
import { LabTests } from "./components/LabTests/labTests.tsx";
import { Consult } from "./components/Consult/consult.tsx";

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
        element:<><LabTests/></>
      },
      {
        path:"/Consult",
        element:<><Consult/></>
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
