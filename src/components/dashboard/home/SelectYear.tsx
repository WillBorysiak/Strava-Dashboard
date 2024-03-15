import { Fragment } from "react";

import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

import classNames from "../../../helpers/core/classNames";
import { useCoreStore } from "../../../store/coreStore/coreStore";

const years = [2021, 2022, 2023, 2024];

const SelectYear = () => {
  const selectedYear = useCoreStore((state) => state.selectedYear);
  const { changeSelectedYear } = useCoreStore();

  return (
    <Listbox value={selectedYear}>
      {({ open }) => (
        <div
          id="select-year"
          className="mx-auto flex w-fit flex-row items-center font-oswald"
        >
          <Listbox.Label className="mr-2 block text-2xl font-medium text-zinc">
            Select Year:
          </Listbox.Label>
          <div className="relative mx-auto mt-1">
            <Listbox.Button className="relative cursor-default rounded-md border border-gray-300 bg-zinc py-2 pl-3 pr-10 text-left text-lg shadow-sm focus:outline-none focus:ring-1">
              <span className="block truncate">{selectedYear}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
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
                        active ? "bg-zinc text-orange" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9",
                      )
                    }
                    value={year}
                    onClick={() => {
                      changeSelectedYear(year);
                    }}
                  >
                    {({ selected }) => (
                      <span
                        className={classNames(
                          selected ? "font-semibold" : "font-normal",
                          "block truncate",
                        )}
                      >
                        {year}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
};

export default SelectYear;
