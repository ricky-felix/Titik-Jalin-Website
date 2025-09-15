"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

import portfolioProjects from "../data/portfolioData.json";

export function Portfolio() {
	return (
		<section
			id="relume"
			className="px-[5%] py-16 md:py-24 lg:py-28  min-h-screen"
		>
			<div className="container">
				<div className="mb-12 md:mb-18 lg:mb-20">
					<div className="mx-auto max-w-lg text-center">
						<p className="mb-3 font-semibold md:mb-4">Our Work</p>
						<h2 className="mb-5 md:mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
							Explore Our Portfolio
						</h2>
						<p className="md:text-md text-slate-600">
							Transforming ideas into impactful designs.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-12 md:gap-16 lg:gap-20">
					{portfolioProjects.map((project) => (
						<div key={project.id} className="group relative">
							{/* Glassmorphism Card */}
							<div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/15 hover:border-white/30">
								{/* Content */}
								<div className="relative z-10">
									{/* Image Container with Animation */}
									<div className="relative overflow-hidden shadow-lg">
										<a
											href={project.url}
											target="_blank"
											rel="noreferrer"
											className="block relative group/image"
										>
											{/* External Link Indicator */}
											<div className="absolute top-4 right-4 z-20 ">
												<div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
													<svg
														className="w-5 h-5"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
														/>
													</svg>
												</div>
											</div>

											{/* Hover Overlay */}
											<div className="absolute inset-0 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 z-10" />

											{/* Image */}
											<img
												src={project.image}
												className="w-full object-cover transform group-hover/image:scale-105 transition-transform duration-500"
												alt={project.alt}
											/>
										</a>
									</div>

									{/* Project Details */}
									<div className="mt-6 grid grid-cols-1 items-start justify-between gap-6 md:mt-8 md:grid-cols-2 md:gap-12">
										<div>
											<h3 className="text-xl font-bold md:text-2xl text-slate-900 mb-4">
												{project.id}) {project.title}{" "}
												{project.status && (
													<span
														className={`italic ${project.statusColor} font-medium`}
													>
														({project.status})
													</span>
												)}
											</h3>
											<div className="flex flex-wrap gap-3">
												{project.tags.map((tag, index) => (
													<span
														key={index}
														className={`px-4 py-2 font-semibold text-sm tracking-wider rounded-full border border-black backdrop-blur-sm ${tag.hoverColor} transition-colors duration-300`}
													>
														{tag.name}
													</span>
												))}
											</div>
										</div>
										<div className="backdrop-blur-sm p-6 border border-white/30">
											<p className="text-slate-700 leading-relaxed">
												{project.description}
											</p>

											{/* Visit Website Button */}
											<a
												href={project.url}
												target="_blank"
												rel="noreferrer"
												className="inline-flex items-center mt-4 px-4 py-2 font-medium border transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
											>
												Visit Website
												<svg
													className="ml-2 w-4 h-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
													/>
												</svg>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-12 flex justify-center md:mt-18 lg:mt-20" />
			</div>
		</section>
	);
}

export default Portfolio;
