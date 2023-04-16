const LoadingContainer = (props: { children: React.ReactNode }) => {
	return <div className="flex h-screen flex-col justify-between lg:h-screen">{props.children}</div>;
};

export default LoadingContainer;
