"use client";

import { motion } from "framer-motion";

export function CorePrinciples() {
	return (
		<section className="relative overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
			<div className="relative z-10 container">
				<div className="grid grid-cols-1 items-start gap-x-16 gap-y-12 sm:gap-y-16 md:grid-cols-2">
					{/* Left Column */}
					<div className="flex h-full flex-col justify-between">
						<div className="mb-8 md:mb-12">
							<div className="inline-flex items-center gap-2 mb-6">
								<span className="bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 font-semibold text-sm uppercase tracking-wider">
									About Us
								</span>
								<div className="w-8 h-px bg-gradient-to-l from-primary-500 to-secondary-500"></div>
							</div>

							<h2 className="text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
								<span className="block text-neutral-800 mb-2">
									Our Core Principles That Guide Us
								</span>
							</h2>
						</div>

						<motion.div
							className="relative group"
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
							<div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-white/50">
								<img
									src="Human_Digital.webp"
									className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
									alt="Human Digital - Core Principles Illustration"
									loading="lazy"
								/>
							</div>

							<motion.div
								className="absolute -top-4 -right-4 w-8 h-8 bg-primary-400 rounded-full opacity-60"
								animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
								transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
							/>
							<motion.div
								className="absolute -bottom-6 -left-6 w-6 h-6 bg-secondary-400 rounded-full opacity-50"
								animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.8, 0.5] }}
								transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
							/>
						</motion.div>
					</div>

					{/* Right Column */}
					<div className="flex h-full flex-col justify-between">
						<motion.div
							className="relative group mb-8 md:mb-12"
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<div className="absolute -inset-1 bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
							<div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-white/50">
								<img
									src="./Human_Pen.webp"
									className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
									alt="Human Pen - Design Process Illustration"
									loading="lazy"
								/>
							</div>

							<motion.div
								className="absolute -top-3 -left-3 w-6 h-6 bg-accent-400 rounded-full opacity-70"
								animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
								transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
							/>
						</motion.div>

						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-secondary-50/20 rounded-2xl"></div>
							<p className="text-lg leading-relaxed text-neutral-700">
								At Titik Jalin, we believe in being{" "}
								<strong className="text-primary-600">Human</strong>,{" "}
								<strong className="text-secondary-600">Simple</strong>, and{" "}
								<strong className="text-accent-600">Connected</strong>. These
								principles shape our designs and foster meaningful experiences
								that resonate with people.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CorePrinciples;
