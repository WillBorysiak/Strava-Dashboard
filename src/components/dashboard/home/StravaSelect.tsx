import { Fragment } from "react";

import {
  faHiking,
  faPersonRunningFast,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

import { SportEnum } from "../../../enums/sport.enum";
import { StravaSelectEnum } from "../../../enums/strava-select.enum";
import classNames from "../../../helpers/core/class-names";
import { useCoreStore } from "../../../store/core-store";

interface SelectYearProps {
  selectOptions: SportEnum[] | number[];
  type: StravaSelectEnum.sport | StravaSelectEnum.year;
}

const StravaSelect = (props: SelectYearProps) => {
  const { selectOptions, type } = props;

  const selectedYear = useCoreStore((state) => state.selectedYear);
  const { changeSelectedYear } = useCoreStore();

  const selectedSport = useCoreStore((state) => state.selectedSport);
  const { changeSelectedSport } = useCoreStore();

  const currentValue =
    type === StravaSelectEnum.sport ? selectedSport : selectedYear;

  const onSelectValue = (value: SportEnum | number) => {
    if (type === StravaSelectEnum.sport) {
      changeSelectedSport(value as SportEnum);
    }

    if (type === StravaSelectEnum.year) {
      changeSelectedYear(value as number);
    }
  };

  return (
    <Listbox value={currentValue}>
      {({ open }) => (
        <div
          id="select-year"
          className="mx-auto mb-5 mt-5 flex w-fit flex-row items-center font-oswald"
        >
          <Label className="mr-2 block text-2xl font-medium text-zinc">
            Select &nbsp;
            {type === StravaSelectEnum.sport ? "Sport" : "Year"}:
          </Label>

          <div className="relative mx-auto mt-1 flex">
            <ListboxButton className="relative cursor-default rounded-md border border-gray-300 bg-zinc py-2 pl-3 pr-10 text-left text-lg shadow-sm focus:outline-none focus:ring-1">
              <span className="block truncate">{currentValue}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            {type === StravaSelectEnum.sport && selectedSport === "Running" && (
              <FontAwesomeIcon
                className="ml-3 text-zinc"
                icon={faPersonRunningFast}
                size="3x"
              />
            )}

            {type === StravaSelectEnum.sport && selectedSport === "Hiking" && (
              <FontAwesomeIcon
                className="ml-3 text-zinc"
                icon={faHiking}
                size="3x"
              />
            )}

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-in duration-250"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-250"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-fit overflow-auto rounded-md bg-zinc py-1 text-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {selectOptions.map((value, index) => (
                  <ListboxOption
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-zinc text-orange" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9",
                      )
                    }
                    value={value}
                    onClick={() => onSelectValue(value)}
                  >
                    {({ selected }) => (
                      <span
                        className={classNames(
                          selected ? "font-semibold" : "font-normal",
                          "block truncate",
                        )}
                      >
                        {value}
                      </span>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
};

export default StravaSelect;
