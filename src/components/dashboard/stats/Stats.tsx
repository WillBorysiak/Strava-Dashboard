import { motion } from "framer-motion";

import { SportEnum } from "../../../enums/sport.enum";
import { scrollVariants } from "../../../helpers/core/animation-variants";
import { generateStatsTitle } from "../../../helpers/data/generate-stats";
import { Stats as StatsModel } from "../../../models/stats/Stats.model";
import Container from "../../layout/Container";
import Heading from "../../typography/Heading";
import { distanceIcon, elevationIcon, rideIcon, timeIcon } from "./StatsIcons";

interface StatsProps {
  stats: StatsModel;
  sport: SportEnum;
}

const Stats = (props: StatsProps) => {
  const { sport } = props;
  const { count, distance, movingTime, elevationGain } = props.stats;

  const stats = [
    { id: 1, name: generateStatsTitle(sport), stat: count, icon: rideIcon },
    { id: 2, name: "Total Distance", stat: distance, icon: distanceIcon },
    { id: 3, name: "Total Time", stat: movingTime, icon: timeIcon },
    {
      id: 4,
      name: "Total Elevation",
      stat: elevationGain,
      icon: elevationIcon,
    },
  ];

  return (
    <Container>
      <Heading text="Stats" />
      <dl
        id="stats"
        className="mb-5 mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2"
      >
        {stats.map((item, index: number) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={scrollVariants}
            className="relative overflow-hidden rounded-md bg-zinc px-2 pt-5 font-oswald shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="bg-orange-600 absolute rounded-md p-3">
                {item.icon}
              </div>
              <p className="ml-24 truncate font-oswald text-xl font-medium text-gray-900">
                {item.name}
              </p>
            </dt>
            <dd className="ml-24 flex items-baseline pb-6">
              <p className="text-2xl font-semibold italic text-gray-900">
                {item.stat}
              </p>
            </dd>
          </motion.div>
        ))}
      </dl>
    </Container>
  );
};

export default Stats;
