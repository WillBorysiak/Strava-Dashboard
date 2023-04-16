import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';
import { useYearStore } from '../../../store/yearStore';

import classNames from '../../utils/classNames';

const years = [2022, 2023];

const SelectYear = () => {
	const [selectedYear, setselectedYear] = useState(years[1]);
	const { changeSelectedYear } = useYearStore();

	return (
		<Listbox value={selectedYear} onChange={setselectedYear}>
			{({ open }) => (
				<>
					<div className="mx-auto w-fit font-oswald">
						<div className="flex flex-row items-center">
							<Listbox.Label className="mr-2 block text-2xl font-medium text-zinc">Select Year:</Listbox.Label>
							<div className="relative mx-auto mt-1">
								<Listbox.Button className="relative cursor-default rounded-md border border-gray-300 bg-zinc py-2 pl-3 pr-10 text-left text-lg shadow-sm focus:outline-none focus:ring-1">
									<span className="block truncate">{selectedYear}</span>
									<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
										<ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
									</span>
								</Listbox.Button>

								<Transition
									show={open}
									as={Fragment}
									leave="transition ease-in duration-100"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<Listbox.Options className="absolute z-10 mt-1 max-h-60 w-fit overflow-auto rounded-md bg-zinc py-1 text-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
										{years.map((year, index) => (
											<Listbox.Option
												key={index}
												className={({ active }) =>
													classNames(
														active ? 'bg-zinc text-orange' : 'text-gray-900',
														'relative cursor-default select-none py-2 pl-3 pr-9',
													)
												}
												value={year}
												onClick={() => {
													changeSelectedYear(year);
												}}
											>
												{({ selected }) => (
													<>
														<span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
															{year}
														</span>
													</>
												)}
											</Listbox.Option>
										))}
									</Listbox.Options>
								</Transition>
							</div>
						</div>
					</div>
				</>
			)}
		</Listbox>
	);
};

export default SelectYear;
