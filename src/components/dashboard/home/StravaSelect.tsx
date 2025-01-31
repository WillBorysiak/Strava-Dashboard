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
          className="font-oswald mx-auto mt-5 mb-5 flex w-fit flex-row items-center"
        >
          <Label className="text-zinc mr-2 block text-2xl font-medium">
            Select &nbsp;
            {type === StravaSelectEnum.sport ? "Sport" : "Year"}:
          </Label>

          <div className="relative mx-auto mt-1 flex">
            <ListboxButton className="bg-zinc relative cursor-pointer rounded-md border border-gray-300 py-2 pr-10 pl-3 text-left text-lg shadow-xs">
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
                className="text-zinc ml-3"
                icon={faPersonRunningFast}
                size="3x"
              />
            )}

            {type === StravaSelectEnum.sport && selectedSport === "Hiking" && (
              <FontAwesomeIcon
                className="text-zinc ml-3"
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
              <ListboxOptions className="bg-zinc absolute z-10 mt-1 max-h-60 w-fit overflow-auto rounded-md py-1 text-lg shadow-lg ring-black">
                {selectOptions.map((value, index) => (
                  <ListboxOption
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-zinc text-orange" : "text-gray-900",
                        "relative cursor-pointer py-2 pr-9 pl-3 select-none",
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
