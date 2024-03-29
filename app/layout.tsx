import type { Metadata } from "next";
import { K2D } from "next/font/google";
import "./globals.scss";

const k2d = K2D({
	subsets: ["latin"],
	weight: ["400", "800"],
});

export const metadata: Metadata = {
	title: "Językowy punkt widzenia",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className={k2d.className}>{children}</body>
		</html>
	);
}
