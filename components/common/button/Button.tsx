import "./button.scss";

type ButtonProps = {
	primary: boolean;
	label: string;
	onClick?: () => void;
};

export const Button = ({ primary, label }: ButtonProps) => {
	return (
		<button
			type="button"
			className={`btn ${primary ? "btn--primary" : "btn--secondary"}`}
		>
			{label}
		</button>
	);
};
