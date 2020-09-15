import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import AddMember from "./components/AddMember";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<AddMember />
			<Footer />
		</div>
	);
};

export default App;
