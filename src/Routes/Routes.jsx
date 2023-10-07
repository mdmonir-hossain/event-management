
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import EventServices from "../Components/EventServices/EventServices";
import ErrorPage from "../Components/ErrorPage/ErrorPage";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/services",
        element:<EventServices></EventServices>,
      },
    ],
  },
]);

export default Routes;