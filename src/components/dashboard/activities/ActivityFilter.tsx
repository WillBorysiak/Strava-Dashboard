import { Dispatch, Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import classNames from "../../../helpers/core/classNames";

const results = [
  { label: "5 results", value: 5 },
  { label: "10 results", value: 10 },
  { label: "15 results", value: 15 },
  { label: "20 results", value: 20 },
  { label: "All results", value: 100 },
];
const sorting = [
  { label: "Most Recent", value: "recent" },
  { label: "Oldest", value: "oldest" },
  { label: "Longest (distance)", value: "longest" },
  { label: "Shortest (distance)", value: "shortest" },
];

interface ActivityFilterTypes {
  resultSelection: Dispatch<number>;
  sortSelection: Dispatch<string>;
}

const ActivityFilter = (props: ActivityFilterTypes) => {
  return (
    <section
      aria-labelledby="filter-heading"
      className="z-10 w-full bg-darkBackground px-4 py-3 font-oswald"
    >
      <div className="flex items-center justify-between">
        {/* Sort Menu */}
        <Menu as="div" className="relative z-10 inline-block text-left">
          <div>
            <Menu.Button className="text-md group flex items-center justify-center font-medium text-zinc md:text-lg">
              # of Results
              <ChevronDownIcon
                className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-zinc"
                aria-hidden="true"
              />
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
            <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {results.map((option, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <a
                        className={classNames(
                          active ? "bg-zinc" : "",
                          "text-md block px-4 py-2 font-medium text-[#1a1b1c] hover:cursor-pointer",
                        )}
                        onClick={() => {
                          props.resultSelection(option.value);
                        }}
                      >
                        {option.label}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Filters */}
        <Menu as="div" className="relative z-10 inline-block text-left">
          <div>
            <Menu.Button className="text-md group flex items-center justify-center font-medium text-zinc md:text-lg">
              Sort
              <ChevronDownIcon
                className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-zinc"
                aria-hidden="true"
              />
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
            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {sorting.map((option, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <a
                        className={classNames(
                          active ? "bg-zinc" : "",
                          "text-md block px-4 py-2 font-medium text-[#1a1b1c] hover:cursor-pointer",
                        )}
                        onClick={() => {
                          props.sortSelection(option.value);
                        }}
                      >
                        {option.label}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </section>
  );
};

export default ActivityFilter;
