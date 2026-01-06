import { PiSuitcaseBold } from "react-icons/pi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import Heads from "./Heads";
import { workHistory } from "../data/workHistory";

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
