export function LogoCloud() {
	return (
		<div className="relative flex flex-wrap items-center justify-center gap-x-10 gap-y-8 py-6 sm:gap-x-12 sm:gap-y-12">
			{logos.map((logo) => (
				<img
					alt={logo.alt}
					className="pointer-events-none h-5 w-fit select-none dark:brightness-0 dark:invert"
					height="auto"
					key={logo.alt}
					loading="lazy"
					src={logo.src}
					width="auto"
				/>
			))}
		</div>
	);
}

/** Wordmarks aligned with tools in portfolio.ts stack groups (not employer logos). */
const logos = [
	{
		src: "https://storage.efferd.com/logo/vercel-wordmark.svg",
		alt: "Vercel",
	},
	{
		src: "https://storage.efferd.com/logo/github-wordmark.svg",
		alt: "GitHub",
	},
	{
		src: "https://storage.efferd.com/logo/supabase-wordmark.svg",
		alt: "PostgreSQL ecosystem",
	},
	{
		src: "https://storage.efferd.com/logo/stripe-wordmark.svg",
		alt: "Payments (Razorpay in e-commerce project)",
	},
	{
		src: "https://storage.efferd.com/logo/clerk-wordmark.svg",
		alt: "Auth patterns (Better Auth in repos)",
	},
];
