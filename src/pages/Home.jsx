import "../index.css";

import Nav from "../components/rebrand/Nav";
import Hero from "../components/rebrand/Hero";
import Header from "../components/Header";

import Meaning from "../components/rebrand/Meaning";
import Audience from "../components/rebrand/Audience";
import Ethos from "../components/rebrand/Ethos";
import Services from "../components/rebrand/Services";
import Engagements from "../components/rebrand/Engagements";
import Brandt from "../components/rebrand/Brandt";
import Work from "../components/rebrand/Work";
import Stats from "../components/rebrand/Stats";
import Contact from "../components/rebrand/Contact";
import SiteFooter from "../components/rebrand/SiteFooter";

function Home() {
	return (
		<div className="tj" data-theme="dark">
			<Nav />
			<main id="main-content">
				<Header />
				<Meaning />
				<Audience />
				<Ethos />
				<Services />
				<Brandt />
				<Work />
				<Engagements />
				<Stats />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	);
}

export default Home;
