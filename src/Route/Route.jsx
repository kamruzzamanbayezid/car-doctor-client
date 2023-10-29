import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import SIgnUp from "../Pages/SIgnUp/SIgnUp";
import Login from "../Pages/Login/Login";
import Booking from "../Pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import BookingsDetails from "../Pages/Booking/BookingsDetails";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Root></Root>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/about',
                        element: <About></About>
                  },
                  {
                        path: '/signup',
                        element: <SIgnUp></SIgnUp>
                  },
                  {
                        path: '/login',
                        element: <Login></Login>
                  },
                  {
                        path: '/booking/:id',
                        element: <PrivateRoute><Booking></Booking></PrivateRoute>,
                        loader: ({ params }) => fetch(`http://localhost:5001/services/${params.id}`)
                  },
                  {
                        path: '/myBookings',
                        element: <PrivateRoute><BookingsDetails></BookingsDetails></PrivateRoute>,
                  }
            ]
      }
])

export default router;