import Heads from "./Heads";
import { HiOutlineDocumentText } from "react-icons/hi";

const Overview = () => {
	return (
		<div>
			<Heads logo={<HiOutlineDocumentText size={30} />} title={"OVERVIEW"} />
		</div>
	);
};

export default Overview;
