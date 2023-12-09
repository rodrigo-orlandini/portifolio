import { randomUUID } from "node:crypto";

import { EventTag } from "@/models/event-tag";

import node from "public/technologies/node.svg";
import typescript from "public/technologies/typescript.svg";
import fastify from "public/technologies/fastify.svg";
import golang from "public/technologies/golang.svg"; //
import react from "public/technologies/react.svg";
import express from "public/technologies/express.svg";
import nestjs from "public/technologies/nestjs.svg"; //
import python from "public/technologies/python.svg";
import docker from "public/technologies/docker.svg"; //
import html from "public/technologies/html.svg";
import css from "public/technologies/css.svg";
import javascript from "public/technologies/javascript.svg"; //
import php from "public/technologies/php.svg"; //
import nextjs from "public/technologies/next.svg";
import tailwindcss from "public/technologies/tailwind.svg";

export const tags: EventTag[] = [{
	id: randomUUID(),
	title: "NodeJS",
	iconURL: node,
	backgroundColorHexCode: "#22A367",
	textColorHexCode: "#FFFFFF"
}, {
	id: randomUUID(),
	title: "Typescript",
	iconURL: typescript,
	backgroundColorHexCode: "#4276B4",
	textColorHexCode: "#FFFFFF"
}, {
	id: randomUUID(),
	title: "Fastify",
	iconURL: fastify,
	backgroundColorHexCode: "#FFFFFF",
	textColorHexCode: "#222A33"
}, {
	id: randomUUID(),
	title: "Golang",
	iconURL: golang,
	backgroundColorHexCode: "#2DBBAE",
	textColorHexCode: "#FFFFFF"
}, {
	id: randomUUID(),
	title: "React",
	iconURL: react,
	backgroundColorHexCode: "#4276B4",
	textColorHexCode: "#FFFFFF"
}, {
	id: randomUUID(),
	title: "Express",
	iconURL: express,
	backgroundColorHexCode: "#FFFFFF",
	textColorHexCode: "#222A33"
}, {
	id: randomUUID(),
	title: "NestJS",
	iconURL: nestjs,
	backgroundColorHexCode: "#090909",
	textColorHexCode: "#E0234E"
}, {
	id: randomUUID(),
	title: "Python",
	iconURL: python,
	backgroundColorHexCode: "#FFE100",
	textColorHexCode: "#222A33"
}, {
	id: randomUUID(),
	title: "Docker",
	iconURL: docker,
	backgroundColorHexCode: "#FFFFFF",
	textColorHexCode: "#00ACD3"
}, {
	id: randomUUID(),
	title: "HTML",
	iconURL: html,
	backgroundColorHexCode: "#F48E18",
	textColorHexCode: "#FFFFFF"
}, {
	id: randomUUID(),
	title: "CSS",
	iconURL: css,
	backgroundColorHexCode: "#4276B4",
	textColorHexCode: "#FFFFFF"
}, {
	id: randomUUID(),
	title: "Javascript",
	iconURL: javascript,
	backgroundColorHexCode: "#F7DF1E",
	textColorHexCode: "#0E141B"
}, {
	id: randomUUID(),
	title: "PHP",
	iconURL: php,
	backgroundColorHexCode: "#FFFFFF",
	textColorHexCode: "#777BB3"
}, {
	id: randomUUID(),
	title: "NextJS",
	iconURL: nextjs,
	backgroundColorHexCode: "#FFFFFF",
	textColorHexCode: "#222A33"
}, {
	id: randomUUID(),
	title: "TailwindCSS",
	iconURL: tailwindcss,
	backgroundColorHexCode: "#00ACC1",
	textColorHexCode: "#FFFFFF"
}];