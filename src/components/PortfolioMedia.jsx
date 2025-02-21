import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const mediaItems = [
	{ project: "ReservationTeams", src: "./Portfolio/ReservationTeams1.png" },
	{ project: "ReservationTeams", src: "./Portfolio/ReservationTeams2.png" },
	{ project: "ReservationTeams", src: "./Portfolio/ReservationTeams3.png" },
	{ project: "ReservationTeams", src: "./Portfolio/ReservationTeams4.png" },
	{ project: "ReservationTeams", src: "./Portfolio/ReservationTeams5.png" },
	{ project: "ReservationTeams", src: "./Portfolio/ReservationTeams6.png" },
	{ project: "ReservationTeams", src: "./Portfolio/ReservationTeams7.png" },
	{ project: "Flynowithus", src: "./Portfolio/Flynowithus1.png" },
	{ project: "Flynowithus", src: "./Portfolio/Flynowithus2.png" },
	{ project: "Flynowithus", src: "./Portfolio/Flynowithus3.png" },
	{ project: "Flynowithus", src: "./Portfolio/Flynowithus4.png" },
	{ project: "StockApp", src: "./Portfolio/StockApp1.jpeg" },
	{ project: "StockApp", src: "./Portfolio/StockApp2.jpeg" },
	{ project: "StockApp", src: "./Portfolio/StockApp3.jpeg" },
	{ project: "StockApp", src: "./Portfolio/StockApp4.jpeg" },
	{ project: "LandingPage", src: "./Portfolio/LandingPage1.png" },
	{ project: "LandingPage", src: "./Portfolio/LandingPage2.png" },
	{ project: "LandingPage", src: "./Portfolio/LandingPage3.png" },
	{ project: "LandingPage", src: "./Portfolio/LandingPage4.png" },
	{ project: "LandingPage", src: "./Portfolio/LandingPage5.png" },
];

const PortfolioMedia = () => {
	const [showAll, setShowAll] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const projectGroups = mediaItems.reduce((acc, item) => {
		acc[item.project] = acc[item.project] || [];
		acc[item.project].push(item.src);
		return acc;
	}, {});

	const groupedProjects = Object.keys(projectGroups).map((project) => ({
		name: project,
		images: projectGroups[project],
	}));

	const visibleProjects = showAll ? groupedProjects : groupedProjects.slice(0, 6);

	const openProject = (project) => {
		setSelectedProject(project);
		setCurrentIndex(0);
	};

	const prevImage = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : selectedProject.images.length - 1));
	const nextImage = () => setCurrentIndex((prev) => (prev < selectedProject.images.length - 1 ? prev + 1 : 0));

	const closeModal = () => {
		setSelectedProject(null);
	};

	return (
		<div className="p-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{visibleProjects.map((project, index) => (
					<div key={index} className="relative flex flex-col items-center">
						<img
							src={project.images[0]}
							alt={project.name}
							className="max-w-full max-h-60 object-contain rounded-lg shadow-md cursor-pointer"
							onClick={() => openProject(project)}
						/>
						{project.images.length > 1 && (
							<span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
								{project.images.length}+
							</span>
						)}
						<p className="mt-2 font-semibold text-white">{project.name}</p>
					</div>
				))}
			</div>

			{groupedProjects.length > 9 && (
				<div className="flex justify-center mt-4">
					{showAll ? (
						<FiChevronUp
							size={30}
							className="cursor-pointer text-blue-500 hover:text-blue-700"
							onClick={() => setShowAll(false)}
						/>
					) : (
						<FiChevronDown
							size={30}
							className="cursor-pointer text-blue-500 hover:text-blue-700"
							onClick={() => setShowAll(true)}
						/>
					)}
				</div>
			)}

			{selectedProject && (
				<div
					className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
					onClick={closeModal}
				>
					<div
						className="relative bg-gray-900 p-4 min-w-[70vw] rounded-lg shadow-lg max-w-4xl w-full flex flex-col items-center"
						onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
					>
						<button className="absolute z-10 top-2 right-2 text-gray-400 hover:text-gray-200" onClick={closeModal}>
							<IoMdClose size={24} />
						</button>

						<div className="relative flex items-center justify-between w-full">
							<button className="text-gray-400 p-4 hover:text-white" onClick={prevImage}>
								<FaArrowLeft size={24} />
							</button>

							<div className="flex justify-center items-center w-full max-h-[90vh] min-h-[70vh]">
								<LazyLoadImage
									src={selectedProject.images[currentIndex]}
									alt="Preview"
									className="max-w-full max-h-[90vh] object-contain mx-auto"
								/>
							</div>

							<button className="text-gray-400 p-4 hover:text-white" onClick={nextImage}>
								<FaArrowRight size={24} />
							</button>
						</div>

						<p className="text-gray-400 mt-2">
							{currentIndex + 1} / {selectedProject.images.length}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default PortfolioMedia;
