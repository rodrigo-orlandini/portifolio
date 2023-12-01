"use client";

import { useRouter } from "next/navigation";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import Button from "@/components/Button";

export const ResumeForm = () => {
	const router = useRouter();

	const downloadResume = async () => {
		router.push("https://raw.githubusercontent.com/rodrigo-orlandini/portifolio-api/main/assets/cv-rodrigo-orlandini.pdf");
	};

	return (
		<>
			<h3 className="font-semibold text-2xl text-dark">GET MY <span className="text-purple">RESUME</span></h3>

			<p className="text-dark mt-3 mb-5">Or let’s get to know each other better. Download my resume here!</p>

			<Button 
				text="Resume" 
				style="bg-gradient-right-button"
				onClick={downloadResume} 
				hasIcon={true}
				icon={<FileDownloadOutlinedIcon width={24} height={24} />}
			/>
		</>
	);
};