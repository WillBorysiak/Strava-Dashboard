interface HeadingPropTypes {
	text: string;
}

const Heading = (props: HeadingPropTypes) => {
	return (
		<h2 className="px-5 text-center font-oswald text-3xl font-extrabold text-zinc-200 sm:text-4xl">{props.text}</h2>
	);
};

export default Heading;
