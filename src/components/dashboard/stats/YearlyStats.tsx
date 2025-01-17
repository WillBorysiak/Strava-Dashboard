import { motion } from "framer-motion";

import { SportEnum } from "../../../enums/sport.enum";
import { scrollVariants } from "../../../helpers/core/animation-variants";
import { generateStatsTitle } from "../../../helpers/data/generate-stats";
import { Stats as StatsModel } from "../../../models/stats/Stats.model";
import { StatViewModel } from "../../../viewmodels/Stat.viewmodel";
import Container from "../../layout/Container";
import Heading from "../../typography/Heading";
import Stat from "./Stat";
import { distanceIcon, elevationIcon, moveIcon, timeIcon } from "./StatsIcons";

interface StatsProps {
  stats: StatsModel;
  sport: SportEnum;
}

const YearlyStats = (props: StatsProps) => {
  const { count, distance, movingTime, elevationGain } = props.stats;
  const { sport } = props;

  const stats: StatViewModel[] = [
    new StatViewModel(1, generateStatsTitle(sport), count, moveIcon),
    new StatViewModel(2, "Total Distance", distance, distanceIcon),
    new StatViewModel(3, "Total Time", movingTime, timeIcon),
    new StatViewModel(4, "Total Elevation", elevationGain, elevationIcon),
  ];

  return (
    <Container>
      <Heading text="Yearly Stats" />
      <dl
        id="yearly-stats"
        className="mt-5 grid grid-cols-1 gap-5 text-center sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            initial="hidden"
            animate="visible"
            variants={scrollVariants}
            className="flex flex-row rounded-sm bg-zinc p-5 font-oswald shadow"
          >
            <Stat stats={stat} />
          </motion.div>
        ))}
      </dl>
    </Container>
  );
};

export default YearlyStats;
