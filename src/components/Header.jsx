"use client";

import React from "react";
import { motion } from "framer-motion";

export function Header() {
	return (
		<section className="relative px-[5%]">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0 z-0">
				<motion.img
					src="./Abstract_Header.webp"
					className="size-full object-cover"
					alt="Abstract design background"
					initial={{ scale: 1.05 }}
					animate={{ scale: 1 }}
					transition={{ duration: 1.2, ease: "easeOut" }}
				/>
				<div className="absolute inset-0 bg-gradient-to-br from-neutral-900/60 via-primary-900/40 to-accent-900/50"></div>
				<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-transparent to-transparent"></div>
			</div>

			{/* Main Content */}
			<div className="flex max-h-[60rem] min-h-svh justify-around">
				<div className="container py-16 md:py-24 lg:py-28">
					<div className="relative z-10 grid h-full auto-cols-fr grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
						<div className="flex flex-col justify-start">
							<div>
								{/* Accent line above heading */}
								<motion.div
									className="mb-6 h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"
									initial={{ width: 0 }}
									animate={{ width: 80 }}
									transition={{ duration: 0.8, delay: 0.3 }}
								/>

								<motion.h1
									className="text-5xl font-bold md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white"
									initial={{ opacity: 0, y: 24 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
								>
									Big ideas start from a single dot grow into greatness
								</motion.h1>
							</div>
						</div>

						{/* Description Section */}
						<div className="flex flex-col justify-end">
							<motion.div
								className="mx-[7.5%] md:mx-0"
								initial={{ opacity: 0, y: 24 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
							>
								<p className="text-text-alternative md:text-md text-white">
									Every great journey begins with a single step. Join us as we
									transform your vision into reality, creating digital
									experiences that inspire and connect.
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div>
				<motion.div
					className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
				>
					<div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
						<motion.div
							className="w-1 h-3 bg-white/60 rounded-full mt-2"
							animate={{ opacity: [0.4, 1, 0.4] }}
							transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default Header;
