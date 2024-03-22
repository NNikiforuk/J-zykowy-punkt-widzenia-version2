import { Button } from "../common/button/Button";
import Image from "next/image";
import { offerProps } from "@/data";
import "./card.scss";
import Link from "next/link";

const Card = ({ id, imgSrc, alt, title, desc, link }: offerProps) => {
	return (
		<li key={id} className="item">
			<div className="item__img">
				<Image src={imgSrc} className="img" alt={alt} />
			</div>
			<p className="item__title">{title}</p>
			<p className="item__desc">{desc}</p>
			<Link href={link}>
				<Button primary={false} label="Sprawdź szczegóły" />
			</Link>
		</li>
	);
};

export default Card;
