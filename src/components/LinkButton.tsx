import Image from "next/image";

interface LinkButtonProps {
	iconURL: string;
	text: string;
	link: string;
	style?: string;
}

const LinkButton = ({ 
	link, text, iconURL, style
}: LinkButtonProps) => {
	return (
		<a href={link} target="blank" className={`
			${style ?? ""}
			flex items-center justify-between py-3 px-4 shadow-smooth hover:cursor-pointer
		`}>
			<Image 
				src={iconURL}
				alt={text}
				width={24}
				height={24}
			/>

			<strong className="ml-2">{text}</strong>
		</a>
	);
};

export default LinkButton;