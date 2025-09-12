import React from "react";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import PageNotFound from "../components/PageNotFound";

export function NotFound404() {
	return (
		<>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center justify-center py-8 lg:py-12 w-full">
					<PageNotFound />
				</div>
			</div>
		</>
	);
}

export default NotFound404;
