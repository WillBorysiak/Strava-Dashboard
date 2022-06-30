import type { NextPage } from 'next';
import fetcher from '../utils/fetcher';
import useSWR from 'swr';

import Layout from '../components/layout/Layout';
import SEO from '../components/layout/SEO';
import Hero from '../components/dashboard/Hero';
import Stats from '../components/dashboard/stats/Stats';
import Loading from '../components/dashboard/Loading';
import ActivityList from '../components/dashboard/activities/ActivityList';

// API Call

const Home: NextPage = () => {
	// const { data, error } = useSWR('/api/strava', fetcher);

	// if (!data)
	// 	return (
	// 		<Layout>
	// 			<SEO />
	// 			<Hero />
	// 			<Loading />
	// 		</Layout>
	// 	);

	// console.log(data);

	return (
		<>
			<Layout>
				<SEO />
				<Hero />

				{/* <Stats data={data.stats} /> */}
				<ActivityList />
			</Layout>
		</>
	);
};

export default Home;
