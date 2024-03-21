import "./layout.scss";

type LayoutType = {
	color?: string;
	children: React.ReactNode;
};

const Layout = ({ children, color }: LayoutType) => {
	return (
		<section
			className={`layout ${color && (color === "green" ? "layout--green" : "layout--pink")}`}
		>
			{children}
		</section>
	);
};

export default Layout;
