// import { BsLightning } from "react-icons/bs";
// import Heads from "./Heads";

// const Skills = () => {
// 	return (
// 		<div>
// 			{" "}
// 			<Heads logo={<BsLightning size={30} />} title={"SKILLS"} />
// 		</div>
// 	);
// };

// export default Skills;
import { BsLightning } from "react-icons/bs";
import Heads from "./Heads";

const skillsData = [
	{
		category: "Frontend Technologies",
		skills: "HTML, CSS, JavaScript, NextJS, React, Vue, AJAX, jQuery, Bootstrap, Tailwind",
	},
	{
		category: "Backend Technologies",
		skills: "NestJS, Node.js, ExpressJS, MongoDB",
	},
	{
		category: "Other Skills",
		skills: "Git, GitHub, GitLab",
	},
];

const Skills = () => {
	return (
		<div className="px-4">
			<Heads logo={<BsLightning size={30} />} title={"SKILLS"} />
			<div className="mt-4 bg-[#1a1a1a] p-5 rounded-lg shadow-lg">
				<ul className="space-y-3 text-gray-300">
					{skillsData.map((skill, index) => (
						<li key={index} className="flex items-start space-x-2">
							<div className="w-2 h-2 bg-[#47e5c3] rounded-full mt-2"></div>
							<span>
								<strong className="text-white">{skill.category}:</strong> {skill.skills}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Skills;
