import { useState, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Import icons

const mediaItems = [
	{ type: "image", src: "./Portfolio/ReservationTeams1.png", alt: "ReservationTeams" },
	{ type: "image", src: "./Portfolio/ReservationTeams2.png", alt: "ReservationTeams" },
	{ type: "image", src: "./Portfolio/ReservationTeams3.png", alt: "ReservationTeams" },
	{ type: "image", src: "./Portfolio/ReservationTeams4.png", alt: "ReservationTeams" },
	{ type: "image", src: "./Portfolio/ReservationTeams5.png", alt: "ReservationTeams" },
	{ type: "image", src: "./Portfolio/ReservationTeams6.png", alt: "ReservationTeams" },
	{ type: "image", src: "./Portfolio/ReservationTeams7.png", alt: "ReservationTeams" },
	{ type: "image", src: "./Portfolio/Flynowithus1.png", alt: "Flynowithus" },
	{ type: "image", src: "./Portfolio/Flynowithus2.png", alt: "Flynowithus" },
	{ type: "image", src: "./Portfolio/Flynowithus3.png", alt: "Flynowithus" },
	{ type: "image", src: "./Portfolio/Flynowithus4.png", alt: "Flynowithus" },
	{ type: "image", src: "./Portfolio/StockApp2.jpeg", alt: "StockApp" },
	{ type: "image", src: "./Portfolio/StockApp1.jpeg", alt: "StockApp" },
	{ type: "image", src: "./Portfolio/StockApp3.jpeg", alt: "StockApp" },
	{ type: "image", src: "./Portfolio/StockApp4.jpeg", alt: "StockApp" },
	{ type: "image", src: "./Portfolio/LandingPage1.png", alt: "LandingPage" },
	{ type: "image", src: "./Portfolio/LandingPage2.png", alt: "LandingPage" },
	{ type: "image", src: "./Portfolio/LandingPage3.png", alt: "LandingPage" },
	{ type: "image", src: "./Portfolio/LandingPage4.png", alt: "LandingPage" },
	{ type: "image", src: "./Portfolio/LandingPage5.png", alt: "LandingPage" },
];

const PortfolioMedia = () => {
	const [loadedImages, setLoadedImages] = useState({});
	const [showAll, setShowAll] = useState(false);

	useEffect(() => {
		const preloadImages = () => {
			const newLoadedImages = {};
			mediaItems.forEach((item, index) => {
				if (item.type === "image") {
					const img = new Image();
					img.src = item.src;
					img.onload = () => setLoadedImages((prev) => ({ ...prev, [index]: true }));
				} else {
					newLoadedImages[index] = true;
				}
			});
			setLoadedImages(newLoadedImages);
		};

		preloadImages();
	}, []);

	// Show only first 9 items initially
	const visibleItems = showAll ? mediaItems : mediaItems.slice(0, 9);

	return (
		<div className="p-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{visibleItems.map((item, index) => (
					<div key={index} className="relative">
						{item.type === "image" ? (
							loadedImages[index] ? (
								<img src={item.src} alt={item.alt} className="w-full h-auto rounded-lg shadow-md" />
							) : (
								<div className="w-full h-40 bg-gray-200 animate-pulse rounded-lg" />
							)
						) : (
							<video controls className="w-full h-auto rounded-lg shadow-md">
								<source src={item.src} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						)}
					</div>
				))}
			</div>

			{/* Show More / Show Less Icons */}
			<div className="flex justify-center mt-4">
				{showAll ? (
					<FiChevronUp
						color="#47e5c3"
						size={30}
						className="cursor-pointer text-blue-600 hover:text-blue-800 transition-all"
						onClick={() => setShowAll(false)}
					/>
				) : (
					<FiChevronDown
						color="#47e5c3"
						size={30}
						className="cursor-pointer text-blue-600 hover:text-blue-800 transition-all"
						onClick={() => setShowAll(true)}
					/>
				)}
			</div>
		</div>
	);
};

export default PortfolioMedia;
