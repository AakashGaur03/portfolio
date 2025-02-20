// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Contact, Education, HeroSection, Overview, Skills, Timeline, WorkHistory, Portfolio } from "./components";
function App() {
	return (
		<>
			<HeroSection />
			<Overview />
			<WorkHistory />
			<Education />
			<Skills />
			<Portfolio />
			<Timeline />
			<Contact />
		</>
	);
}

export default App;
