import { randomUUID } from "node:crypto";
import { Event } from "@/models/event";
import { tags } from "./tags";

export const featuredProjects: Event[] = [{
	id: randomUUID(),
	title: "Forum System",
	description: "A forum application built without any framework to practice DDD principles and Clean Architecture implementation.",
	accessURL: "https://github.com/rodrigo-orlandini/forum-ddd",
	finishedAt: new Date(),
	tags: [tags[0], tags[1]]
}, {
	id: randomUUID(),
	title: "GymPass API",
	description: "An API with core features of a system like GymPass.",
	accessURL: "https://github.com/rodrigo-orlandini/gym-pass-api",
	finishedAt: new Date(),
	tags: [tags[0], tags[1], tags[2]]
}, {
	id: randomUUID(),
	title: "Codepix Bank",
	description: "An application simulating the bank process to deal with accounts and pix keys. This project was done during FullCycle Imersion Week event and I used it to start learning Golang.",
	accessURL: "https://github.com/rodrigo-orlandini/codepix-go",
	finishedAt: new Date(),
	tags: [tags[3]]
}];