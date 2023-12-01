import Image from "next/image";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

import profile from "public/profile.png";

import Container from "@/components/Container";
import EventCard, { EventCardColorTheme } from "@/components/EventCard";
import { EmailForm } from "@/components/EmailForm";
import { ResumeForm } from "@/components/ResumeForm";
import { AboutMeForm } from "@/components/AboutMeForm";

import { fetchFeaturedProjects } from "@/services/fetch-featured-projects";

const Home = async () => {
	const featuredProjects = await fetchFeaturedProjects();

	return (
		<main>
			<section className="flex">
				<div className="w-1/6 bg-light-purple pt-20">
					<Image 
						src={profile}
						alt="Picture of Rodrigo"
						placeholder="blur"
						className="w-full ml-[50%] shadow-sm"
					/>
				</div>

				<div className="w-5/6 bg-dark py-20 -z-10 flex flex-col justify-center items-end px-24 text-white">
					<h1 className="font-semibold text-4xl mb-2">
						HI, I AM <span className="text-light-purple">RODRIGO ORLANDINI</span>
					</h1>
					
					<div className="flex flex-col items-end">
						<p>
							and I love to <strong className="text-light-purple"> design </strong> 
							and <strong className="text-light-purple"> build </strong>
							technological solutions with <strong className="text-light-purple"> great experiences.</strong>
						</p>

						<p>
							I also like to <strong className="text-light-purple"> write </strong> 
							about software development and another random things.
						</p>
					</div>
				</div>
			</section>

			<section className="bg-gradient-main">
				<Container style="py-20">
					<div className="flex justify-between text-white">
						<h3 className="font-semibold text-2xl">FEATURED <span className="text-light-purple">PROJECTS</span></h3>

						<div className="flex">
							<h4 className="mr-2">MORE PROJECTS</h4>

							<EastRoundedIcon />
						</div>
					</div>

					<div className="flex flex-wrap justify-between mt-8">
						{featuredProjects.map((project) => ( 
							<EventCard 
								key={project.id} 
								event={project} 
								theme={EventCardColorTheme.DARK} 
							/>
						))}
					</div>
				</Container>
			</section>

			<section>
				<Container style="py-20 flex justify-between">
					<div className="flex justify-between text-white w-3/6">
						<div>
							<h3 className="font-semibold text-2xl text-dark">CONTACT <span className="text-purple">ME</span></h3>

							<p className="text-dark mt-3 mb-5">Do you want to talk something with me? Send me an email!</p>

							<EmailForm />
						</div>
					</div>

					<div className="text-white w-3/6">
						<ResumeForm />

						<AboutMeForm />
					</div>
				</Container>
			</section>

			<section className="bg-light-purple">
				<Container style="py-20">
				<div className="flex justify-between text-white">
						<h3 className="font-semibold text-2xl text-dark">MY <span className="text-white">JOBS</span></h3>

						<div className="flex">
							<h4 className="mr-2">MORE JOBS</h4>

							<EastRoundedIcon />
						</div>
					</div>

					<div className="flex flex-wrap justify-between mt-8">
						{featuredProjects.map((project) => ( 
							<EventCard 
								key={project.id} 
								event={project} 
								theme={EventCardColorTheme.DARK} 
							/>
						))}
					</div>
				</Container>
			</section>

			<footer className="bg-dark">
				<Container style="py-10 text-white flex justify-between">
					<h4 className="text-xl font-semibold">RODRIGO ORLANDINI</h4>
					
					<div className="flex">
						<h6 className="mr-8">POSTS</h6>
						<h6 className="mr-8">PROJECTS</h6>
						<h6>JOBS</h6>
					</div>
				</Container>
			</footer>
		</main>
	);
}; 

export default Home;