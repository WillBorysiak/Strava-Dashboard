interface HeadingPropTypes {
	text: string;
}

const Heading = (props: HeadingPropTypes) => {
	return <h2 className="px-5 text-center font-oswald text-4xl font-extrabold text-zinc sm:text-5xl">{props.text}</h2>;
};

export default Heading;
