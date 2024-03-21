// import styles from "./page.module.scss";

import Header from "../components/header/Header";
import Oval from "../components/header/Oval";
import Opinions from "../components/opinions/Opinions";
import Offer from "../components/offer/Offer";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";



export default function Home() {
	return (
		<>
			<Header />
			<Oval />
			<main>
				<Opinions />
				<Offer />
				<About />
			</main>
			<Footer />
		</>
	);
}
