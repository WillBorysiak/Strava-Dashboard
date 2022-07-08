import { WeeklyProgressTypes as WeeklyProgressModel } from '../../../models/weeklyProgress.model';

interface WeeklyProgressTypes {
	weeklyTargets: any;
}

const WeeklyProgress = ({ weeklyTargets }: WeeklyProgressTypes) => {
	if (!weeklyTargets) {
		return <div />;
	}

	const { lastWeeksTotal, thisWeeksTotal, thisWeeksCurrent } = weeklyTargets;
	const remainingThisWeek = thisWeeksTotal - thisWeeksCurrent;

	return (
		<div className="mt-5 mb-5">
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<dl className="rounded-lg font-oswald text-zinc shadow-lg backdrop-brightness-[0.75]  sm:grid sm:grid-cols-3">
					<div className="flex flex-col border-b border-zinc p-6 text-center sm:border-0 sm:border-r">
						<dt className="order-2 mt-2 leading-6">
							<p className="text-xl font-bold text-orange">{lastWeeksTotal.toFixed(2) + 'km'}</p>
						</dt>
						<dd className=" order-1 text-2xl font-extrabold">Last Weeks Total Distance</dd>
					</div>
					<div className="flex flex-col border-t border-b border-zinc p-6 text-center sm:border-0 sm:border-l sm:border-r">
						<dt className="text-light dark:text-light order-2 mt-5 text-2xl font-medium leading-6">
							<p className="text-xl font-bold text-green-600">{thisWeeksTotal.toFixed(2) + 'km'}</p>
						</dt>
						<dd className=" order-1 text-2xl font-extrabold">This Weeks Target Distance</dd>
					</div>
					<div className="flex flex-col border-t border-zinc p-6 text-center sm:border-0 sm:border-l">
						<dt className="text-light dark:text-light order-2 mt-5 text-2xl font-medium leading-6">
							<p className="text-xl font-bold text-red-500">{remainingThisWeek.toFixed(2) + 'km'}</p>
						</dt>
						<dd className=" order-1 text-2xl font-extrabold">Remaining This Week</dd>
					</div>
				</dl>
			</div>
		</div>
	);
};

export default WeeklyProgress;
