"use client";

import Layout from "../common/layout/Layout";
import "./opinions.scss";
import useEmblaCarousel from "embla-carousel-react";

const Opinions = () => {
	const [sliderRef] = useEmblaCarousel();

	return (
		<Layout>
			<div className="opinions">
				<h2>Opinie naszych kursantów</h2>
				<div className="slider" ref={sliderRef}>
					<div className="slider__container">
						<div className="slide">Slide 1</div>
						<div className="slide">Slide 2</div>
						<div className="slide">Slide 3</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Opinions;
