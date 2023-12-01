import Image from "next/image";

interface ComposedButtonProps {
	iconURL: string;
	text: string;
	onClick: () => void;
	style?: string;
}

const ComposedButton = ({ 
	onClick, text, iconURL, style
}: ComposedButtonProps) => {
	return (
		<div onClick={onClick} className={`
			${style ?? ""}
			flex items-center justify-between py-3 px-4 shadow-smooth
		`}>
			<Image 
				src={iconURL}
				alt={text}
				width={24}
				height={24}
			/>

			<strong className="ml-2">{text}</strong>
		</div>
	);
};

export default ComposedButton;