import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const mediaItems = [
  { type: "Freelance", project: "ASC", src: "./Portfolio/ASC1.png" },
  { type: "Freelance", project: "ASC", src: "./Portfolio/ASC2.png" },
  { type: "Freelance", project: "ASC", src: "./Portfolio/ASC3.png" },
  { type: "Freelance", project: "ASC", src: "./Portfolio/ASC4.png" },
  { type: "Freelance", project: "ASC", src: "./Portfolio/ASC5.png" },
  { type: "Freelance", project: "ASC", src: "./Portfolio/ASC6.png" },
  { type: "Freelance", project: "ASC", src: "./Portfolio/ASC7.png" },
  { type: "Freelance", project: "ReservationTeams", src: "./Portfolio/ReservationTeams1.png" },
  { type: "Freelance", project: "ReservationTeams", src: "./Portfolio/ReservationTeams2.png" },
  { type: "Freelance", project: "ReservationTeams", src: "./Portfolio/ReservationTeams3.png" },
  { type: "Freelance", project: "ReservationTeams", src: "./Portfolio/ReservationTeams4.png" },
  { type: "Freelance", project: "ReservationTeams", src: "./Portfolio/ReservationTeams5.png" },
  { type: "Freelance", project: "ReservationTeams", src: "./Portfolio/ReservationTeams6.png" },
  { type: "Freelance", project: "ReservationTeams", src: "./Portfolio/ReservationTeams7.png" },
  { type: "Freelance", project: "Flynowithus", src: "./Portfolio/Flynowithus1.png" },
  { type: "Freelance", project: "Flynowithus", src: "./Portfolio/Flynowithus2.png" },
  { type: "Freelance", project: "Flynowithus", src: "./Portfolio/Flynowithus3.png" },
  { type: "Freelance", project: "Flynowithus", src: "./Portfolio/Flynowithus4.png" },
  { type: "Freelance", project: "StockApp", src: "./Portfolio/StockApp1.jpeg" },
  { type: "Freelance", project: "StockApp", src: "./Portfolio/StockApp2.jpeg" },
  { type: "Freelance", project: "StockApp", src: "./Portfolio/StockApp3.jpeg" },
  { type: "Freelance", project: "StockApp", src: "./Portfolio/StockApp4.jpeg" },
  { type: "Freelance", project: "LandingPage", src: "./Portfolio/LandingPage1.png" },
  { type: "Freelance", project: "LandingPage", src: "./Portfolio/LandingPage2.png" },
  { type: "Freelance", project: "LandingPage", src: "./Portfolio/LandingPage3.png" },
  { type: "Freelance", project: "LandingPage", src: "./Portfolio/LandingPage4.png" },
  { type: "Freelance", project: "LandingPage", src: "./Portfolio/LandingPage5.png" },
  { type: "Personal", project: "MultiverseHub", src: "./Portfolio/Multiversehub1.png" },
  { type: "Personal", project: "MultiverseHub", src: "./Portfolio/Multiversehub2.png" },
  { type: "Personal", project: "MultiverseHub", src: "./Portfolio/Multiversehub3.png" },
  { type: "Personal", project: "MultiverseHub", src: "./Portfolio/Multiversehub4.png" },
  { type: "Personal", project: "MultiverseHub", src: "./Portfolio/Multiversehub5.png" },
  { type: "Personal", project: "MultiverseHub", src: "./Portfolio/Multiversehub6.png" },
  { type: "Personal", project: "MultiverseHub", src: "./Portfolio/Multiversehub7.png" },
  { type: "Personal", project: "MultiverseHub", src: "./Portfolio/Multiversehub8.png" },
  { type: "Personal", project: "ZsyncPro", src: "./Portfolio/ZsyncPro1.png" },
  { type: "Personal", project: "ZsyncPro", src: "./Portfolio/ZsyncPro2.png" },
  { type: "Personal", project: "ZsyncPro", src: "./Portfolio/ZsyncPro3.png" },
  { type: "Personal", project: "ZsyncPro", src: "./Portfolio/ZsyncPro4.png" },
  { type: "Personal", project: "ZsyncPro", src: "./Portfolio/ZsyncPro5.png" },
  { type: "Personal", project: "ZsyncPro", src: "./Portfolio/ZsyncPro6.png" },
];

// Group projects by type and name
const groupProjectsByType = (items) => {
  const grouped = {};
  items.forEach((item) => {
    if (!grouped[item.type]) grouped[item.type] = {};
    if (!grouped[item.type][item.project]) grouped[item.type][item.project] = [];
    grouped[item.type][item.project].push(item.src);
  });
  return grouped;
};

const PortfolioMedia = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const groupedProjects = groupProjectsByType(mediaItems);

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentIndex(0);
  };

  const prevImage = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : selectedProject.images.length - 1));
  const nextImage = () => setCurrentIndex((prev) => (prev < selectedProject.images.length - 1 ? prev + 1 : 0));

  const closeModal = () => setSelectedProject(null);

  return (
    <div className="p-4">
      {Object.entries(groupedProjects).map(([type, projects]) => (
        <div key={type} className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-3">{type} Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(projects).map(([name, images], index) => (
              <div key={index} className="relative flex flex-col items-center">
                <img
                  src={images[0]}
                  alt={name}
                  className="max-w-full max-h-60 object-contain rounded-lg shadow-md cursor-pointer"
                  onClick={() => openProject({ name, images })}
                />
                {images.length > 1 && (
                  <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
                    {images.length}+
                  </span>
                )}
                <p className="mt-2 font-semibold text-white">{name}</p>
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
