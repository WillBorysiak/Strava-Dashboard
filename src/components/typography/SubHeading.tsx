interface HeadingPropTypes {
	text: string;
}

const SubHeading = (props: HeadingPropTypes) => {
	return <h3 className="font-extraboldsm:text-3xl px-5 text-center font-oswald text-2xl">{props.text}</h3>;
};

export default SubHeading;
