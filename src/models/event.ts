import { EventTag } from "./event-tag";

export interface EventProps {
	id: string;
	title: string;
	description: string;
	thumbURL: string;
	accessURL: string;
	isHighlighted: boolean;
	startedAt: Date;
	finishedAt: Date | null;
	tags: EventTag[] | null;
}
