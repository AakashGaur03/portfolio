import { PiSuitcaseBold } from "react-icons/pi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import Heads from "./Heads";

const workHistory = [
	{
		company: "Letese",
		companyIndex: "3",
		role: "Full Stack Developer",
		location: "Noida, India",
		duration: "Aug 2024 – Present",
		description: [
			"Single-handedly working on the backend development using NestJS, collaborating closely with the team lead for guidance and project alignment.",
			"Successfully completed authentication modules for different user types, CMS module, and Lead module, laying the foundation for a robust platform.",
			"Leading the development of the backend architecture from scratch, ensuring a solid foundation for scalability, security, and performance.",
			"Spearheaded the migration from a microservice architecture to a monorepo using Yarn workspaces, optimizing code sharing, simplifying dependency management, and reducing deployment complexities by 30%.",
			"Contributing to the frontend using Next.js, focusing on building user-friendly, performant, and responsive interfaces.",
		],
	},
	{
		company: "Novative Solutions",
		companyIndex: "2",
		role: "Full Stack Developer",
		location: "Noida, India",
		duration: "Oct 2023 – Aug 2024",
		description: [
			"Successfully migrated a Laravel project to VueJS, reducing payload size by over 66%, from 15 MB to less than 5 MB, resulting in a decrease in loading time.",
			"Designed and developed reusable UI components using Vue, reducing further development time by 50%.",
			"Introduced advanced features such as Ecourts and the Privileges section while maintaining high code quality.",
			"Led the development of a dedicated Node.js backend, architected as a microservice, for the ECourts feature.",
			"Improved software development processes, increasing efficiency by 20% and fostering team growth through knowledge sharing.",
			"Created a robust HR portal in NextJs featuring employee management, attendance monitoring, performance evaluation, annual appraisals, and bonuses, enhancing HR efficiency by 40%.",
		],
	},
	{
		company: "AppSquadz",
		companyIndex: "1",
		role: "Front End Developer Intern",
		location: "Noida, India",
		duration: "July 2023 – Sept 2023",
		description: [
			"Developed web applications using HTML, CSS, Bootstrap, JavaScript, jQuery, and AJAX, improving user engagement.",
			"Applied technical knowledge in real-world projects (Educrypt, Videocrypt), solving complex technical challenges and reducing development time by 15%.",
			"Collaborated with cross-functional teams, enhancing project delivery quality.",
			"Created custom web solutions that addressed specific client needs; reduced project turnaround times by 15%, ensuring smoother workflow and greater alignment between development and client expectations.",
		],
	},
];

const WorkHistory = () => {
	const [expanded, setExpanded] = useState(null);

	const toggleExpand = (index) => {
		setExpanded(expanded === index ? null : index);
	};

	return (
		<div className="px-2">
			<Heads logo={<PiSuitcaseBold size={30} />} title="WORK HISTORY" />
			<div className="mt-6 border-l-4 border-gray-300 pl-6">
				{workHistory.map((job, index) => (
					<div key={index} id={`work-${job.companyIndex}`} className="relative mb-8">
						<div className="text-lg font-semibold flex items-center cursor-pointer" onClick={() => toggleExpand(index)}>
							<div className="top-2 w-3 h-3 bg-gray-500 rounded-full mr-6"></div>
							<div className="flex-1">
								{job.role} - {job.company}
								<p className="text-sm text-[#47e5c3]">{job.duration}</p>
							</div>
							<div className="ml-4 pe-4">{expanded === index ? <FaChevronUp /> : <FaChevronDown />}</div>
						</div>
						{expanded === index && (
							<ul className="mt-2 text-sm text-gray-400 space-y-2">
								{job.description.map((point, i) => (
									<li key={i} className="flex items-start">
										<span className="w-1 h-1 bg-gray-500 rounded-full mt-1 mr-8 shrink-0"></span>
										<span className="flex-1">{point}</span>
									</li>
								))}
							</ul>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default WorkHistory;
