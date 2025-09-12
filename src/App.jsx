import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound404 from "./pages/NotFound404";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound404 />} />
			</Routes>
		</div>
	);
}

export default App;
