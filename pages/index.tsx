import type { NextPage } from 'next';
import fetcher from '../components/utils/fetcher';
import useSWR from 'swr';

import Layout from '../components/layout/Layout';
import SEO from '../components/layout/SEO';
import Hero from '../components/dashboard/main/Hero';
import Stats from '../components/dashboard/stats/Stats';
import Loading from '../components/dashboard/main/Loading';
import ActivityList from '../components/dashboard/activities/ActivityList';
import Segments from '../components/dashboard/segments/Segments';
import { Strava } from '../models/api/strava.model';
import Footer from '../components/layout/Footer';
import ErrorPanel from '../components/dashboard/main/ErrorPanel';
import PlaceholderPanel from '../components/dashboard/main/PlaceholderPanel';

// API Call

const Home: NextPage = () => {
	const { data, error } = useSWR<Strava>('/api/strava', fetcher);

	console.log(data);

	if (!data)
		return (
			<Layout>
				<PlaceholderPanel>
					<SEO />
					<Hero />
					<Loading />
					<Footer />
				</PlaceholderPanel>
			</Layout>
		);

	if (
		data.stats.message === 'Authorization Error' ||
		data.activities.message === 'Authorization Error' ||
		data.segments.message === 'Authorization Error'
	)
		return (
			<Layout>
				<PlaceholderPanel>
					<SEO />
					<Hero />
					<Loading />
					<ErrorPanel />
					<Footer />
				</PlaceholderPanel>
			</Layout>
		);

	if (error)
		return (
			<Layout>
				<SEO />
				<Hero />
				<Loading />
				<ErrorPanel />
				<Footer />
			</Layout>
		);

	return (
		<>
			<Layout>
				<SEO />
				<Hero />
				<Stats stats={data.stats} />
				<ActivityList activities={data.activities} />
				<Segments segments={data.segments} />
				<Footer />
			</Layout>
		</>
	);
};

export default Home;
