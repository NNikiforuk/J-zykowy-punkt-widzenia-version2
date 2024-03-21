import "./footer.scss";
import Layout from "../common/layout/Layout";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
	return (
		<Layout color="pink">
			<div className="footer">
				<h2>Kontakt</h2>
				<div className="footer__contact">
					<div className="icons">
						<div className="icon">
							<a
								aria-label="Zapraszam na mój Facebook"
								target="_blank"
								className="icon"
								href="https://www.facebook.com/profile.php?id=100077329971505"
							>
								<FaFacebook />
							</a>
						</div>
						<div className="icon">
							<a
								aria-label="Zapraszam na mój Youtube"
								target="_blank"
								className="icon"
								href="https://www.youtube.com/@jezykowypunktwidzenia"
							>
								<FaYoutube />
							</a>
						</div>
						<div className="icon">
							<a
								aria-label="Zapraszam na mój Instagram"
								target="_blank"
								className="icon"
								href="https://www.instagram.com/jpw_jezykowy_punkt_widzenia/"
							>
								<FaInstagram />
							</a>
						</div>
						<div className="icon">
							<a
								aria-label="Zapraszam na mój Tik Tok"
								target="_blank"
								className="icon"
								href="https://www.tiktok.com/@kasiaddobrzanska"
							>
								<FaTiktok />
							</a>
						</div>
					</div>
					<div className="contacts">
						<div className="contacts__tel">
							<a aria-label="Numer kontaktowy" href="tel:48603156142">
								(+48) 603 156 142
							</a>
						</div>
						<div className="contacts__email">
							<a aria-label="Adres mailowy" href="mailto:kontakt@jpw-kursy.pl">
								kontakt@jpw-kursy.pl
							</a>
						</div>
					</div>
				</div>
				<div className="footer__details">
					<div className="downloads">
						<h4>Do pobrania</h4>
						<div>
							<a
								aria-label="Zapraszam do zapoznania się z polityką prywatności"
								target="_blank"
								href="/public/files/Polityka prywatności.pdf"
								download="Polityka prywatności"
							>
								Polityka prywatności
							</a>
						</div>
						<div>
							<a
								aria-label="Zapraszam do zapoznania się z regulaminem kursu online"
								target="_blank"
								href="/public/files/Regulamin kursu online.pdf"
								download="Regulamin kursu online"
							>
								Regulamin kursu online
							</a>
						</div>
						<div className="center">
							<a
								aria-label="Zapraszam do zapoznania się z regułami przetwarzania danych osobowych"
								download="Przetwarzanie danych osobowych"
								target="_blank"
								href="/public/files/Przetwarzanie danych osobowych.pdf"
							>
								Przetwarzanie danych osobowych
							</a>
						</div>
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
				<div className="footer__copyright">
					<small>© Copyright 2023 Językowy punkt widzenia</small>
				</div>
			</div>
		</Layout>
	);
};

export default Footer;
