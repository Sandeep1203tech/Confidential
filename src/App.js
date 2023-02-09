import SideNavBar from "./SideNavBar/SideNavBar";
import Home from "./Home/Home";
import "./App.css";
import About from "./About/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <SideNavBar />
			<Home />
			<About /> */}
      {/* <About />
			<About />
			<About /> */}
      {/* <SearchBar/> */}
	  
      {/* <Routes>
        <Route path="/" element={<Home/>} />
		<Route path="/SideNavBar" element={<SideNavBar />} />
        <Route path="/About" element={<About />} />
      </Routes> */}
    </div>
  );
}

export default App;

// import React from "react";
// import { Route, Routes } from "react-router-dom";
// // import EE from './EE/EE';
// // import Contact from './Contact/Contact';
// import Home from './Home/Home';
// import About from "./About/About";

// const App = () => {
// 	return (
// 		<>
//          <Routes>
// 	          <Route path = '/' element={<Home/>} />
// 			  <Route path = '/About' element={<About/>} />
//          </Routes>

// 		</>
// 	);
// };

// export default App;
