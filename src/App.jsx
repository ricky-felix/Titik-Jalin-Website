import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound404 from "./pages/NotFound404";

function App() {
	return (
		<div>
			{/* Skip to main content link for accessibility */}
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded focus:shadow-lg"
			>
				Skip to main content
			</a>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound404 />} />
			</Routes>
		</div>
	);
}

export default App;
