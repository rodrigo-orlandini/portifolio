import { Event } from "@/models/event";
import { apiConfig } from "./config";

export const fetchFeaturedProjects = async (): Promise<Event[]> => {
	const response = await fetch(`${apiConfig.baseURL}/event/featured-projects`, {
		next: { revalidate: 60 } // 60 seconds
	});

	const json = await response.json();

	return json.featuredProjects;
};