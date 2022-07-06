import type { NextPage } from 'next';
import { Strava } from '../models/strava.model';
import useSWR from 'swr';
import fetcher from '../components/data/fetcher';

import Layout from '../components/layout/Layout';
import Dashboard from '../components/dashboard/main/Dashboard';
import SEO from '../components/layout/SEO';
import Loading from '../components/dashboard/main/Loading';
import Hero from '../components/dashboard/main/Hero';
import Stats from '../components/dashboard/stats/Stats';
import Charts from '../components/dashboard/charts/Charts';
import Activities from '../components/dashboard/activities/Activities';
import Segments from '../components/dashboard/segments/Segments';
import Footer from '../components/layout/Footer';
import ErrorMessage from '../components/dashboard/main/ErrorMessage';

const Home: NextPage = () => {
	const { data, error } = useSWR<Strava>('/api/strava', fetcher);

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
				<Charts activities={data.activities} />
				<Activities activities={data.activities} />
				<Segments segments={data.segments} />
				<Footer />
			</Layout>
		</>
	);
};

export default Home;
