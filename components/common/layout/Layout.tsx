import "./layout.scss";

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <section className="layout">{children}</section>;
};

export default Layout;
