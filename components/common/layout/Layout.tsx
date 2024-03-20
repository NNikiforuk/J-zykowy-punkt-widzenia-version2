import "./layout.scss";

type LayoutType = {
	fill?: boolean;
	children: React.ReactNode;
};

const Layout = ({ children, fill }: LayoutType) => {
	return (
		<section className={`layout ${fill && "layout--filled"}`}>
			{children}
		</section>
	);
};

export default Layout;
