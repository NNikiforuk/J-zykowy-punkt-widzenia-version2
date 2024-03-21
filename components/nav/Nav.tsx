import "./nav.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

const Nav = () => {
	return (
		<nav className="nav">
			<ul className="list">
				<li className="list__item">
					<Link href="">Opinie</Link>
				</li>
				<li className="list__item">
					<Link href="">Oferta</Link>
				</li>
				<li className="list__item list__item--logo">
					<Link href="">
						<Image className="img" src={logo} alt="logo firmy" />
					</Link>
				</li>
				<li className="list__item">
					<Link href="">O mnie</Link>
				</li>
				<li className="list__item">
					<Link href="">Kontakt</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
