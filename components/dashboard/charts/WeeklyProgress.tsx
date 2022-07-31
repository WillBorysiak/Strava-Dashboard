import { motion } from 'framer-motion';
import { scrollAnimationVariants } from '../../utils/scrollAnimationVariants';
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
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={scrollAnimationVariants}
			className="relative mx-auto mt-5 mb-5 max-w-7xl px-4 sm:px-6 lg:px-8"
		>
			<dl className="rounded-md bg-transparentBg font-oswald text-zinc shadow-lg md:grid md:grid-cols-2 xl:grid-cols-4">
				<div className="flex flex-col border-zinc p-6 text-center   xl:border-r-2">
					<dt className="order-2 mt-5 leading-6">
						<p className="text-xl font-bold text-blue-500">{lastWeeksTotal.toFixed(2) + 'km'}</p>
					</dt>
					<dd className="order-1 text-2xl font-extrabold ">Last Weeks Total Distance</dd>
				</div>

				<div className="flex flex-col border-zinc p-6 text-center xl:border-r-2">
					<dt className="text-light dark:text-light order-2 mt-5 text-2xl font-medium leading-6">
						<p className="text-xl font-bold text-green-600">{thisWeeksTotal.toFixed(2) + 'km'}</p>
					</dt>
					<dd className=" order-1 text-2xl font-extrabold">This Weeks Target Distance</dd>
				</div>

				<div className="flex flex-col border-zinc p-6 text-center xl:border-r-2">
					<dt className="text-light dark:text-light order-2 mt-5 text-2xl font-medium leading-6">
						<p className="text-xl font-bold text-orange">{thisWeeksCurrent.toFixed(2) + 'km'}</p>
					</dt>
					<dd className=" order-1 text-2xl font-extrabold">This Weeks Current Distance</dd>
				</div>

				<div className="flex flex-col p-6 text-center">
					<dt className="text-light dark:text-light order-2 mt-5 text-2xl font-medium leading-6">
						<p className="text-xl font-bold text-red-500">{remainingThisWeek.toFixed(2) + 'km'}</p>
					</dt>
					<dd className="order-1 text-2xl font-extrabold md:whitespace-nowrap lg:whitespace-normal">
						This Weeks Remaining Distance
					</dd>
				</div>
			</dl>
		</motion.div>
	);
};

export default WeeklyProgress;
