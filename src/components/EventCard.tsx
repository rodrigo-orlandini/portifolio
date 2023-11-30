import { Event } from "@/models/event";

import EventTag from "./EventTag";

export enum EventCardColorTheme {
	DARK,
	LIGHT
}

interface EventCardProps {
	event: Event;
	theme: EventCardColorTheme;
}

const EventCard = ({ event }: EventCardProps) => {
	const description = event.description.length > 100 
		? `${event.description}...` 
		: event.description;

	return (
		<div className="bg-dark p-5 pb-3 mb-4 min-h-card-small w-full flex flex-col justify-between md:mb-0 md:w-card md:min-h-card">
			<div className="mb-4">
				<h5 className="font-semibold text-light-purple text-lg">{event.title.toUpperCase()}</h5>
				<p className="text-white mt-3">{description}</p>
			</div>

			<div className="flex flex-wrap">
				{event.tags?.map(tag => (
					<EventTag key={tag.id} tag={tag} />
				))}
			</div>
		</div>
	);
};

export default EventCard;