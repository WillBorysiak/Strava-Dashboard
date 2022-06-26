import type { NextPage } from 'next';

import Layout from '../components/layout/Layout';
import SEO from '../components/layout/SEO';
import Data from '../components/strava/Data';

const Home: NextPage = () => {
	return (
		<>
			<Layout>
				<SEO />
				<div className="flex h-screen w-screen flex-col items-center justify-center">
					<h2 className="py-20 text-5xl">Cycling Dashboard</h2>
					<Data />
				</div>
			</Layout>
		</>
	);
};

export default Home;
