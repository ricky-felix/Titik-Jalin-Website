"use client";

import React from "react";
import { motion } from "framer-motion";

export function Quote() {
	return (
		<section id="relume" className="flex justify-center items-center">
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.3, 1],
						x: [0, 60, 0],
						y: [0, -40, 0],
					}}
					transition={{
						duration: 28,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-1/4 -right-40 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"
					animate={{
						scale: [1.2, 1, 1.2],
						rotate: [0, 270, 360],
					}}
					transition={{
						duration: 35,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
				<motion.div
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent-500/12 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.5, 1],
						opacity: [0.4, 0.9, 0.4],
					}}
					transition={{
						duration: 22,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			<div className="relative z-10 max-w-4xl text-center h-screen flex flex-col justify-center items-center">
				{/* Question section */}
				<motion.div
					className="mb-12 md:mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					{/* Decorative line */}
					<div className="flex items-center justify-center mb-8">
						<div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-400"></div>
						<motion.div
							className="mx-4 w-3 h-3 bg-primary-500 rounded-full"
							animate={{
								scale: [1, 1.4, 1],
								opacity: [0.7, 1, 0.7],
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
						<div className="h-px w-16 bg-gradient-to-l from-transparent to-primary-400"></div>
					</div>

					<motion.p
						className="text-xl md:text-2xl font-semibold text-neutral-700 tracking-wide"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
					>
						What is the meaning of{" "}
						<span className="font-extrabold">Titik Jalin</span>?
					</motion.p>
				</motion.div>

				{/* Main quote section */}
				<motion.div
					className="relative"
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.4 }}
					viewport={{ once: true }}
				>
					{/* Glassmorphism quote card */}

					<div className="relative z-10">
						<motion.div
							className="text-2xl md:text-3xl lg:text-4xl leading-[1.4] font-bold text-neutral-800 mb-8"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							viewport={{ once: true }}
						>
							<span className="italic">"</span>Every great creation begins with
							a single
							<span className="relative inline-block">
								<span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold">
									point of inspiration
								</span>
								{/* Animated underline */}
								<motion.div
									className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"
									initial={{ width: 0 }}
									whileInView={{ width: "100%" }}
									transition={{ duration: 1, delay: 1.2 }}
									viewport={{ once: true }}
								/>
							</span>
							. From that initial dot, we weave together experiences that flow
							into meaningful connections.
							<span className="italic">"</span>
						</motion.div>

						{/* Connection visualization */}
						<div className="flex items-center justify-center">
							<motion.div
								className="flex flex-col items-center justify-center mt-8"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 1 }}
								viewport={{ once: true }}
							>
								<div className="text-center">
									<span className="font-bold">Titik</span>&nbsp;(Dot)
								</div>

								<motion.div
									className="bg-primary-500 rounded-full"
									animate={{
										scale: [1, 1.3, 1],
										opacity: [0.8, 1, 0.8],
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: "easeInOut",
									}}
								/>

								<div className="text-center">
									<span className="font-bold">Jalin</span>&nbsp;(Weave /
									Connection lines)
								</div>
							</motion.div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default Quote;
