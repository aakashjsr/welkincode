import { RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./Routes";
import "./scss/global.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={AppRouter} />
    </div>
  );
}

export default App;
