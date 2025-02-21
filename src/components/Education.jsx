import { PiGraduationCapBold } from "react-icons/pi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import Heads from "./Heads";

const educationHistory = [
	{
		degree: "M.Tech",
		eduIndex: "3",
		institution: "SPGOI Sat Priya Group of Institutions (MDU)",
		duration: "2024 – 2026",
		status: "Pursuing",
	},
	{
		degree: "B.Tech - Computer Science",
		eduIndex: "2",
		institution: "MERI College of Engineering and Technology (MDU)",
		duration: "2020 – 2024",
		gpa: "GPA: 8.6",
	},
	{
		degree: "12th",
		eduIndex: "1",
		institution: "Columbia Foundation Sr. Sec. School (CBSE)",
		duration: "2020",
		percentage: "88%",
	},
];

const Education = () => {
	const [expanded, setExpanded] = useState(null);
	const toggleExpand = (index) => {
		setExpanded(expanded === index ? null : index);
	};

	return (
		<div className="px-2">
			<Heads logo={<PiGraduationCapBold size={30} />} title="EDUCATION" />
			<div className="mt-6 border-l-4 border-gray-300 pl-6">
				{educationHistory.map((edu, index) => (
					<div key={index} id={`education-${edu.eduIndex}`} className="relative mb-6">
						<div
							className="flex items-center justify-between cursor-pointer text-lg font-semibold"
							onClick={() => toggleExpand(index)}
						>
							<div className="flex items-center space-x-4">
								<div className="w-3 h-3 bg-gray-500 rounded-full"></div>
								<div>
									<span>{edu.degree}</span>
									<p className="text-sm text-gray-400">{edu.institution}</p>
									<p className="text-sm text-[#47e5c3]">{edu.duration}</p>
								</div>
							</div>
							<div className="pe-4">{expanded === index ? <FaChevronUp /> : <FaChevronDown />}</div>
						</div>
						{expanded === index && (
							<ul className="mt-3 text-sm text-gray-400 space-y-1 pl-7">
								{edu.status && (
									<li>
										<strong>Status:</strong> {edu.status}
									</li>
								)}
								{edu.gpa && (
									<li>
										<strong>{edu.gpa}</strong>
									</li>
								)}
								{edu.percentage && (
									<li>
										<strong>Percentage:</strong> {edu.percentage}
									</li>
								)}
							</ul>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Education;
