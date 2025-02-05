import { JSX } from "react";

import { faMap, faMountain } from "@fortawesome/pro-duotone-svg-icons";
import {
  faRabbitRunning,
  faStopwatch,
  IconDefinition,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const createStatsIcon = (icon: IconDefinition): JSX.Element => (
  <FontAwesomeIcon icon={icon} size="3x" className="text-orange" />
);

export const moveIcon = createStatsIcon(faRabbitRunning);
export const distanceIcon = createStatsIcon(faMap);
export const timeIcon = createStatsIcon(faStopwatch);
export const elevationIcon = createStatsIcon(faMountain);
