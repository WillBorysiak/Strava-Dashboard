import { useEffect, useState } from "react";

import dayjs from "dayjs";
import { motion } from "framer-motion";

import { scrollVariants } from "../../../helpers/core/animation-variants";
import { Activity as ActivityModel } from "../../../models/activities/Activity.model";
import Heading from "../../typography/Heading";
import Activity from "./Activity";
import ActivityFilter from "./ActivityFilter";

interface ActivitiesProps {
  activities: ActivityModel[];
}

const Activities = (props: ActivitiesProps) => {
  const { activities: activityData } = props;

  const [activities, setActivities] = useState<ActivityModel[]>(activityData);

  const [resultsCount, setResultsCount] = useState<number>(5);
  const [sortType, setSortType] = useState<string>("recent");

  useEffect(() => {
    const sortedActivities = activityData
      .sort((a, b) => {
        switch (sortType) {
          case "recent":
            return dayjs(b.startDate).diff(a.startDate);
          case "oldest":
            return dayjs(a.startDate).diff(b.startDate);
          case "longest":
            return b.distance - a.distance;
          case "shortest":
            return a.distance - b.distance;
          default:
            return 0;
        }
      })
      .slice(0, resultsCount);

    setActivities(sortedActivities);
  }, [activityData, resultsCount, sortType]);

  return (
    <section id="activities" className="mx-5 overflow-hidden shadow">
      <Heading text="Workouts" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollVariants}
      >
        <div className="mb-5 mt-5 flex w-full flex-row justify-around">
          <ActivityFilter
            resultSelection={setResultsCount}
            sortSelection={setSortType}
          />
        </div>

        <motion.ul layout={true} role="list" className="mt-3 rounded-sm">
          {activities.map((activity) => (
            <Activity key={activity.id} activity={activity} />
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default Activities;
