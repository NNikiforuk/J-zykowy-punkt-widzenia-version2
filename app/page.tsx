// import styles from "./page.module.scss";

import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Oval from "@/components/header/oval";
import Offer from "@/components/offer/Offer";
import Opinions from "@/components/opinions/Opinions";

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
