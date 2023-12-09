import { apiConfig } from "./config";

interface SendEmailRequest {
	name: string;
	email: string;
	content: string;
}

export const sendEmail = async (data: SendEmailRequest): Promise<void> => {
	const response = await fetch(`${apiConfig.baseURL}/contact`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	});

	console.log(response.status);
};