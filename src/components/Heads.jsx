/* eslint-disable react/prop-types */
const Heads = ({ logo, title }) => {
	return (
		<div className="flex items-center gap-2 mt-16 mb-10">
			{logo}
			<h1 className="text-2xl font-medium">{title}</h1>
		</div>
	);
};

export default Heads;
