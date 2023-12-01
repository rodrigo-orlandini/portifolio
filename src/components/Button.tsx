"use client";

interface ButtonProps {
	hasIcon?: boolean;
	icon?: React.ReactNode;
	text: string;
	onClick: () => void;
	style?: string;
}

const Button = ({ 
	onClick, text, hasIcon, icon, style
}: ButtonProps) => {
	return (
		<button onClick={onClick} className={`
			flex items-center justify-between bg-purple py-3 px-4 shadow-smooth
			${style ?? ""}
		`}>
			<span className={`font-light ${hasIcon && "mr-3"}`}>{text}</span>

			{hasIcon && icon}
		</button>
	);
};

export default Button;