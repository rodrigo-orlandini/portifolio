import Image from "next/image";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

import profile from "public/profile.jpg";

import Container from "@/components/Container";
import EventCard, { EventCardColorTheme } from "@/components/EventCard";

import { fetchFeaturedProjects } from "@/services/fetch-featured-projects";

const Home = async () => {
	const featuredProjects = await fetchFeaturedProjects();

	return (
		<main>
			<section className="flex">
				<div className="w-1/6 bg-light-purple py-20">
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
						{featuredProjects.map((project, index) => ( 
							<EventCard 
								key={project.id} 
								event={project} 
								theme={EventCardColorTheme.DARK} 
							/>
						))}
					</div>
				</Container>
			</section>
		</main>
	);
}; 

export default Home;