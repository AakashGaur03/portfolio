import { MdOutlinePeopleAlt } from "react-icons/md";
import { Suspense, lazy } from "react";
import Heads from "./Heads";

// Lazy load the media component
const PortfolioMedia = lazy(() => import("./PortfolioMedia"));

const Portfolio = () => {
	return (
		<div className="px-2">
			<Heads logo={<MdOutlinePeopleAlt size={30} />} title={"PORTFOLIO"} />
			<Suspense fallback={<p>Loading portfolio...</p>}>
				<PortfolioMedia />
			</Suspense>
		</div>
	);
};

export default Portfolio;
