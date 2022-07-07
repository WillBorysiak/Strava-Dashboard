import React from 'react';

const WeeklyProgress = () => {
	return (
		<div className="mt-5 mb-5">
			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<dl className="rounded-lg font-oswald text-zinc shadow-lg backdrop-brightness-[0.75]  sm:grid sm:grid-cols-3">
					<div className="flex flex-col border-b border-zinc p-6 text-center sm:border-0 sm:border-r">
						<dt className="order-2 mt-2 leading-6">
							<p className="text-xl font-bold text-orange">100km</p>
						</dt>
						<dd className=" order-1 text-2xl font-extrabold">Last Weeks Total Distance</dd>
					</div>
					<div className="flex flex-col border-t border-b border-zinc p-6 text-center sm:border-0 sm:border-l sm:border-r">
						<dt className="text-light dark:text-light order-2 mt-5 text-2xl font-medium leading-6">
							<p className="text-xl font-bold text-green-600">110km</p>
						</dt>
						<dd className=" order-1 text-2xl font-extrabold">This Weeks Total Distance</dd>
					</div>
					<div className="flex flex-col border-t border-zinc p-6 text-center sm:border-0 sm:border-l">
						<dt className="text-light dark:text-light order-2 mt-5 text-2xl font-medium leading-6">
							<p className="text-xl font-bold text-red-500">60km</p>
						</dt>
						<dd className=" order-1 text-2xl font-extrabold">Remaining This Week</dd>
					</div>
				</dl>
			</div>
		</div>
	);
};

export default WeeklyProgress;
