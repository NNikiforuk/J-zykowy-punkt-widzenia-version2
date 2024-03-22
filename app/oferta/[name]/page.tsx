"use client";

import Layout from "@/components/common/layout/Layout";
import styles from "../page.module.scss";
import { offerData, offerDataProps } from "@/data";
import { useEffect, useState } from "react";

const Suboffer = ({ params }: { params: { name: string } }) => {
	const paramsName = params.name;
	const [filteredOffer, setFilteredOffer] = useState<offerDataProps[]>([]);

	useEffect(() => {
		const filterOffers = offerData.filter((el) => el.link.includes(paramsName));
		setFilteredOffer(filterOffers);
	}, [params.name]);

	console.log(filteredOffer[0]);

	return (
		<Layout>
			{filteredOffer && (
				<div className="suboffer">
					<h2>{paramsName}</h2>
					<div>{filteredOffer[0].desc}</div>
				</div>
			)}
		</Layout>
	);
};

export default Suboffer;
