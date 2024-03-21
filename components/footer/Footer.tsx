import "./footer.scss";
import Layout from "../common/layout/Layout";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
	return (
		<Layout color="pink">
			<div className="footer">
				<h2>Kontakt</h2>
				<div className="footer__contact">
					<div className="icons">
						<Link
							aria-label="Zapraszam na mój Facebook"
							target="_blank"
							className="icon"
							href="https://www.facebook.com/profile.php?id=100077329971505"
						>
							<FaFacebook />
						</Link>
						<Link
							aria-label="Zapraszam na mój Youtube"
							target="_blank"
							className="icon"
							href="https://www.youtube.com/@jezykowypunktwidzenia"
						>
							<FaYoutube />
						</Link>
						<Link
							aria-label="Zapraszam na mój Instagram"
							target="_blank"
							className="icon"
							href="https://www.instagram.com/jpw_jezykowy_punkt_widzenia/"
						>
							<FaInstagram />
						</Link>
						<Link
							aria-label="Zapraszam na mój Tik Tok"
							target="_blank"
							className="icon"
							href="https://www.tiktok.com/@kasiaddobrzanska"
						>
							<FaTiktok />
						</Link>
					</div>
					<p className="tel">
						{/* <Link aria-label="Numer kontaktowy" href="tel:48603156142">
							(+48) 603 156 142
						</Link> */}
					</p>
					<p className="email">
						{/* <Link aria-label="Adres mailowy" href="mailto:kontakt@jpw-kursy.pl">
							kontakt@jpw-kursy.pl
						</Link> */}
					</p>
				</div>
				<div className="footer__details">
					<div className="downloads">
						<h4>Do pobrania</h4>
						<p>
							{/* <Link
								aria-label="Zapraszam do zapoznania się z polityką prywatności"
								target="_blank"
								href="/public/files/Polityka_prywatnosci.pdf"
								download={true}
							>
								<p>Polityka prywatności</p>
							</Link> */}
						</p>
						<p>
							{/* <Link
								aria-label="Zapraszam do zapoznania się z regulaminem kursu online"
								target="_blank"
								href="/public/files/Regulamin.pdf"
								download={true}
							>
								<div>Regulamin kursu online</div>
							</Link> */}
						</p>
						<p className="center">
							{/* <Link
								aria-label="Zapraszam do zapoznania się z regułami przetwarzania danych osobowych"
								download={true}
								target="_blank"
								href="/public/files/Przetwarzanie_danych_osobowych.pdf"
							>
								<p>Przetwarzanie danych osobowych</p>
							</Link> */}
						</p>
					</div>
					<div className="company__details">
						<h4>Dane firmy</h4>
						<p>JĘZYKOWY PUNKT WIDZENIA</p>
						<p>z siedzibą w Międzylesiu 17</p>
						<p>67-313 Niegosławice</p>
						<p>REGON: 386531965</p>
						<p>NIP: 9241915728</p>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Footer;
