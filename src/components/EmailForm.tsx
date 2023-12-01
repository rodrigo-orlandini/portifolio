"use client";

import { useState } from "react";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";

import Input from "./Input";
import Button from "./Button";

import { sendEmail } from "@/services/send-email";

export const EmailForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [description, setDescription] = useState("");

	const submitEmail = async () => {
		if(name.trim().length === 0 
			|| email.trim().length === 0 
			|| description.trim().length === 0) {
				return null;
			}

		await sendEmail({ name, email, content: description });
	};

	return (
		<div className="w-full">
			<div className="flex justify-between mb-3">
				<div className="w-[38%]">
					<Input 
						placeholder="Name" 
						value={name} 
						setValue={setName} 
						hasIcon={true}
						icon={<PermIdentityIcon style={{ color: "#2A2FAF" }} width={24} height={24} />}
					/>
				</div>

				<div className="w-[58%]">
					<Input 
						placeholder="Email" 
						value={email} 
						setValue={setEmail} 
						hasIcon={true}
						icon={<AlternateEmailIcon style={{ color: "#2A2FAF" }} width={24} height={24} />}
					/>
				</div>
			</div>

			<Input 
				placeholder="Hey, how is it going? ..." 
				value={description} 
				setValue={setDescription} 
				isMultiline={true}
				numberOfLines={6}
			/>

			<div className="flex justify-end w-full mt-3">
				<Button 
					text="Send email" 
					style="bg-gradient-left-button"
					onClick={submitEmail} 
					hasIcon={true}
					icon={<ForwardToInboxIcon width={24} height={24} />}
				/>
			</div>
		</div>
	);
};