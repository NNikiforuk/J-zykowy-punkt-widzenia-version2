import "./button.scss";

type ButtonProps = {
	primary?: boolean;
	backgroundColor?: string;
	label: string;
	onClick?: () => void;
};

export const Button = ({
	primary = true,
	backgroundColor,
	label,
}: ButtonProps) => {
	const mode = primary ? "btn--primary" : "btn--secondary";
	return (
		<button type="button" className={["btn", mode].join(" ")}>
			{label}
			<style jsx>{`
				button {
					background-color: ${backgroundColor};
				}
			`}</style>
		</button>
	);
};
