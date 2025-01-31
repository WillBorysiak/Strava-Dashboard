import dayjs from "dayjs";
import { motion } from "framer-motion";

import { scrollVariants } from "../../../helpers/core/animation-variants";
import { Activity } from "../../../models/activities/Activity.model";
import { Stats } from "../../../models/stats/Stats.model";
import { useHikingStore } from "../../../store/hiking-store";
import { useRunningStore } from "../../../store/running-store";
import Container from "../../layout/Container";
import Heading from "../../typography/Heading";
import { distanceIcon, elevationIcon, moveIcon, timeIcon } from "./StatsIcons";
import { StatViewModel } from "../../../viewmodels/Stat.viewmodel";
import Stat from "./Stat";

const WeeklyStats = () => {
  const currentWeek: number = dayjs().week();
  const currentYear: number = dayjs().year();

  const runsByWeek = useRunningStore((state) => state.getRunsByWeek);
  const hikesByWeek = useHikingStore((state) => state.getHikesByWeek);

  const weeklyRuns: Activity[] = runsByWeek(currentWeek, currentYear);
  const weeklyHikes: Activity[] = hikesByWeek(currentWeek, currentYear);
  const weeklyActivities: Activity[] = [...weeklyRuns, ...weeklyHikes];

  const weeklyStats = new Stats(weeklyActivities);

  const { count, distance, movingTime, elevationGain } = weeklyStats;

  const stats: StatViewModel[] = [
    new StatViewModel(1, "Total Activities", count, moveIcon),
    new StatViewModel(2, "Total Distance", distance, distanceIcon),
    new StatViewModel(3, "Total Time", movingTime, timeIcon),
    new StatViewModel(4, "Total Elevation", elevationGain, elevationIcon),
  ];

  return (
    <Container>
      <Heading text="Weekly Stats" />
      <section
        id="weekly-stats"
        className="mt-5 grid grid-cols-1 gap-5 text-center sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            initial="hidden"
            animate="visible"
            variants={scrollVariants}
            className="bg-zinc font-oswald flex flex-row rounded-xs p-5 shadow-sm"
          >
            <Stat stats={stat} />
          </motion.div>
        ))}
      </section>
    </Container>
  );
};

export default WeeklyStats;
