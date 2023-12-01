import { EventTag } from "./event-tag";

export interface Event {
	id: string;
	title: string;
	description: string;
	accessURL: string;
	finishedAt: Date | null;
	tags: EventTag[] | null;
}
