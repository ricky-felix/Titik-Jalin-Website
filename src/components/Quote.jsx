"use client";

import React from "react";
import { motion } from "framer-motion";

export function Quote() {
	return (
		<section id="relume" className="flex justify-center items-center">
			<div className="relative z-10 max-w-4xl text-center h-screen flex flex-col justify-center items-center">
				<div className="mb-12 md:mb-16">
					<div className="flex items-center justify-center mb-8">
						<div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-400"></div>
						<motion.div
							className="mx-4 w-3 h-3 bg-primary-500 rounded-full"
							animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
							transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
						/>
						<div className="h-px w-16 bg-gradient-to-l from-transparent to-primary-400"></div>
					</div>

					<p className="text-xl md:text-2xl font-semibold text-neutral-700 tracking-wide">
						What is the meaning of{" "}
						<span className="font-extrabold">Titik Jalin</span>?
					</p>
				</div>

				<div className="relative">
					<div className="relative z-10">
						<div className="text-2xl md:text-3xl lg:text-4xl leading-[1.4] font-bold text-neutral-800 mb-8">
							<span className="italic">"</span>Every great creation begins with
							a single&nbsp;
							<span className="relative inline-block">
								<span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold">
									point of inspiration
								</span>
								<motion.div
									className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"
									initial={{ width: 0 }}
									animate={{ width: "100%" }}
									transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
								/>
							</span>
							. From that initial dot, we weave together experiences that flow
							&nbsp;into meaningful connections.
							<span className="italic">"</span>
						</div>

						<div className="flex items-center justify-center">
							<div className="flex flex-col items-center justify-center mt-8">
								<div className="text-center">
									<span className="font-bold">Titik</span>&nbsp;(Dot)
								</div>

								<motion.div
									className="bg-primary-500 rounded-full"
									animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
									transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
								/>

								<div className="text-center">
									<span className="font-bold">Jalin</span>&nbsp;(Weave /
									Connection lines)
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Quote;
