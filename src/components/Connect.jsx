"use client";

import { Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const slideVariants = {
	hidden: {
		opacity: 0,
		height: 0,
		y: 50,
	},
	visible: {
		opacity: 1,
		height: "auto",
		y: 0,
	},
};

export const CTA = (props) => {
	const { tagline, heading, description, features } = {
		...ConnectDefaults,
		...props,
	};

	const [hoveredFeatureIdx, setHoveredFeatureIdx] = useState(null);

	return (
		<section className="relative overflow-hidden bg-gradient-to-br px-[5%] py-16 md:py-24 lg:py-28">
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					className="absolute top-1/4 -left-40 w-96 h-96 bg-primary-500/15"
					animate={{
						scale: [1, 1.4, 1],
						x: [0, 80, 0],
						y: [0, -60, 0],
					}}
					transition={{
						duration: 30,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-1/3 -right-32 w-80 h-80 bg-secondary-500/12"
					animate={{
						scale: [1.3, 1, 1.3],
						rotate: [0, 180, 360],
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
				<motion.div
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-500/10"
					animate={{
						scale: [1, 1.6, 1],
						opacity: [0.3, 0.8, 0.3],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			<div className="relative z-10 container">
				<motion.div
					className="mx-auto mb-12 w-full max-w-4xl text-center md:mb-18 lg:mb-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					{/* Decorative line */}
					<div className="flex items-center justify-center mb-8">
						<div className="h-px w-20 bg-gradient-to-r from-transparent to-primary-400"></div>
						<motion.div
							className="mx-4 w-3 h-3 bg-primary-400"
							animate={{
								scale: [1, 1.5, 1],
								opacity: [0.6, 1, 0.6],
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
						<div className="h-px w-20 bg-gradient-to-l from-transparent to-primary-400"></div>
					</div>

					<motion.p
						className="mb-3 font-semibold text-primary-300 tracking-wide md:mb-4"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
					>
						{tagline}
					</motion.p>
					<motion.h2
						className="mb-5 md:mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-white"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
					>
						<span className="bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 bg-clip-text text-black">
							{heading}
						</span>
					</motion.h2>
					<motion.p
						className="md:text-lg text-black"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						viewport={{ once: true }}
					>
						{description}
					</motion.p>
				</motion.div>
				<motion.div
					className="flex flex-col justify-between gap-6 md:flex-row md:gap-8"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					viewport={{ once: true }}
				>
					{features.map((feature, index) => (
						<motion.a
							key={index}
							href={feature.url}
							className="group relative flex w-full flex-col overflow-hidden md:w-1/2 lg:h-full lg:transition-all lg:duration-500 lg:hover:w-[70%] lg:hover:scale-[1.02]"
							onMouseEnter={() => setHoveredFeatureIdx(index)}
							onMouseLeave={() => setHoveredFeatureIdx(null)}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
							viewport={{ once: true }}
							whileHover={{ y: -8 }}
						>
							{/* Image container with enhanced effects */}
							<div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
								{/* Gradient overlay */}
								<div className="absolute inset-0 bg-gradient-to-br  z-10" />
								{/* Dynamic color overlay based on index */}
								<div
									className={`absolute inset-0 z-20 transition-opacity duration-500 ${
										index === 0
											? "bg-gradient-to-br from-primary-500/20 to-secondary-500/30"
											: "bg-gradient-to-br from-secondary-500/20 to-accent-500/30"
									} group-hover:opacity-80`}
								/>
								<motion.img
									src={feature.image.src}
									alt={feature.image.alt}
									className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
									whileHover={{ scale: 1.05 }}
								/>
							</div>

							{/* Content container with glassmorphism */}
							<div className="relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8 lg:p-12 z-30">
								{/* Glassmorphism background */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
								<div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-500 lg:group-hover:bg-gradient-to-t lg:group-hover:from-black/90 lg:group-hover:via-black/60 lg:group-hover:to-black/20" />

								<div className="relative z-10 text-white ">
									{/* Animated badge */}
									<motion.div
										className={`inline-flex items-center py-2 text-sm font-semibold mb-4 ${
											index === 0
												? "bg-primary-500/20 text-primary-200 border-primary-400/30"
												: "bg-secondary-500/20 text-secondary-200 border-secondary-400/30"
										}`}
										whileHover={{ scale: 1.05 }}
										transition={{ type: "spring", stiffness: 400, damping: 10 }}
									>
										<motion.div
											className={`${
												index === 0 ? "bg-primary-400" : "bg-secondary-400"
											}`}
											animate={{
												scale: [1, 1.3, 1],
												opacity: [0.7, 1, 0.7],
											}}
											transition={{
												duration: 2,
												repeat: Infinity,
												ease: "easeInOut",
												delay: index * 0.5,
											}}
										/>
										{feature.tagline}
									</motion.div>

									<motion.h3
										className="mb-2 text-2xl leading-[1.4] font-bold md:text-3xl lg:text-4xl text-white"
										whileHover={{ x: 8 }}
										transition={{ type: "spring", stiffness: 400, damping: 25 }}
									>
										{feature.heading}
									</motion.h3>

									{/* Mobile content */}
									<div className="lg:hidden">
										<p className="mt-5 text-neutral-200 md:mt-6">
											{feature.description}
										</p>
										<div className="mt-6 md:mt-8">
											<motion.div
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
											>
												<Button
													{...feature.button}
													className={`bg-gradient-to-r border text-white font-semibold px-6 py-3 transition-all duration-300 ${
														index === 0
															? "from-primary-500 to-secondary-500 border-primary-400/50 hover:from-primary-400 hover:to-secondary-400"
															: "from-secondary-500 to-accent-500 border-secondary-400/50 hover:from-secondary-400 hover:to-accent-400"
													}`}
												>
													Say Hello
												</Button>
											</motion.div>
										</div>
									</div>
								</div>

								{/* Desktop hover content with enhanced animations */}
								<AnimatePresence>
									{hoveredFeatureIdx === index && (
										<motion.div
											className="z-10 hidden lg:block lg:w-[440px]"
											variants={{
												hidden: {
													opacity: 0,
													height: 0,
													y: 30,
													scale: 0.95,
												},
												visible: {
													opacity: 1,
													height: "auto",
													y: 0,
													scale: 1,
												},
											}}
											initial="hidden"
											animate="visible"
											exit="hidden"
											transition={{ duration: 0.4, ease: "easeOut" }}
										>
											{/* Glassmorphism content card */}
											<div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 border border-white/20">
												<motion.p
													className="text-neutral-200 leading-relaxed"
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ delay: 0.1 }}
												>
													{feature.description}
												</motion.p>
												<motion.div
													className="mt-6"
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ delay: 0.2 }}
												>
													<motion.div
														whileHover={{ scale: 1.05, y: -2 }}
														whileTap={{ scale: 0.95 }}
													>
														<Button
															{...feature.button}
															className={`bg-gradient-to-r border text-white font-semibold px-8 py-3  transition-all duration-300 shadow-lg ${
																index === 0
																	? "from-primary-500 to-secondary-500 border-primary-400/50 hover:from-primary-400 hover:to-secondary-400 hover:shadow-primary-500/25"
																	: "from-secondary-500 to-accent-500 border-secondary-400/50 hover:from-secondary-400 hover:to-accent-400 hover:shadow-secondary-500/25"
															}`}
														>
															Send us an email
														</Button>
													</motion.div>
												</motion.div>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</motion.a>
					))}
				</motion.div>
			</div>
		</section>
	);
};

// Make sure ConnectDefaults is declared before being used
export const ConnectDefaults = {
	tagline: "Contact Us",
	heading: "Let Us Connect Your Dot",
	description: "Join us in creating meaningful connections and experiences.",
	features: [
		{
			tagline: "Quotation",
			url: "#",
			heading: "Reach Out and Start Your Journey.",
			description:
				"We're excited to hear from you and explore how we can collaborate together.",
			image: {
				src: "IT_Office_Hand.png",
				alt: "Relume placeholder image 1",
			},
			button: {
				variant: "link",
				size: "link",
				iconRight: <RxChevronRight />,
			},
		},
		{
			tagline: "Collaborate",
			url: "#",
			heading: "Let's Work on a Project Together.",
			description:
				"Your ideas are the dots that can transform into something amazing.",
			image: {
				src: "./Collaborate_Night_Office.png",
				alt: "Relume placeholder image 2",
			},
			button: {
				variant: "link",
				size: "link",
				iconRight: <RxChevronRight />,
			},
		},
	],
};

export default CTA;
