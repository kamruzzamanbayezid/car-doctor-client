import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import SIgnUp from "../Pages/SIgnUp/SIgnUp";

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
                  }
            ]
      }
])

export default router;