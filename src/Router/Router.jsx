import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";

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
      ],
    },
  ]);