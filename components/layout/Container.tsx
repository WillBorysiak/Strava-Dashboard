interface ContainerPropTypes {
	children: React.ReactNode;
}

const Container = (props: ContainerPropTypes) => {
	return <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">{props.children}</div>;
};

export default Container;
