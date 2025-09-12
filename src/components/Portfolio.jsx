"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function Portfolio() {
	return (
		<section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
			<div className="container">
				<div className="mb-12 md:mb-18 lg:mb-20">
					<div className="mx-auto max-w-lg text-center">
						<p className="mb-3 font-semibold md:mb-4">Our Work</p>
						<h2 className="mb-5 md:mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
							Explore Our Portfolio
						</h2>
						<p className="md:text-md">
							Transforming ideas into impactful designs.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-12 md:gap-16 lg:gap-20">
					<div>
						<div>
							<a
								href="https://www.tokspace.cloud"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="./Tokspace_Homepage.png"
									className="w-full object-cover"
									alt="Tokspace website cover"
								/>
							</a>
						</div>
						<div className="mt-5 grid grid-cols-1 items-start justify-between gap-6 md:mt-6 md:grid-cols-2 md:gap-20">
							<div>
								<h3 className="text-xl font-bold md:text-2xl">
									1) Tokspace <span className="italic">(In Progress)</span>
								</h3>
								<div className="mt-3 flex flex-wrap gap-2 md:mt-4">
									<span className="px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 font-semibold text-sm tracking-wider rounded-full border border-primary-200/50">
										Branding Identity
									</span>
									<span className="px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 font-semibold text-sm tracking-wider rounded-full border border-primary-200/50">
										Full Stack Cloud Development
									</span>
									<span className="px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 font-semibold text-sm tracking-wider rounded-full border border-primary-200/50">
										Industrial Design
									</span>
								</div>
							</div>
							<div>
								<p>
									Tokspace empowers creators in Indonesia with cutting-edge 3D
									printing technology and modular design kits. Located in Medan,
									Indonesia.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-12 flex justify-center md:mt-18 lg:mt-20" />
			</div>
		</section>
	);
}

export default Portfolio;
