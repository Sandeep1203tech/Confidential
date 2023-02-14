import SideNavBar from "./SideNavBar/SideNavBar";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
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
import SignUpContainer from "./SignUp/SignUpContainer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SignIn from "./SignIn/SignIn";
import ECC331 from './EE/Semester3/ECC331';
import roadmap from './EE/Semester3/roadmap';

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
    {
      path: "/Profile",
      element: <Profile />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/SignUp",
      element:
    <MuiThemeProvider>
      <SignUpContainer />,
     </MuiThemeProvider>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/SignIn",
      element: <SignIn />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/EE/ECC331",
      element: <ECC331 />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/EE/roadmap",
      element: <ECC331 />,
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
