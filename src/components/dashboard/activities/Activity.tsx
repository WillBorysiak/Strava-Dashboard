import { useState } from "react";

import {
  faCalendarDay,
  faChartLine,
  faHeart,
  faTimer,
  faWind,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";

import { accordianVariants } from "../../../helpers/core/animationVariants";
import { Activity as ActivityModel } from "../../../models/activities/Activity";
import { ActivityViewModel } from "../../../viewmodels/ActivityViewModel";
import ActivityStat from "./ActivityStat";

interface ActivityTypes {
  activity: ActivityModel;
}

const Activity = (props: ActivityTypes) => {
  const { activity } = props;
  const [isOpen, setIsOpen] = useState(false);

  const activityViewModel = new ActivityViewModel(activity);

  const { name, id, date, distance, duration, elevation, speed, heartRate } =
    activityViewModel;

  return (
    <motion.li
      className="my-3 bg-lightBackground font-oswald text-zinc hover:cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="px-4 py-2 sm:px-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-orange md:text-2xl">{name}</h3>

          <div className="flex-row items-center justify-center">
            <p className="ml-5 whitespace-nowrap text-xl font-bold">
              <FontAwesomeIcon
                icon={faCalendarDay}
                size="1x"
                className="mr-3"
              />
              {date}
            </p>
          </div>
        </div>

        <div className="mt-2 sm:flex sm:justify-between">
          <div className="sm:flex">
            <p className="flex items-center text-xl font-bold">{distance}</p>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key={id}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={accordianVariants}
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <div className="mt-5 flex flex-col gap-x-10 text-lg lg:flex-row">
                <ActivityStat
                  title="Duration"
                  value={duration}
                  icon={faTimer}
                  iconColour="text-orange"
                />

                <ActivityStat
                  title="Elevation"
                  value={elevation}
                  icon={faChartLine}
                  iconColour="text-green-500"
                />

                <ActivityStat
                  title="Speed"
                  value={speed}
                  icon={faWind}
                  iconColour="text-blue-500"
                />

                <ActivityStat
                  title="Heart Rate"
                  value={heartRate}
                  icon={faHeart}
                  iconColour="text-red-600"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
};

export default Activity;
