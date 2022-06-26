import { useEffect } from 'react';

interface LayoutPropTypes {
	children: React.ReactNode;
}

const Layout = (props: LayoutPropTypes) => {
	// Set dark mode on load
	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.add('dark');
	});

	return <div className="overflow-y-hidden">{props.children}</div>;
};

export default Layout;
