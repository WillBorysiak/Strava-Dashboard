import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import type { NextPage } from 'next';
import { useState } from 'react';
import useSWR from 'swr';
import Cycling from '../components/dashboard/cycling/Cycling';
import Dashboard from '../components/dashboard/home/Dashboard';
import ErrorMessage from '../components/dashboard/home/ErrorMessage';
import Hero from '../components/dashboard/home/Hero';
import Loading from '../components/dashboard/home/Loading';
import SelectSport from '../components/dashboard/home/SelectSport';
import Running from '../components/dashboard/running/Running';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import SEO from '../components/layout/SEO';
import fetcher from '../components/utils/fetcher';
import { Strava } from '../models/strava.model';

const Home: NextPage = () => {
	const { data, error } = useSWR<Strava>('/api/strava', fetcher);
	const [sport, setSport] = useState('');

	dayjs.extend(weekOfYear);
	dayjs.Ls.en.weekStart = 1;
	data?.activities.forEach(item => (item.week = dayjs(item.start_date).week()));

	// Check for data
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

	// Check for error
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

	// Check for state
	if (sport === '') {
		return (
			<Layout>
				<Dashboard>
					<SEO />
					<Hero />
					<SelectSport state={sport} selectSport={setSport} />
					<Footer />
				</Dashboard>
			</Layout>
		);
	}

	// Render based on state
	return (
		<>
			<Layout>
				<SEO />
				<Hero />
				<SelectSport state={sport} selectSport={setSport} />
				{sport === 'running' && <Running stats={data.stats} activities={data.activities} />}
				{sport === 'cycling' && <Cycling stats={data.stats} activities={data.activities} segments={data.segments} />}
				<Footer />
			</Layout>
		</>
	);
};

export default Home;
