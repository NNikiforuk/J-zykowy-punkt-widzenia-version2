import standardIMG from "./public/offer/standard.png";
import certificateIMG from "./public/offer/certificate.png";
import childrenIMG from "./public/offer/children.png";
import companyIMG from "./public/offer/company.png";
import individualIMG from "./public/offer/individual.png";
import intensiveIMG from "./public/offer/intensive.png";
import { StaticImageData } from "next/image";

export type offerProps = {
	id: number;
	imgSrc: StaticImageData;
	alt: string;
	title: string;
	desc: string;
};

type offerDataProps = offerProps[];

export const offerData: offerDataProps = [
	{
		id: 1,
		imgSrc: standardIMG,
		alt: "trójka uczniów",
		title: "Kurs standardowy",
		desc: "Nauka w grupie max. 4-osobowej, na poziomie od A1 do C2, z wykwalifikowanym lektorem lub native speakerem",
	},
	{
		id: 2,
		imgSrc: intensiveIMG,
		alt: "trójka uczniów z nosami w książkach",
		title: "Kurs intensywny",
		desc: "Kurs wakacyjny w grupach max. 4-osobowych",
	},
	{
		id: 3,
		imgSrc: individualIMG,
		alt: "uczeń i nauczyciel",
		title: "Kurs indywidualny",
		desc: "Przyspiesz naukę języka obcego dzięki indywidualnym zajęciom z native speakerem lub lektorem",
	},
	{
		id: 4,
		imgSrc: companyIMG,
		alt: "trzech mężczyzn siedzi przy stole w biurze",
		title: "Kurs branżowy",
		desc: "Kursy specjalistyczne pozwalają na rozwój swoich umiejętności w konkretnej dziedzinie lub branży",
	},
	{
		id: 5,
		imgSrc: childrenIMG,
		alt: "trójka dzieci z plecakami",
		title: "Kurs dla dzieci i młodzieży",
		desc: "Nauka języków obcych dostosowana do potrzeb dzieci i młodzieży",
	},
	{
		id: 6,
		imgSrc: certificateIMG,
		alt: "kobieta trzymająca certyfikat",
		title: "Przygotowanie do certyfikatu",
		desc: "Chętnie przygotujemy Cię do certyfikatów: Goethe, PNJN i TELC",
	},
];
