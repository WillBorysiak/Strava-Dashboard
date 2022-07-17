import { WeeklyProgressTypes as WeeklyProgressModel } from '../../../models/weeklyProgress.model';

interface WeeklyProgressTypes {
	weeklyTargets: any;
}

const WeeklyProgress = ({ weeklyTargets }: WeeklyProgressTypes) => {
	if (!weeklyTargets) {
		return <div />;
	}

	const { lastWeeksTotal, thisWeeksCurrent } = weeklyTargets;
	const thisWeeksTotal = lastWeeksTotal * 1.1;
	const remainingThisWeek = thisWeeksTotal - thisWeeksCurrent;

	return (
		<div className="mt-5 mb-5">
			<div className="relative mx-auto  max-w-7xl  px-4 sm:px-6 lg:px-8">
				<dl className="rounded-lg font-oswald text-zinc shadow-lg backdrop-brightness-[0.75]  md:grid md:grid-cols-2">
					<div className="flex flex-col border-zinc p-6 text-center md:border-r-2 ">
						<dt className="order-2 mt-2 leading-6">
							<p className=" text-xl font-bold text-blue-500  ">{lastWeeksTotal.toFixed(2) + 'km'}</p>
						</dt>
						<dd className="order-1 text-2xl font-extrabold ">Last Weeks Total Distance</dd>
					</div>
					<div className="flex flex-col p-6 text-center ">
						<dt className="text-light dark:text-light order-2 mt-5 text-2xl font-medium leading-6">
							<p className="text-xl font-bold text-green-600">{thisWeeksTotal.toFixed(2) + 'km'}</p>
						</dt>
						<dd className=" order-1 text-2xl font-extrabold">This Weeks Target Distance</dd>
					</div>
					<div className="flex flex-col border-zinc p-6 text-center md:border-r-2 md:border-t-2">
						<dt className="text-light dark:text-light order-2 mt-5 text-2xl font-medium leading-6">
							<p className="text-xl font-bold text-orange">{thisWeeksCurrent.toFixed(2) + 'km'}</p>
						</dt>
						<dd className=" order-1 text-2xl font-extrabold">This Weeks Current Distance</dd>
					</div>
					<div className="flex flex-col border-zinc p-6 text-center md:border-t-2 ">
						<dt className="text-light dark:text-light order-2 mt-5 text-2xl font-medium leading-6">
							<p className="text-xl font-bold text-red-500">{remainingThisWeek.toFixed(2) + 'km'}</p>
						</dt>
						<dd className="order-1 text-2xl font-extrabold">Remaining This Week</dd>
					</div>
				</dl>
			</div>
		</div>
	);
};

export default WeeklyProgress;
