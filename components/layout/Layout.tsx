interface LayoutPropTypes {
	children: React.ReactNode;
}

const Layout = (props: LayoutPropTypes) => {
	return <div className=" overflow-y-hidden bg-gradient-to-b from-[#3e4549] to-[#1a1b1c]">{props.children}</div>;
};

export default Layout;
