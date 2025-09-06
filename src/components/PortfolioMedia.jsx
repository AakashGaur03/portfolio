import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { mediaItems } from "../data/mediaItems";
import LazyImage from "./LazyImage";

// Group projects by type and name
const groupProjectsByType = (items) => {
	const grouped = {};
	items.forEach(({ type, project, src, link }) => {
		if (!grouped[type]) grouped[type] = {};
		if (!grouped[type][project]) grouped[type][project] = { images: [], link: null };
		grouped[type][project].images.push(src);

		if (link && !grouped[type][project].link) {
			grouped[type][project].link = link;
		}
	});
	return grouped;
};

const PortfolioMedia = () => {
	const [selectedProject, setSelectedProject] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [loading, setLoading] = useState(true);

	// For drag/swipe
	const startXRef = useRef(null);
	const isDraggingRef = useRef(false);

	const groupedProjects = groupProjectsByType(mediaItems);

	const openProject = (project) => {
		setSelectedProject(project);
		setCurrentIndex(0);
		setLoading(true);
	};

	const prevImage = () => {
		setLoading(true); // show skeleton immediately
		setCurrentIndex((prev) => (prev > 0 ? prev - 1 : selectedProject.images.length - 1));
	};

	const nextImage = () => {
		setLoading(true); // show skeleton immediately
		setCurrentIndex((prev) => (prev < selectedProject.images.length - 1 ? prev + 1 : 0));
	};

	const closeModal = () => setSelectedProject(null);

	// Keyboard support
	useEffect(() => {
		const handleKey = (e) => {
			if (!selectedProject) return;
			if (e.key === "ArrowLeft") prevImage();
			if (e.key === "ArrowRight") nextImage();
			if (e.key === "Escape") closeModal();
		};
		window.addEventListener("keydown", handleKey);
		return () => window.removeEventListener("keydown", handleKey);
	}, [selectedProject]);

	// Drag / Swipe handlers
	const handleStart = (e) => {
		isDraggingRef.current = true;
		startXRef.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
	};

	const handleMove = (e) => {
		if (!isDraggingRef.current || startXRef.current === null) return;
		const currentX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
		const diff = startXRef.current - currentX;

		if (Math.abs(diff) > 50) {
			if (diff > 0) {
				nextImage();
			} else {
				prevImage();
			}
			isDraggingRef.current = false;
			startXRef.current = null;
		}
	};

	const handleEnd = () => {
		isDraggingRef.current = false;
		startXRef.current = null;
	};

	return (
		<div className="p-4">
			{Object.entries(groupedProjects).map(([type, projects]) => (
				<div key={type} className="mb-6">
					<h2 className="text-xl font-semibold text-white mb-3">{type} Projects</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
						{Object.entries(projects).map(([name, { images, link }], index) => (
							<div key={index} className="relative flex flex-col items-center">
								<img
									src={images[0]}
									alt={name}
									className="max-w-full max-h-60 object-contain rounded-lg shadow-md cursor-pointer"
									onClick={() => openProject({ name, images, link })}
								/>
								{images.length > 1 && (
									<span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
										{images.length}+
									</span>
								)}
								<p className="mt-2 font-semibold text-white">{name}</p>
								{link && (
									<a
										href={link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-blue-400 hover:underline mt-1"
									>
										Visit Site
									</a>
								)}
							</div>
						))}
					</div>
				</div>
			))}

			{selectedProject && (
				<div
					className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
					onClick={closeModal}
				>
					<div
						className="relative bg-gray-900 p-4 min-w-[70vw] rounded-lg shadow-lg max-w-4xl w-full flex flex-col items-center"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Close Button */}
						<button
							className="absolute z-10 top-2 right-2 text-gray-400 hover:text-gray-200 cursor-pointer"
							onClick={closeModal}
						>
							<IoMdClose size={24} />
						</button>

						{/* Image with drag/swipe */}
						<div
							className="relative flex items-center justify-between w-full"
							onMouseDown={handleStart}
							onMouseMove={handleMove}
							onMouseUp={handleEnd}
							onTouchStart={handleStart}
							onTouchMove={handleMove}
							onTouchEnd={handleEnd}
						>
							<button className="text-gray-400 p-4 hover:text-white cursor-pointer" onClick={prevImage}>
								<FaArrowLeft size={24} />
							</button>

							<div className="flex justify-center items-center w-full max-h-[90vh] min-h-[70vh] relative">
								{loading && (
									<div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg animate-pulse z-10">
										<p className="text-gray-400">Loading...</p>
									</div>
								)}

								<LazyImage
									src={selectedProject.images[currentIndex]}
									alt="Preview"
									className="max-w-full max-h-[90vh] object-contain mx-auto"
									onLoad={() => setLoading(false)}
								/>
							</div>

							<button className="text-gray-400 p-4 hover:text-white cursor-pointer" onClick={nextImage}>
								<FaArrowRight size={24} />
							</button>
						</div>

						{/* Footer info */}
						<p className="text-gray-400 mt-2">
							{currentIndex + 1} / {selectedProject.images.length}
						</p>
						{selectedProject.link && (
							<a
								href={selectedProject.link}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-2 text-blue-400 hover:underline text-sm"
							>
								🔗 Visit {selectedProject.name}
							</a>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default PortfolioMedia;
