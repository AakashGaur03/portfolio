import { useState, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

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
	{ type: "image", src: "./Portfolio/StockApp2.jpeg", alt: "Stock App" },
	{ type: "image", src: "./Portfolio/StockApp1.jpeg", alt: "Stock App" },
	{ type: "image", src: "./Portfolio/StockApp3.jpeg", alt: "Stock App" },
	{ type: "image", src: "./Portfolio/StockApp4.jpeg", alt: "Stock App" },
	{ type: "image", src: "./Portfolio/LandingPage1.png", alt: "LandingPage" },
	{ type: "image", src: "./Portfolio/LandingPage2.png", alt: "LandingPage" },
	{ type: "image", src: "./Portfolio/LandingPage3.png", alt: "LandingPage" },
	{ type: "image", src: "./Portfolio/LandingPage4.png", alt: "LandingPage" },
	{ type: "image", src: "./Portfolio/LandingPage5.png", alt: "LandingPage" },
];

const PortfolioMedia = () => {
	const [loadedImages, setLoadedImages] = useState({});
	const [showAll, setShowAll] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

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
					<div key={index} className="flex justify-center">
						{item.type === "image" ? (
							loadedImages[index] ? (
								<img
									src={item.src}
									alt={item.alt}
									className="max-w-full max-h-60 object-contain rounded-lg shadow-md cursor-pointer"
									onClick={() => setSelectedImage(item.src)}
								/>
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

			{/* Image Preview Modal */}
			{selectedImage && (
				<div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
					<div className="relative p-4">
						<button
							className="absolute top-0 right-0 m-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-600"
							onClick={() => setSelectedImage(null)}
						>
							<IoMdClose size={24} />
						</button>
						<img src={selectedImage} alt="Preview" className="max-w-full max-h-[80vh] object-contain rounded-lg" />
					</div>
				</div>
			)}
		</div>
	);
};

export default PortfolioMedia;
