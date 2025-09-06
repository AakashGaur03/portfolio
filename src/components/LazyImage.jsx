/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt, className, onLoad }) => {
	const [isInView, setIsInView] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const imgRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsInView(true);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		if (imgRef.current) {
			observer.observe(imgRef.current);
		}

		return () => {
			if (imgRef.current) observer.unobserve(imgRef.current);
		};
	}, []);

	const handleLoad = () => {
		setLoaded(true);
		if (onLoad) onLoad(); // 🔥 notify parent (PortfolioMedia)
	};

	return (
		<div
			ref={imgRef}
			className={`relative w-full h-full flex items-center justify-center bg-gray-800 rounded-lg overflow-hidden ${
				className || ""
			}`}
		>
			{!loaded && (
				<div className="absolute inset-0 flex items-center justify-center bg-gray-800 animate-pulse">
					<p className="text-gray-400">Loading...</p>
				</div>
			)}
			{isInView && (
				<img
					src={src}
					alt={alt}
					className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
					onLoad={handleLoad}
				/>
			)}
		</div>
	);
};

export default LazyImage;
