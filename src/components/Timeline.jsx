import { useState } from "react";
import { PiSuitcaseBold } from "react-icons/pi";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Heads from "./Heads";

const timelineData = [
	{
		type: "work",
		role: "Full Stack Developer",
		companyIndex: "5",
		company: "MojoCX",
		duration: "11.2025 - PRESENT",
	},

	{
		type: "work",
		role: "Software Developer",
		companyIndex: "4",
		company: "Appalus",
		duration: "08.2025 - 11.2025",
	},

	{
		type: "work",
		role: "Full Stack Developer",
		companyIndex: "3",
		company: "Letese",
		duration: "08.2024 - 08.2025",
	},
	{
		type: "education",
		eduIndex: "3",
		degree: "M.Tech - Computer Science",
		institution: "SPGOI Sat Priya Group of Institutions (MDU)",
		duration: "2024 - 2026(PURSUING)",
	},
	{
		type: "work",
		role: "Full Stack Developer",
		company: "Novative Solutions",
		companyIndex: "2",

		duration: "10.2023 - 08.2024",
	},
	{
		type: "work",
		role: "Front End Developer Intern",
		companyIndex: "1",
		company: "Appsquadz",
		duration: "05.2023 - 08.2023",
	},

	{
		type: "education",
		eduIndex: "2",
		degree: "B.Tech - Computer Science",
		institution: "MERI College of Engineering and Technology (MDU)",
		duration: "2020 - 2024",
	},
	{
		type: "education",
		eduIndex: "1",
		degree: "12th",
		institution: "Columbia Foundation Sr. Sec. School (CBSE)",
		duration: "2020",
	},
];

const Timeline = () => {
	const [hoverIndex, setHoverIndex] = useState(null);

	return (
		<div className="px-2">
			<Heads logo={<PiSuitcaseBold size={30} />} title={"TIMELINE"} />
			<div className="relative mt-6 flex flex-col items-center">
				<div className="absolute w-1 bg-gray-700 h-full md:left-1/2 left-2 transform -translate-x-1/2"></div>

				<div className="w-full max-w-4xl space-y-10">
					{timelineData.map((item, index) => (
						<div
							key={index}
							className="relative flex items-center w-full"
							onMouseEnter={() => setHoverIndex(index)}
							onMouseLeave={() => setHoverIndex(null)}
						>
							<div
								className="absolute md:left-1/2 left-2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-gray-800 transition-colors duration-300"
								style={{ backgroundColor: hoverIndex === index ? "#47e5c3" : "gray" }}
							></div>

							<a
								href={`#${item.type === "work" ? `work-${item.companyIndex}` : `education-${item.eduIndex}`}`}
								className={`bg-[#1a1a1a] p-4 cursor-pointer rounded-lg shadow-lg sm:w-80 w-60 max-w-80 z-10 ${
									index % 2 === 0 ? "md:ml-auto ml-16" : "md:mr-auto md:ml-0 ml-16 text-left"
								}`}
							>
								<div className="flex items-center space-x-3">
									{item.type === "work" ? (
										<FaBriefcase className="text-[#47e5c3]" size={20} />
									) : (
										<FaGraduationCap className="text-[#47e5c3]" size={20} />
									)}
									<h3 className="text-white font-semibold">{item.type === "work" ? item.role : item.degree}</h3>
								</div>
								<p className="text-gray-400 pl-8">{item.type === "work" ? item.company : item.institution}</p>
								<p className="text-gray-500 text-sm pl-8">{item.duration}</p>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Timeline;
