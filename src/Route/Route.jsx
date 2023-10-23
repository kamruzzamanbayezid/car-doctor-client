import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";

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
                  }
            ]
      }
])

export default router;