import { PiSuitcaseBold } from "react-icons/pi";
import { TfiLocationPin } from "react-icons/tfi";

const HeroSection = () => {
	return (
		<div>
			<img src="./Images/desktop-wallpaper-portfolio.jpg" className="w-full" alt="" />

			<div>
				<div className="py-16 px-7 flex flex-wrap justify-between bg-[#1e1e1e]">
					<div className="">
						<p className="text-4xl">Aakash Gaur</p>
						<div className="flex mt-3 flex-wrap gap-x-16">
							<div className="flex items-center">
								<PiSuitcaseBold fill="#47e5c3" className="me-2" />
								<p className="font-light">SOFTWARE DEVELOPER</p>
							</div>
							<div className="flex items-center">
								<TfiLocationPin fill="#47e5c3" className="me-2" />
								<p className="font-light">NEW DELHI, DL</p>
							</div>
						</div>
					</div>
					<div className="content-end pt-8">
						<button
							type="button"
							className="bg-[#48e5c2] hover:bg-[#6deace] focus:outline-none focus:ring-4 focus:ring-green-30 rounded-full text-center me-2 mb-2 dark:bg-[#48e5c2] dark:hover:bg-[#6deace] dark:focus:ring-[#6deace] text-black px-12 text-xl font-bold leading-0.9 py-[10px]"
						>
							CONTACT ME
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
