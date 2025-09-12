"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function PageNotFound() {
	return (
		<div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-50/30 to-accent-50/20">
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					className="absolute top-20 -right-32 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 180, 360],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
				<motion.div
					className="absolute bottom-32 -left-32 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl"
					animate={{
						scale: [1.1, 1, 1.1],
						x: [0, 30, 0],
						y: [0, -30, 0],
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent-500/12 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.3, 1],
						opacity: [0.3, 0.7, 0.3],
					}}
					transition={{
						duration: 18,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			<section className="relative z-10 px-[5%] py-12 md:py-16 lg:py-20">
				<div className="container mx-auto">
					<motion.div
						className="relative flex min-h-[32rem] flex-col items-center justify-center p-8 text-center md:min-h-[40rem] md:p-16"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						{/* Gradient backdrop */}
						<div className="absolute inset-0 bg-gradient-to-br from-white/60 via-primary-50/40 to-accent-50/30 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl"></div>

						<div className="relative w-full max-w-2xl">
							{/* 404 Number */}
							<motion.div
								className="mb-8"
								initial={{ scale: 0.5, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								<span className="text-8xl md:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-600 bg-clip-text leading-none">
									404
								</span>
							</motion.div>

							{/* Main heading */}
							<motion.h1
								className="mb-6 text-3xl font-bold text-neutral-800 md:text-4xl lg:text-5xl"
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
							>
								Oops! Page Not Found
							</motion.h1>

							{/* Description */}
							<motion.p
								className="mb-8 text-lg text-neutral-600 md:text-xl leading-relaxed"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6 }}
							>
								The page you're looking for seems to have wandered off into the
								digital void. <br className="hidden md:block" />
								Let's get you back to familiar territory!
							</motion.p>

							{/* CTA Button */}
							<motion.div
								className="flex flex-wrap items-center justify-center gap-4"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: 0.8 }}
							>
								<Link to="/">
									<motion.div
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										transition={{ type: "spring", stiffness: 400, damping: 17 }}
									>
										<Button
											title="Return Home"
											variant="primary"
											className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
										>
											Return Home
										</Button>
									</motion.div>
								</Link>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}

export default PageNotFound;
