import { PiSuitcaseBold } from "react-icons/pi";
import { TfiLocationPin } from "react-icons/tfi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { workHistory } from "../data/workHistory";

const HeroSection = () => {
	const currentRole = workHistory.length > 0 ? workHistory[0].role : "SOFTWARE DEVELOPER";
	return (
		<div>
			<img src="./Images/desktop-wallpaper-portfolio.jpg" className="w-full object-cover" alt="" />

			<div className="py-16 px-7 flex flex-wrap justify-between bg-[#1e1e1e]">
				<div>
					<p className="text-4xl font-semibold">Aakash Gaur</p>

					<div className="flex mt-3 flex-wrap gap-x-16">
						<div className="flex items-center">
							<PiSuitcaseBold fill="#47e5c3" className="me-2" />
							<p className="font-light">{currentRole}</p>
						</div>

						<div className="flex items-center">
							<TfiLocationPin fill="#47e5c3" className="me-2" />
							<p className="font-light">NEW DELHI, DL</p>
						</div>
					</div>

					<div className="flex items-center mt-5 gap-5">
						<a
							href="https://www.linkedin.com/in/aakash-gaur-6978521b2/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:opacity-80 transition"
						>
							<FaLinkedin size={28} color="#47e5c3" />
						</a>

						<a
							href="https://github.com/AakashGaur03"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:opacity-80 transition"
						>
							<FaGithub size={28} color="#47e5c3" />
						</a>
					</div>
				</div>

				<div className="content-end pt-8">
					<a
						href="#contact-form"
						type="button"
						className="bg-[#48e5c2] hover:bg-[#6deace] focus:outline-none focus:ring-4
						rounded-full text-black px-12 text-xl font-bold py-[10px]"
					>
						CONTACT ME
					</a>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
