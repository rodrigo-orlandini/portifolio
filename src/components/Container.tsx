import { PropsWithChildren } from "react";

interface ContainerProps {
	style?: string;
}

const Container = (props: PropsWithChildren<ContainerProps>) => {
	return <div className={`px-24 ${props.style ?? ""}`}>{props.children}</div>;
};

export default Container;