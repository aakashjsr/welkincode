import { createBrowserRouter } from "react-router-dom";
import LostPage from "./pages/404";
import Home from "./pages/Home/Home";
import Project from "./pages/Project";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project/:slug",
    element: <Project />,
  },
  {
    path: "*",
    element: <LostPage />,
  },
]);

export default AppRouter;
