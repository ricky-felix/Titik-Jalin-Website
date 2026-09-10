"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { useReveal } from "../lib/useReveal";

export const CTA = (props) => {
	const { tagline, heading, description, features } = {
		...ConnectDefaults,
		...props,
	};

	const [ref, visible] = useReveal();

	return (
		<section className="relative overflow-hidden px-[5%]">
			{/* Background decorative elements (static — kept subtle, no motion) */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary-500/15" />
				<div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-secondary-500/12" />
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-500/10" />
			</div>

			<div
				ref={ref}
				className={`reveal relative z-10 container ${
					visible ? "is-visible" : ""
				}`}
			>
				<div className="mx-auto mb-12 w-full max-w-4xl text-center md:mb-18 lg:mb-20">
					{/* Decorative line */}
					<div className="flex items-center justify-center mb-8">
						<div className="h-px w-20 bg-gradient-to-r from-transparent to-primary-400"></div>
						<div className="anim-pulse-dot mx-4 w-3 h-3 bg-primary-400" />
						<div className="h-px w-20 bg-gradient-to-l from-transparent to-primary-400"></div>
					</div>

					<p className="mb-3 font-semibold text-primary-300 tracking-wide md:mb-4">
						{tagline}
					</p>
					<h2 className="mb-5 md:mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-white">
						<span className="bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 bg-clip-text text-white">
							{heading}
						</span>
					</h2>
					<p className="md:text-lg text-neutral-200">{description}</p>
				</div>
				<div className="flex flex-col justify-between gap-6 md:flex-row md:gap-8">
					{features.map((feature, index) => (
						<a
							key={index}
							className="group relative flex w-full flex-col overflow-hidden md:w-1/2 transition-transform duration-500 hover:-translate-y-2 lg:h-full lg:hover:w-[70%] lg:hover:scale-[1.02]"
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
								<img
									src={feature.image.src}
									alt={feature.image.alt}
									className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
							</div>

							{/* Content container with glassmorphism */}
							<div className="relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8 lg:p-12 z-30">
								{/* Glassmorphism background */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
								<div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-500 lg:group-hover:bg-gradient-to-t lg:group-hover:from-black/90 lg:group-hover:via-black/60 lg:group-hover:to-black/20" />

								<div className="relative z-10 text-white ">
									{/* Badge */}
									<div
										className={`inline-flex items-center py-2 text-sm font-semibold mb-4 transition-transform duration-300 hover:scale-105 ${
											index === 0
												? "bg-primary-500/20 text-primary-200 border-primary-400/30"
												: "bg-secondary-500/20 text-secondary-200 border-secondary-400/30"
										}`}
									>
										<div
											className={`${
												index === 0 ? "bg-primary-400" : "bg-secondary-400"
											}`}
										/>
										{feature.tagline}
									</div>

									<h3 className="mb-2 text-2xl leading-[1.4] font-bold md:text-3xl lg:text-4xl text-white transition-transform duration-300 hover:translate-x-2">
										{feature.heading}
									</h3>

									{/* Mobile content */}
									<div className="lg:hidden">
										<p className="mt-5 text-neutral-200 md:mt-6">
											{feature.description}
										</p>
										<div className="mt-6 md:mt-8">
											<div className="transition-transform duration-200 hover:scale-105 active:scale-95">
												<Button
													{...feature.button}
													className={`border text-white px-8 py-3 shadow-lg font-medium `}
												>
													<a href="mailto:titikjalin@outlook.co.id">
														Send us an email
													</a>
												</Button>
											</div>
										</div>
									</div>
								</div>

								{/* Desktop hover content — revealed on card hover via CSS */}
								<div className="z-10 hidden lg:block lg:w-[440px] lg:max-h-0 lg:opacity-0 lg:overflow-hidden lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:max-h-[32rem] lg:group-hover:opacity-100">
									{/* Glassmorphism content card */}
									<div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 border border-white/20">
										<p className="text-neutral-200 leading-relaxed">
											{feature.description}
										</p>
										<div className="mt-6">
											<div className="transition-transform duration-200 hover:scale-105 active:scale-95">
												<Button
													{...feature.button}
													className={`border text-white px-8 py-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium`}
												>
													<a href="mailto:titikjalin@outlook.co.id">
														Send us an email
													</a>
												</Button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</a>
					))}
				</div>
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
			heading: "Reach Out and Start Your Journey.",
			description:
				"We're excited to hear from you and explore how we can collaborate together.",
			image: {
				src: "IT_Office_Hand.webp",
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
			heading: "Let's Work on a Project Together.",
			description:
				"Your ideas are the dots that can transform into something amazing.",
			image: {
				src: "./Collaborate_Night_Office.webp",
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
