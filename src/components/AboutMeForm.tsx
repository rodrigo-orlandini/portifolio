"use client";

import github from "public/github.svg";
import linkedin from "public/linkedin.svg";

import ComposedButton from "./ComposedButton";

export const AboutMeForm = () => {
	const goToGithub = () => {};
	const goToLinkedin = () => {};

	return (
		<div className="mt-20">
			<h3 className="font-semibold text-2xl text-dark mt-">A LITTLE MORE <span className="text-purple">ABOUT ME</span></h3>

			<p className="text-dark mt-3 mb-5">Follow me on social platforms for professionals.</p>

			<div className="flex">
				<ComposedButton 
					onClick={goToGithub}
					text="GITHUB"
					iconURL={github}
					style="bg-dark mr-3"
				/>

				<ComposedButton 
					onClick={goToLinkedin}
					text="LINKEDIN"
					iconURL={linkedin}
					style="bg-purple"
				/>
			</div>
		</div>
	);
};