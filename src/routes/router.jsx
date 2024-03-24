import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Blog from "../pages/blog/Blog";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Statistics from "../pages/Statistics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
