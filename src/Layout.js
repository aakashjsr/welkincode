import { Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./Routes";
import "./scss/global.scss";

function Layout() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
