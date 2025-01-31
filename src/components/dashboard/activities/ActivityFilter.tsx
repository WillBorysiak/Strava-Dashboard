import { Dispatch, Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import classNames from "../../../helpers/core/class-names";

const resultOptions = [
  { label: "5 results", value: 5 },
  { label: "10 results", value: 10 },
  { label: "15 results", value: 15 },
  { label: "20 results", value: 20 },
  { label: "All results", value: 100 },
];
const sortingOptions = [
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
      id="activity-filter"
      aria-labelledby="filter-heading"
      className="bg-dark-background font-oswald z-10 w-full px-4 py-3"
    >
      <div className="flex items-center justify-between">
        {/* Results */}
        <Menu
          as="div"
          className="relative z-10 inline-block cursor-pointer text-left"
        >
          <div>
            <Menu.Button className="text-md group text-zinc flex cursor-pointer items-center justify-center font-medium md:text-lg">
              # of Results
              <ChevronDownIcon
                className="text-zinc -mr-1 ml-1 h-5 w-5 shrink-0"
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
            <Menu.Items className="ring-opacity-5 absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white ring-1 shadow-2xl focus:outline-hidden">
              <div className="py-1">
                {resultOptions.map((option, index) => (
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

        {/* Sort */}
        <Menu
          as="div"
          className="relative z-10 inline-block cursor-pointer text-left"
        >
          <div>
            <Menu.Button className="text-md group text-zinc flex cursor-pointer items-center justify-center font-medium md:text-lg">
              Sort
              <ChevronDownIcon
                className="text-zinc -mr-1 ml-1 h-5 w-5 shrink-0"
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
            <Menu.Items className="ring-opacity-5 absolute right-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white ring-1 shadow-2xl focus:outline-hidden">
              <div className="py-1">
                {sortingOptions.map((option, index) => (
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
