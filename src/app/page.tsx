import Image from "next/image";
import Link from "next/link";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

import profile from "public/social/profile.png";

import Container from "@/components/Container";
import EventCard, { EventCardColorTheme } from "@/components/EventCard";
import { EmailForm } from "@/components/EmailForm";
import { ResumeForm } from "@/components/ResumeForm";
import { AboutMeForm } from "@/components/AboutMeForm";

import { featuredProjects } from "@/data/featured-projects";
import { featuredJobs } from "@/data/featured-jobs";

const Home = async () => {
	return (
		<main>
			<section className="flex flex-col md:flex-row" id="me">
				<div className="w-full md:w-1/6 bg-light-purple pt-10 md:pt-20">
					<Image 
						src={profile}
						alt="Picture of Rodrigo"
						placeholder="empty"
						className="w-auto md:w-full max-h-64 mx-auto md:ml-[50%] shadow-sm"
					/>
				</div>

				<div className="w-full md:w-5/6 bg-dark py-10 md:py-20 -z-10 flex flex-col justify-center items-center md:items-end px-24 text-white">
					<h1 className="font-semibold mb-2 text-2xl lg:text-4xl">
						HI, I AM <span className="text-light-purple">RODRIGO ORLANDINI</span>
					</h1>
					
					<div className="flex flex-col items-end text-sm lg:text-base">
							<p className="text-center md:text-right">
								and I love to <strong className="text-light-purple"> design </strong> 
								and <strong className="text-light-purple"> build </strong>
								technological solutions with <strong className="text-light-purple"> great experiences. </strong>
								<br/>
								I also like to <strong className="text-light-purple"> write </strong> 
								about software development and another random things.
							</p>
					</div>
				</div>
			</section>

			<section className="bg-gradient-main" id="projects">
				<Container style="py-10 md:py-20">
					<div className="flex justify-between text-white">
						<h3 className="font-semibold text-2xl">FEATURED <span className="text-light-purple">PROJECTS</span></h3>

						<a href="https://github.com/rodrigo-orlandini" className="flex">
							<h4 className="mr-2">MORE PROJECTS</h4>

							<EastRoundedIcon />
						</a>
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
				<Container style="py-10 md:py-20 flex flex-col md:flex-row justify-between" >
					<div className="flex justify-between text-white w-full md:w-[45%]">
						<div className="w-full md:w-auto">
							<h3 className="font-semibold text-2xl text-dark">CONTACT <span className="text-purple">ME</span></h3>

							<p className="text-dark mt-3 mb-5">Do you want to talk something with me? Send me an email!</p>

							<EmailForm />
						</div>
					</div>

					<div className="text-white w-full md:w-[45%] mt-5 md:mt-0">
						<ResumeForm />

						<AboutMeForm />
					</div>
				</Container>
			</section>

			<section className="bg-light-purple" id="jobs">
				<Container style="py-10 md:py-20">
					<div className="flex justify-between text-white">
						<h3 className="font-semibold text-2xl text-dark">MY <span className="text-white">JOBS</span></h3>

						<a href="https://github.com/rodrigo-orlandini" className="flex text-dark">
							<h4 className="mr-2">MORE JOBS</h4>

							<EastRoundedIcon />
						</a>
					</div>

					<div className="flex flex-wrap justify-between mt-8">
						{featuredJobs.map((job) => ( 
							<EventCard 
								key={job.id} 
								event={job} 
								theme={EventCardColorTheme.DARK} 
							/>
						))}
					</div>
				</Container>
			</section>

			<footer className="bg-dark">
				<Container style="py-10 text-white flex justify-between">
					<Link href="#me" className="text-xl font-semibold">RODRIGO ORLANDINI</Link>
					
					<div className="flex">
						<Link href="#projects" className="mr-8">PROJECTS</Link>
						<Link href="#jobs">JOBS</Link>
					</div>
				</Container>
			</footer>
		</main>
	);
}; 

export default Home;