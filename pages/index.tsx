import type { NextPage } from 'next';

import useSWR from 'swr';

import Layout from '../components/layout/Layout';
import SEO from '../components/layout/SEO';
import Hero from '../components/dashboard/main/Hero';
import Stats from '../components/dashboard/stats/Stats';
import Loading from '../components/dashboard/main/Loading';
import ActivityList from '../components/dashboard/activities/ActivityList';
import Segments from '../components/dashboard/segments/Segments';
import { Strava } from '../models/strava.model';
import Footer from '../components/layout/Footer';
import ErrorMessage from '../components/dashboard/main/ErrorMessage';
import Dashboard from '../components/dashboard/main/Dashboard';
import fetcher from '../components/data/fetcher';
import Charts from '../components/dashboard/charts/Charts';

const Home: NextPage = () => {
	const { data, error } = useSWR<Strava>('/api/strava', fetcher);

	console.log(data);

	if (!data)
		return (
			<Layout>
				<Dashboard>
					<SEO />
					<Hero />
					<Loading />
					<Footer />
				</Dashboard>
			</Layout>
		);

	if (data.stats.message === 'Authorization Error')
		return (
			<Layout>
				<Dashboard>
					<SEO />
					<Hero />
					<Loading />
					<ErrorMessage />
					<Footer />
				</Dashboard>
			</Layout>
		);

	if (error)
		return (
			<Layout>
				<SEO />
				<Hero />
				<Loading />
				<ErrorMessage />
				<Footer />
			</Layout>
		);

	return (
		<>
			<Layout>
				<SEO />
				<Hero />
				<Stats stats={data.stats} />
				<Charts />
				<ActivityList activities={data.activities} />
				<Segments segments={data.segments} />
				<Footer />
			</Layout>
		</>
	);
};

export default Home;
