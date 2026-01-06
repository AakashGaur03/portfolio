/* eslint-disable react/prop-types */
import { freelanceProjectCount } from "../data/mediaItems";
import Heads from "./Heads";
import { HiOutlineDocumentText } from "react-icons/hi";

const OverviewCard = ({ number, text }) => {
	return (
		<div className="bg-[#1e1e1e] py-10 relative flex items-center sm:min-w-[460px]">
			<div className="flex relative z-10 items-center">
				<p className="text-8xl font-bold ps-6 text-[#47e5c3] flex items-center">{number}</p>
				<div className="text-xl font-light max-w-96 ps-6">
					<div className="max-w-80">{text}</div>
				</div>
			</div>
			<div className="absolute right-0 top-0 text-[230px] text-[#282828] leading-[0.7]">{number}</div>
		</div>
	);
};

const Overview = () => {
	const startWorking = new Date("July 2023");
	const TodayMonthYear = new Date();

	let expYears = TodayMonthYear.getFullYear() - startWorking.getFullYear();

	let expMonths = TodayMonthYear.getMonth() - startWorking.getMonth();

	if (expMonths < 0) {
		expYears--; // remove 1 year because it's not complete
		expMonths += 12; // convert negative months into a positive value
	}

	const expDecimalYears = (expYears + expMonths / 12).toFixed(1);

	const overviewData = [
		{ number: expDecimalYears, text: "YEARS OF PROFESSIONAL EXPERIENCE" },
		{ number: freelanceProjectCount, text: "FREELANCE PROJECTS COMPLETED" },
	];

	return (
		<div className="px-2">
			<Heads logo={<HiOutlineDocumentText size={30} />} title={"OVERVIEW"} />
			<div className="flex lg:justify-between flex-wrap gap-6 justify-center">
				{overviewData.map((item, index) => (
					<OverviewCard key={index} number={item.number} text={item.text} />
				))}
			</div>
		</div>
	);
};

export default Overview;
