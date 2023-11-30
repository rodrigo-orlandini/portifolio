import { EventTag } from "@/models/event-tag";
import Image from "next/image";

interface EventTagProps {
	tag: EventTag;
}

const EventTag = (props: EventTagProps) => {
	
return (
		<div className="mr-2 p-2 mb-2 flex" style={{ backgroundColor: props.tag.backgroundColorHexCode }}>
			<Image 
				src={props.tag.iconURL}
				alt={props.tag.title}
				width={20}
				height={20}
				className="mr-2"
			/>

			<strong className="text-sm" style={{ color: props.tag.textColorHexCode }} >{props.tag.title.toUpperCase()}</strong>
		</div>
	);
};

export default EventTag;