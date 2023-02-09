import SideNavBar from "./SideNavBar/SideNavBar";
import Home from "./Home/Home";
import "./App.css";
import AboutEE from "./About/AboutEE";
import AboutCSE from "./About/AboutCSE";
import AboutECE from "./About/AboutECE";
import AboutCHE from "./About/AboutCHE";
import AboutCIVIL from "./About/AboutCIVIL";
import AboutBIOTECH from "./About/AboutBIOTECH";
import AboutMECH from "./About/AboutMECH";
import EE from "./EE/EE";
import ErrorPage from "./ErrorPage/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          
          <Home /> <AboutEE /> <AboutCSE/> <AboutECE/> <AboutCHE/> <AboutCIVIL/> <AboutBIOTECH/> <AboutMECH/>
          
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/EE",
      element: <EE />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <div className="App">
      <SideNavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
