interface HeadingPropTypes {
	content: string;
}

const Heading = (props: HeadingPropTypes) => {
	return (
		<h2 className="text-center font-kalam text-3xl font-extrabold text-dark dark:text-light sm:text-4xl">
			{props.content}
		</h2>
	);
};

export default Heading;
