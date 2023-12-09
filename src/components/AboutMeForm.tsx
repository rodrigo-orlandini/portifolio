"use client";

import github from "public/social/github.svg";
import linkedin from "public/social/linkedin.svg";
import whatsapp from "public/social/whatsapp.svg";

import LinkButton from "./LinkButton";

export const AboutMeForm = () => {
	return (
		<div className="mt-10">
			<h3 className="font-semibold text-2xl text-dark">A LITTLE MORE <span className="text-purple">ABOUT ME</span></h3>

			<p className="text-dark mt-3 mb-5">Follow me on social and professional platforms.</p>

			<div className="flex flex-wrap">
				<LinkButton 
					link="https://github.com/rodrigo-orlandini"
					text="GITHUB"
					iconURL={github}
					style="bg-dark mr-3 mb-3"
				/>

				<LinkButton 
					link="https://www.linkedin.com/in/rodrigo-orlandini-a72b081b3/"
					text="LINKEDIN"
					iconURL={linkedin}
					style="bg-purple mr-3 mb-3"
				/>

				<LinkButton 
					link="https://api.whatsapp.com/send?phone=5519992125370"
					text="WHATSAPP"
					iconURL={whatsapp}
					style="bg-green mb-3"
				/>
			</div>
		</div>
	);
};