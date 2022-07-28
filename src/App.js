import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Error from "./pages/Error";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/location/:id" element={<Location />} />
				{/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
				<Route path="/*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
