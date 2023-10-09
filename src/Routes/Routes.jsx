
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import EventServices from "../Components/EventServices/EventServices";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import EventCardDetails from "../Components/EventCardDeatails/EventCardDeatails";
import PrivateRoute from "./PrivateRoute";



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
        loader: () => fetch("/eventData.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <Register></Register>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Routes;