import { randomUUID } from "node:crypto";
import { Event } from "@/models/event";
import { tags } from "./tags";

export const featuredJobs: Event[] = [{
	id: randomUUID(),
	title: "Classist",
	description: "A complete tariff classification platform. Here I use many technologies, such as Express, NestJS, React, Python, Github Actions, Docker, etc. Download my resume bellow to get more information.",
	accessURL: "https://classist.com.br/",
	finishedAt: new Date(),
	tags: [tags[4], tags[5], tags[6], tags[7], tags[8]]
}, {
	id: randomUUID(),
	title: "Lenscope",
	description: "A fully online optical store. In this startup I learned a lot about web development and its basic technologies. Here I used HTML, CSS with Bootstrap, Javascript with JQuery and PHP. Download my resume bellow to get more information.",
	accessURL: "https://lenscope.com.br/",
	finishedAt: new Date(),
	tags: [tags[9], tags[10], tags[11], tags[12]]
}, {
	id: randomUUID(),
	title: "JF Construções",
	description: "A freelance job where I made a simple landing page made for JF Construções.",
	accessURL: "https://jf-construcoes.vercel.app/",
	finishedAt: new Date(),
	tags: [tags[13], tags[1], tags[14]]
}];