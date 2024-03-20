import Layout from "../common/layout/Layout";
import WavesBottom from "./WavesBottom";
import WavesTop from "./WavesTop";
import { offerData } from "@/data";
import Card from "./Card";
import "./offer.scss";

const Offer = () => {
	return (
		<>
			<WavesTop />
			<Layout fill={true}>
				<div className="offer">
					<h2>Poznaj naszą ofertę</h2>
					<ul className="list">
						{offerData.map((el) => {
							return (
								<Card
									id={el.id}
									imgSrc={el.imgSrc}
									alt={el.alt}
									title={el.title}
									desc={el.desc}
								/>
							);
						})}
					</ul>
				</div>
			</Layout>
			<WavesBottom />
		</>
	);
};

export default Offer;
