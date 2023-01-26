import { createBrowserRouter } from "react-router-dom";
import LostPage from "./pages/404";
import Home from "./pages/Home/Home";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <LostPage />,
  },
]);

export default AppRouter;
