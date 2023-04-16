import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import type { NextPage } from 'next';
import useSWR from 'swr';

import Dashboard from '../components/dashboard/home/Dashboard';
import ErrorMessage from '../components/dashboard/home/ErrorMessage';
import Hero from '../components/dashboard/home/Hero';
import Loading from '../components/dashboard/home/Loading';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import SEO from '../components/layout/SEO';
import Running from '../components/Running';
import fetcher from '../components/utils/fetcher';
import { StravaModel } from '../models/strava.model';

const Home: NextPage = () => {
	const { data, error } = useSWR<StravaModel>('/api/strava', fetcher);

	// format data
	dayjs.extend(weekOfYear);
	dayjs.Ls.en.weekStart = 1;
	data?.activities?.forEach(item => (item.week = dayjs(item.start_date).week()));
	data?.activities?.forEach(item => (item.year = dayjs(item.start_date).year()));
	const activities = data?.activities.filter(item => item.sport_type === 'Run');

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

	return (
		<>
			<Layout>
				<SEO />
				<Hero />
				{error && <ErrorMessage />}
				{data.stats && data.activities && <Running stats={data.stats} activities={activities} />}
				<Footer />
			</Layout>
		</>
	);
};

export default Home;
