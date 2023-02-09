import SideNavBar from "./SideNavBar/SideNavBar";
import Home from "./Home/Home";
import "./App.css";
import About from "./About/About";
import ErrorPage from "./ErrorPage/ErrorPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <About />,
      errorElement: <ErrorPage />,
    }
  ]);
  return (
    <div className="App">
      <SideNavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;