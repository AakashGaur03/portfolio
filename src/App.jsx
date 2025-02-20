// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Contact, Education, HeroSection, Overview, Skills, Timeline, WorkHistory, Portfolio } from "./components";
function App() {
	return (
		<>
			<div className="flex justify-center">
				<div className="max-w-5xl">
					<HeroSection />
					<Overview />
					<WorkHistory />
					<Education />
					<Skills />
					<Portfolio />
					<Timeline />
					<Contact />
				</div>
			</div>
		</>
	);
}

export default App;
