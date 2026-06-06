"use client";

export function Header() {
	return (
		<section className="relative px-[5%]">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0 z-0">
				<img
					src="./Abstract_Header.webp"
					className="anim-zoom-out size-full object-cover"
					alt="Abstract design background"
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
								<div
									className="anim-grow-x mb-6 h-1 w-20 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"
									style={{ animationDelay: "0.3s" }}
								/>

								<h1
									className="anim-load-up text-5xl font-bold md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white"
									style={{ animationDelay: "0.4s" }}
								>
									Big ideas start from a single dot grow into greatness
								</h1>
							</div>
						</div>

						{/* Description Section */}
						<div className="flex flex-col justify-end">
							<div
								className="anim-load-up mx-[7.5%] md:mx-0"
								style={{ animationDelay: "0.6s" }}
							>
								<p className="text-text-alternative md:text-md text-white">
									Every great journey begins with a single step. Join us as we
									transform your vision into reality, creating digital
									experiences that inspire and connect.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div>
				<div className="anim-bounce-soft absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
					<div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
						<div className="anim-pulse-soft w-1 h-3 bg-white/60 rounded-full mt-2" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Header;
