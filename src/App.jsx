import { Contact, Education, HeroSection, Overview, Skills, Timeline, WorkHistory, Portfolio } from "./components";
function App() {
	return (
		<>
			<div className="flex justify-center">
				<div className="max-w-5xl w-5xl">
					<HeroSection />
					<Overview />
					<WorkHistory />
					<Skills />
					<Portfolio />
					<Timeline />
					<Education />
					<Contact />
				</div>
			</div>
		</>
	);
}

export default App;
