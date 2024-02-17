import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Intro from "../pages/Home/home/Intro/Intro";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
            path:'/v',
            element:<Intro></Intro>
        }
      ],
    },
  ]);