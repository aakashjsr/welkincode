import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import LostPage from "./pages/404";
import Home from "./pages/Home/Home";
import Ecrawl from "./pages/Projects/Ecrawl";
import Homesy from "./pages/Projects/Homesy";
import HsSales from "./pages/Projects/HsSales";
import Inibii from "./pages/Projects/Inibii";
import InterestMiner from "./pages/Projects/InterestMiner";
import SourceBox from "./pages/Projects/SourceBox";
import TheGoodTrends from "./pages/Projects/TheGoodTrends";
import TripYork from "./pages/Projects/TripYork";

const AppRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project",
        children: [
          {
            path: "hs_sales",
            element: <HsSales />,
          },
          {
            path: "interest_miner",
            element: <InterestMiner />,
          },
          {
            path: "tgt",
            element: <TheGoodTrends />,
          },
          {
            path: "sourcebox",
            element: <SourceBox />,
          },
          {
            path: "homesy",
            element: <Homesy />,
          },
          {
            path: "ecrawl",
            element: <Ecrawl />,
          },
          {
            path: "trip_york",
            element: <TripYork />,
          },
          {
            path: "inibii",
            element: <Inibii />,
          },
        ],
      },
      {
        path: "*",
        element: <LostPage />,
      },
    ],
  },
]);

export default AppRouter;
