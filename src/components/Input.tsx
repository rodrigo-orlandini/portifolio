import React, { SetStateAction } from "react";

interface InputProps {
	hasIcon?: boolean;
	icon?: React.ReactNode;
	placeholder: string;
	value: string;
	setValue: (event: SetStateAction<string>) => void;
	isMultiline?: boolean;
	numberOfLines?: number;
	style?: string;
}

const Input = ({ 
	hasIcon, icon, placeholder, value, setValue, style, isMultiline,
	numberOfLines = 1
}: InputProps) => {
	return (
		<div className="border-2 border-purple w-full flex items-center pl-2 lg:pl-3">
			{hasIcon && icon}

			{isMultiline ? (
				<textarea 
					placeholder={placeholder}
					value={value}
					onChange={event => setValue(event.target.value)} 
					className={`py-3 w-full pr-3 text-dark ${hasIcon && "pl-2"} ${style ?? ""}`}
					rows={numberOfLines}
				/>
			) : (
				<input 
					placeholder={placeholder}
					value={value}
					onChange={event => setValue(event.target.value)} 
					className={`py-3 w-full pr-3 text-dark ${hasIcon && "pl-2"} ${style ?? ""}`}
				/>
			)}
		</div>
	);
};

export default Input;