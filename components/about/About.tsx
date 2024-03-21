"use client";

import { gluten } from "../header/Header";
import Layout from "../common/layout/Layout";
import "./about.scss";
import Image from "next/image";
import blobIMG from "../../public/blob.png";

const About = () => {
	return (
		<Layout fill={false}>
			<div className="about">
				<h2>O mnie</h2>
				<div className="about__container">
					<div className="about__img">
						<Image
							src={blobIMG}
							objectFit="contain"
							alt="zdjęcie załozycielki szkoły"
							className="img"
							height={150}
							width={170}
						/>
					</div>
					<div className="about__first__two__textblocks">
						<p className={`about__header ${gluten.className}`}>
							Hej! Nazywam się Kasia Dobrzańska
						</p>
						<p className="about__intro">
							Językowy punkt widzenia stworzyłam 3 lata temu, aby pomóc
							kursantom sprawnie komunikować się w języku obcym. Moja przygoda z
							j. niemieckim zaczęła się w szkole podstawowej. Postanowiłam ją
							kontynuować na studiach, wybierając kierunek Germanistyka na
							Uniwersytecie Zielonogórskim.
						</p>
						<p className="about__school">
							Moja szkoła językowa jest instytucją szkoleniową wpisaną w rejestr
							instytucji szkoleniowych, a ja w dalszym ciągu rozwijam swoją
							znajomość językową. Uczęszczam na różnorodne szkolenia i kursy.
							Zdobywając nowe doświadczenia i wiedzę, stale podwyższające moje
							kompetencje jako lektor j. niemieckiego.
						</p>
					</div>
				</div>
				<p className="about__exp">
					W 2016 r. wyjechałam do Berlina, gdzie mieszkałam i pracowałam, aby
					podszkolić zarówno język potoczny jak i urzędowy. Swoje doświadczenie
					zdobyłam w różnych obszarach m.in. obsługa klienta, transport czy
					księgowość, a także dzięki pracy w międzynarodowych korporacjach
					(m.in. Amazon, Capgemini).
				</p>
			</div>
		</Layout>
	);
};

export default About;
