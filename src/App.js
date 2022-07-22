import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import About from "./pages/About";
import Home from "./pages/Home";
//import Error from "./pages/Error";
//import Logement from "./pages/Logement";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/about" element={<About />} />
				<Route path="/logement" element={<Logement />} /> */}
				{/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
				{/* <Route path="/*" element={<Error />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
