interface PlaceholderPanelTypes {
	children: React.ReactNode;
}

const PlaceholderPanel = (props: PlaceholderPanelTypes) => {
	return <div className="flex h-screen flex-col justify-between">{props.children}</div>;
};

export default PlaceholderPanel;
