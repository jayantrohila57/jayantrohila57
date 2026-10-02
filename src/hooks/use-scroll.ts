"use client";
import { useEffect, useState } from "react";

export function useScroll(downThreshold: number, upThreshold?: number) {
	const [scrolled, setScrolled] = useState(false);
	const scrollUpThreshold = upThreshold ?? downThreshold / 2;

	useEffect(() => {
		const mq = window.matchMedia("(min-width: 768px)");
		if (!mq.matches) {
			setScrolled(false);
			return;
		}

		const handleScroll = () => {
			const y = window.scrollY;
			setScrolled((prev) => {
				if (prev) {
					return y > scrollUpThreshold;
				}
				return y > downThreshold;
			});
		};

		const onMqChange = () => {
			if (!mq.matches) {
				setScrolled(false);
				window.removeEventListener("scroll", handleScroll);
				return;
			}
			handleScroll();
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		mq.addEventListener("change", onMqChange);
		handleScroll();
		return () => {
			window.removeEventListener("scroll", handleScroll);
			mq.removeEventListener("change", onMqChange);
		};
	}, [downThreshold, scrollUpThreshold]);

	return scrolled;
}
