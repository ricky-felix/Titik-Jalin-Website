import React from "react";

import "../index.css";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import Header from "../components/Header";
import Sliders from "../components/Sliders";
import Services from "../components/Services";
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
			<div className="z-50 sticky top-0 left-0 right-0 bg-[#21545c]">
				<Navbar />
			</div>

			{/* Main Content */}
			<main id="main-content">
				<Header />

				<Sliders />

				<Services />

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col items-center justify-center py-8 lg:py-12 w-full">
						<section className="relative py-20 md:py-32">
							<div id="about-us">
								<CorePrinciples />
							</div>
						</section>

						<div className="w-full">
							<Quote />
						</div>

						<section className="relative">
							<div id="process">
								<Banner />
							</div>
						</section>
					</div>
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col items-center justify-center w-full">
						<ThreeStepDesignProcess />
						<section className="relative py-20 md:py-32">
							<div id="our-work">
								<Portfolio />
							</div>

							<div id="contact-us">
								<Connect />
							</div>
						</section>
					</div>
				</div>
			</main>

			{/* Location Section */}
			<div className="w-full border-t border-white/10 bg-[#21545c]">
				<div className="mx-auto max-w-7xl px-[5%] py-10 flex flex-col items-center gap-2 text-center">
					<p className="text-xs font-semibold uppercase tracking-widest text-white/50">Based In</p>
					<p className="text-2xl font-bold tracking-tight text-white">Medan, Indonesia</p>
					<p className="text-sm text-white/60">Working with clients across the archipelago and beyond.</p>
				</div>
			</div>

			{/* Footer */}
			<div className="z-50 bg-[#21545c]">
				<Footer />
			</div>
		</>
	);
}

export default Home;
