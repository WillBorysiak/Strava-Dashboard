import {
  faCalendarDay,
  faChartLine,
  faHeart,
  faTimer,
  faWind,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import { Activity as ActivityModel } from "../../../models/activities/Activity.model";
import { ActivityViewModel } from "../../../viewmodels/Activity.viewmodel";
import ActivityStat from "./ActivityStat";

interface ActivityTypes {
  activity: ActivityModel;
}

const Activity = (props: ActivityTypes) => {
  const { activity } = props;

  const activityViewModel = new ActivityViewModel(activity);

  const { name, date, distance, duration, elevation, speed, heartRate } =
    activityViewModel;

  return (
    <motion.li
      id="activity"
      className="bg-light-background font-oswald text-zinc my-3"
    >
      <div className="px-4 py-2 sm:px-6">
        <div className="mb-5 flex flex-col justify-between lg:mb-0 lg:flex-row lg:items-center">
          <h3 className="text-orange text-xl font-bold md:text-2xl">{name}</h3>
          <div className="flex-row items-center justify-center">
            <p className="text-xl font-bold whitespace-nowrap">
              <FontAwesomeIcon
                icon={faCalendarDay}
                size="1x"
                className="mr-3"
              />
              {date}
            </p>
          </div>
        </div>

        <div id="activity-distance" className="mt-2 sm:flex sm:justify-between">
          <div className="sm:flex">
            <p className="flex items-center text-xl font-bold">{distance}</p>
          </div>
        </div>

        <div
          id="activity-stats"
          className="mt-5 flex flex-col gap-x-10 text-lg lg:flex-row"
        >
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
      </div>
    </motion.li>
  );
};

export default Activity;
