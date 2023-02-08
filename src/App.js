import SideNavBar from "./SideNavBar/SideNavBar";
import Home from "./Home/Home";
import "./App.css"
import About from "./About/About";
// import SearchBar from "./SearchBar/SearchBar";


function App() {
	
	return (
		<div className="App">
			<SideNavBar />
			<Home />
			<About />
			{/* <About />
			<About />
			<About /> */}
			{/* <SearchBar/> */}
		</div>

	);
}

export default App;