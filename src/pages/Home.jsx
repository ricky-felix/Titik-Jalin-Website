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
			<div className="z-50 sticky top-0 left-0 right-0 bg-white">
				<Navbar />
			</div>

			{/* Main Content */}
			<main id="main-content">
				{/* Hero Section */}
				<section>
					<Header />
				</section>

				<div>
					<Sliders />
				</div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col items-center justify-center py-8 lg:py-12 w-full">
						<motion.section
							className="relative py-20 md:py-32"
							initial={{ y: 12 }}
							whileInView={{ y: 0 }}
							transition={{ duration: 0.3 }}
							viewport={{ once: true, margin: "-150px" }}
						>
							<div id="about-us">
								<CorePrinciples />
							</div>
						</motion.section>

						{/* Quote with elegant entrance */}
						<motion.div
							className="w-full"
							initial={{ scale: 0.95 }}
							whileInView={{ scale: 1 }}
							transition={{ duration: 0.3 }}
							viewport={{ once: true, margin: "-100px" }}
						>
							<Quote />
						</motion.div>

						{/* Banner Section */}
						<motion.section
							className="relative"
							initial={{ scale: 0.95 }}
							whileInView={{ scale: 1 }}
							transition={{ duration: 0.3 }}
							viewport={{ once: true, margin: "-100px" }}
						>
							<div id="process">
								<Banner />
							</div>
						</motion.section>
					</div>
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col items-center justify-center w-full">
						<ThreeStepDesignProcess />
						<motion.section
							className="relative py-20 md:py-32"
							initial={{ y: 12 }}
							whileInView={{ y: 0 }}
							transition={{ duration: 0.3 }}
							viewport={{ once: true, margin: "-100px" }}
						>
							{/* Portfolio with staggered animation */}
							<motion.div
								className="w-full"
								initial={{ y: 40 }}
								whileInView={{ y: 0 }}
								transition={{ duration: 0.3 }}
								viewport={{ once: true, margin: "-100px" }}
							>
								<div id="our-work">
									<Portfolio />
								</div>
							</motion.div>

							{/* CTA with dynamic entrance */}
							<motion.div
								className="w-full"
								initial={{ y: 50 }}
								whileInView={{ y: 0 }}
								transition={{ duration: 0.3 }}
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

			{/* Location Section */}
			<motion.div
				className="w-full border-t border-black/10 bg-white"
				initial={{ y: 12 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
			>
				<div className="mx-auto max-w-7xl px-[5%] py-10 flex flex-col items-center gap-2 text-center">
					<p className="text-xs font-semibold uppercase tracking-widest text-black/40">Based In</p>
					<p className="text-2xl font-bold tracking-tight text-black">Medan, Indonesia</p>
					<p className="text-sm text-black/50">Working with clients across the archipelago and beyond.</p>
				</div>
			</motion.div>

			{/* Footer */}
			<div className="z-50 bg-white">
				<Footer />
			</div>
		</>
	);
}

export default Home;
