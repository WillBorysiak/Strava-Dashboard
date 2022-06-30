import { Fragment } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import classNames from '../../utils/classNames';

const sortOptions = [
	{ name: '1 result', value: 1 },
	{ name: '5 results', value: 5 },
	{ name: '10 results', value: 10 },
	{ name: '20 results', value: 20 },
	{ name: 'All results', value: 'all' },
];
const filters = [
	{
		id: 'filters',
		name: 'Filters',
		options: [
			{ value: 'recent', label: 'Most Recent', checked: true },
			{ value: 'oldest', label: 'Oldest', checked: false },
			{ value: 'longestDistance', label: 'Longest (distance)', checked: false },
			{ value: 'shortestDistance', label: 'Shortest (distance)', checked: false },
			{ value: 'longestDuration', label: 'Longest (duration)', checked: false },
			{ value: 'shortestDuration', label: 'Shortest (duration)', checked: false },
		],
	},
];

interface ActivityFilterTypes {
	sortSelection: any;
}

const ActivityFilter = (props: ActivityFilterTypes) => {
	return (
		<div className="z-10 w-full font-oswald backdrop-brightness-[0.7]">
			<div className="px-4 ">
				<section aria-labelledby="filter-heading" className=" py-3">
					<h2 id="filter-heading" className="sr-only">
						Product filters
					</h2>
					<div className="flex items-center justify-between">
						<Menu as="div" className="relative z-10 inline-block text-left">
							<div>
								{/* Sort Menu Text */}

								<Menu.Button className="text-md group inline-flex justify-center font-medium text-zinc md:text-lg ">
									Sort
									<ChevronDownIcon className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-zinc " aria-hidden="true" />
								</Menu.Button>
							</div>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								{/* Sort Menu Items */}

								<Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
									<div className="py-1">
										{sortOptions.map((option, index) => (
											<Menu.Item key={index}>
												{({ active }) => (
													<a
														className={classNames(
															active ? 'bg-zinc' : '',
															'text-md block px-4 py-2  font-medium text-[#1a1b1c] hover:cursor-pointer',
														)}
														onClick={() => {
															props.sortSelection(option.value);
														}}
													>
														{option.name}
													</a>
												)}
											</Menu.Item>
										))}
									</div>
								</Menu.Items>
							</Transition>
						</Menu>

						{/* Filters */}

						<Popover.Group className="sm:flex sm:items-baseline sm:space-x-8">
							{filters.map((section, sectionIdx) => (
								<Popover
									as="div"
									key={section.name}
									id={`desktop-menu-${sectionIdx}`}
									className="relative z-10 inline-block text-left"
								>
									<div>
										<Popover.Button className="text-md group inline-flex items-center justify-center font-medium text-zinc md:text-lg ">
											<span>{section.name}</span>

											<ChevronDownIcon className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-zinc " aria-hidden="true" />
										</Popover.Button>
									</div>

									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Popover.Panel className="absolute right-0 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ">
											<form className="space-y-4">
												{section.options.map((option, optionIdx) => (
													<div key={option.value} className="flex items-center">
														<input
															id={`filter-${section.id}-${optionIdx}`}
															name={`${section.id}[]`}
															type="checkbox"
															defaultChecked={option.checked}
															className="h-4 w-4 rounded accent-orange"
														/>
														<label
															htmlFor={`filter-${section.id}-${optionIdx}`}
															className=" text-md ml-3 whitespace-nowrap pr-6 font-medium text-[#1a1b1c]"
														>
															{option.label}
														</label>
													</div>
												))}
											</form>
										</Popover.Panel>
									</Transition>
								</Popover>
							))}
						</Popover.Group>
					</div>
				</section>
			</div>
		</div>
	);
};

export default ActivityFilter;
