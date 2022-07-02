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

const stravaApi = async () => {
	// Tokens and Authentication
	const headers = {
		Accept: 'application/json, text/plain, */*',
		'Content-Type': 'application/json',
	};

	const body = JSON.stringify({
		client_id: process.env.STRAVA_CLIENT_ID,
		client_secret: process.env.STRAVA_SECRET,
		refresh_token: process.env.STRAVA_REFRESH_TOKEN,
		grant_type: 'refresh_token',
	});

	const refreshAccess = await fetch('https://www.strava.com/oauth/token', {
		method: 'post',
		headers: headers,
		body: body,
	});

	const accessJson = await refreshAccess.json();

	// API Calls

	// Stats
	const statsRequest = await fetch(
		'https://www.strava.com/api/v3/athletes/90122035/stats?access_token=' + accessJson.access_token,
	);

	const stats = await statsRequest.json();

	// Activities
	const activitiesRequest = await fetch(
		'https://www.strava.com/api/v3/athlete/activities?after=1650416400&access_token=' + accessJson.access_token,
	);
	const activities = await activitiesRequest.json();

	// Segments
	const segmentsRequest = await fetch(
		'https://www.strava.com/api/v3/segments/starred?access_token=' + accessJson.access_token,
	);
	const segments = await segmentsRequest.json();

	const data = { stats, activities, segments };

	return data;
};

const Home: NextPage = () => {
	const { data, error } = useSWR<Strava>('strava', stravaApi);

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
				<ActivityList activities={data.activities} />
				<Segments segments={data.segments} />
				<Footer />
			</Layout>
		</>
	);
};

export default Home;
