import { useEffect, useRef, useState } from "react";

// Fades children in (via animate.css) when scrolled into view and hides them
// again when they leave, so the animation replays on re-entry.
// Replaces react-animate-on-scroll, which doesn't support React 17+.
function FadeIn({ duration = 1, offset = 100, animateOnce = false, children }) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el || !("IntersectionObserver" in window)) {
			setVisible(true);
			return;
		}
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					if (animateOnce) observer.disconnect();
				} else {
					setVisible(false);
				}
			},
			{ rootMargin: `0px 0px -${offset}px 0px` }
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, [offset, animateOnce]);

	return (
		<div
			ref={ref}
			className={visible ? "animate__animated animate__fadeIn" : undefined}
			style={
				visible
					? { animationDuration: `${duration}s` }
					: { opacity: 0 }
			}
		>
			{children}
		</div>
	);
}

export default FadeIn;
