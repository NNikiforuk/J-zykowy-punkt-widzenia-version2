"use client";

import "./header.scss";
import { Gluten } from "next/font/google";
import Nav from "../nav/Nav";
import { TypeAnimation } from "react-type-animation";
import { Button } from "../common/button/Button";

export const gluten = Gluten({
	subsets: ["latin"],
	weight: "400",
});

const Header = () => {
	return (
		<header className="header">
			<Nav />
			<h1 className="header__h1">JĘZYKOWY PUNKT WIDZENIA</h1>
			<p className={`header__welcome ${gluten.className}`}>
				Witaj w szkole języków obcych online!
			</p>
			<p className="header__students">
				Zapraszamy na kursy dla dzieci, młodziezy i dorosłych.
			</p>
			<p className="header__languages">
				Zacznij płynnie mówić po polsku, angielsku, niemiecku i niderlandzku.
			</p>
			<TypeAnimation
				sequence={[
					"Cześć!",
					3000,
					"Hi! Nice to meet you",
					3000,
					"Hallo, guten Morgen",
					3000,
					"Hoe gaat het met je?",
					3000,
				]}
				className="header__animation"
				wrapper="span"
				speed={30}
				style={{ display: "inline-block" }}
				repeat={Infinity}
			/>
			<div className="header__btn">
				<Button primary={true} label="Poznaj ofertę" />
			</div>
		</header>
	);
};

export default Header;
