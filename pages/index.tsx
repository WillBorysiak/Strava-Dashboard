import type { NextPage } from 'next';
import fetcher from '../components/utils/fetcher';
import useSWR from 'swr';

import Layout from '../components/layout/Layout';
import SEO from '../components/layout/SEO';
import Hero from '../components/dashboard/Hero';
import Stats from '../components/dashboard/stats/Stats';
import Loading from '../components/dashboard/Loading';
import ActivityList from '../components/dashboard/activities/ActivityList';

// API Call

const Home: NextPage = () => {
	const { data, error } = useSWR('/api/strava', fetcher);

	if (!data)
		return (
			<Layout>
				<SEO />
				<Hero />
				<Loading />
			</Layout>
		);

	return (
		<>
			<Layout>
				<SEO />
				<Hero />
				{/* <Stats data={data.stats} /> */}
				<ActivityList data={data.activities} />
			</Layout>
		</>
	);
};

export default Home;
