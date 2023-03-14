import { Container } from "react-bootstrap";
import { Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./Routes";
import "./scss/global.scss";

function Layout() {
  return (
    <Container fluid className="p-0 h-100">
      <Header />
      <Outlet />
    </Container>
  );
}

export default Layout;
