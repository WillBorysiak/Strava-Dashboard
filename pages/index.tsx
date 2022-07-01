import type { NextPage } from 'next';
import fetcher from '../components/utils/fetcher';
import useSWR from 'swr';

import Layout from '../components/layout/Layout';
import SEO from '../components/layout/SEO';
import Hero from '../components/dashboard/Hero';
import Stats from '../components/dashboard/stats/Stats';
import Loading from '../components/dashboard/Loading';
import ActivityList from '../components/dashboard/activities/ActivityList';
import Segments from '../components/dashboard/segments/Segments';
import { Strava } from '../models/api/strava.model';

// API Call

const Home: NextPage = () => {
	const { data, error } = useSWR<Strava>('/api/strava', fetcher);

	if (!data)
		return (
			<Layout>
				<SEO />
				<Hero />
				<Loading />
			</Layout>
		);

	if (error)
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
				{/* <Stats stats={data.stats} />
				<ActivityList activities={data.activities} /> */}
				<Segments segments={data.segments} />
			</Layout>
		</>
	);
};

export default Home;
