import React from "react";
import { motion } from "framer-motion";

import "../index.css";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import Header from "../components/Header";
import Sliders from "../components/Sliders";
import CorePrinciples from "../components/CorePrinciples";
import ThreeStepDesignProcess from "../components/ThreeStepDesignProcess";
import Portfolio from "../components/Portfolio";
import Quote from "../components/Quote";
import Connect from "../components/Connect";
import Banner from "../components/Banner";

function Home() {
	return (
		<>
			{/* Navigation */}
			<div className="relative z-50">
				<Navbar />
			</div>

			{/* Main Content */}
			<main>
				{/* Hero Section */}
				<motion.section
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
				>
					<Header />
				</motion.section>

				<div>
					<Sliders />
				</div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col items-center justify-center py-8 lg:py-12 w-full">
						<motion.section
							className="relative py-20 md:py-32"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true, margin: "-150px" }}
						>
							<div id="about-us">
								<CorePrinciples />
							</div>
						</motion.section>

						{/* Quote with elegant entrance */}
						<motion.div
							className="w-full"
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true, margin: "-100px" }}
						>
							<Quote />
						</motion.div>

						{/* Banner Section */}
						<motion.section
							className="relative"
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							viewport={{ once: true, margin: "-100px" }}
						>
							<div id="process">
								<Banner />
							</div>
						</motion.section>
					</div>
				</div>

				<ThreeStepDesignProcess />

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col items-center justify-center w-full">
						<motion.section
							className="relative py-20 md:py-32"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true, margin: "-100px" }}
						>
							{/* Portfolio with staggered animation */}
							<motion.div
								className="w-full"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.1 }}
								viewport={{ once: true, margin: "-100px" }}
							>
								<div id="our-work">
									<Portfolio />
								</div>
							</motion.div>

							{/* CTA with dynamic entrance */}
							<motion.div
								className="w-full"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.3 }}
								viewport={{ once: true, margin: "-100px" }}
							>
								<div id="contact-us">
									<Connect />
								</div>
							</motion.div>
						</motion.section>
					</div>
				</div>
			</main>

			{/* Footer */}
			<div className="relative z-10">
				<Footer />
			</div>
		</>
	);
}

export default Home;
