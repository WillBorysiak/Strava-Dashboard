import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import type { NextPage } from 'next';
import useSWR from 'swr';

import Dashboard from '../components/dashboard/home/Dashboard';
import ErrorMessage from '../components/dashboard/home/ErrorMessage';
import Hero from '../components/dashboard/home/Hero';
import Loading from '../components/dashboard/home/Loading';
import Running from '../components/dashboard/running/Running';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import SEO from '../components/layout/SEO';
import fetcher from '../components/utils/fetcher';
import { Strava } from '../models/strava.model';

const Home: NextPage = () => {
	const { data, error } = useSWR<Strava>('/api/strava', fetcher);

	// format data
	dayjs.extend(weekOfYear);
	dayjs.Ls.en.weekStart = 1;
	data?.activities?.forEach(item => (item.week = dayjs(item.start_date).week()));
	data?.activities?.forEach(item => (item.year = dayjs(item.start_date).year()));

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

	if (data.stats.message === 'Authorization Error' || error)
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

	return (
		<>
			<Layout>
				<SEO />
				<Hero />
				<Running stats={data.stats} activities={data.activities} />
				<Footer />
			</Layout>
		</>
	);
};

export default Home;
