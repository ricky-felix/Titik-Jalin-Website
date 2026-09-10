"use client";

import { Button } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";

export function PageNotFound() {
	return (
		<div className="relative min-h-screen overflow-hidden">
			<section className="relative z-10 px-[5%] py-12 md:py-16 lg:py-20">
				<div className="container mx-auto">
					<div className="anim-load-up relative flex min-h-[32rem] flex-col items-center justify-center p-8 text-center md:min-h-[40rem] md:p-16">
						{/* Gradient backdrop */}
						<div className="absolute inset-0 bg-gradient-to-br from-white/60 via-primary-50/40 to-accent-50/30 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl"></div>

						<div className="relative w-full max-w-2xl">
							{/* 404 Number */}
							<div
								className="anim-load-scale mb-8"
								style={{ animationDelay: "0.2s" }}
							>
								<span className="text-8xl md:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-600 bg-clip-text leading-none">
									404
								</span>
							</div>

							{/* Main heading */}
							<h1
								className="anim-load-up mb-6 text-3xl font-bold text-neutral-800 md:text-4xl lg:text-5xl"
								style={{ animationDelay: "0.4s" }}
							>
								Oops! Page Not Found
							</h1>

							{/* Description */}
							<p
								className="anim-load-up mb-8 text-lg text-neutral-600 md:text-xl leading-relaxed"
								style={{ animationDelay: "0.6s" }}
							>
								The page you're looking for seems to have wandered off into the
								digital void. <br className="hidden md:block" />
								Let's get you back to familiar territory!
							</p>

							{/* CTA Button */}
							<div
								className="anim-load-up flex flex-wrap items-center justify-center gap-4"
								style={{ animationDelay: "0.8s" }}
							>
								<Link to="/">
									<div className="transition-transform duration-200 hover:scale-105 active:scale-95">
										<Button
											title="Return Home"
											variant="primary"
											className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
										>
											Return Home
										</Button>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default PageNotFound;
