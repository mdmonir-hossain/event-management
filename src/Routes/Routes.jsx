
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import EventServices from "../Components/EventServices/EventServices";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import EventCardDetails from "../Components/EventCardDetails/EventCardDeatails";
import Login from "../Components/Login/Login";



const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/eventData.json"),
      },
      {
        path: "/services/:id",
        element: <EventCardDetails></EventCardDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default Routes;