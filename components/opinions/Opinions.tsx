"use client";

import "./carousel/carousel.scss";
import Layout from "../common/layout/Layout";
import EmblaCarousel from "./carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: false };

const Opinions = () => {
	return (
		<Layout>
			<div className="opinions">
				<h2>Opinie naszych kursantów</h2>
				<EmblaCarousel options={OPTIONS} />
			</div>
		</Layout>
	);
};

export default Opinions;
