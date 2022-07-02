interface DashboardTypes {
	children: React.ReactNode;
}

const Dashboard = (props: DashboardTypes) => {
	return <div className="flex h-screen flex-col justify-between">{props.children}</div>;
};

export default Dashboard;
