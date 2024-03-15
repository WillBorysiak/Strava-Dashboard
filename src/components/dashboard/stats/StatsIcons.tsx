import { faMap, faMountain } from "@fortawesome/pro-duotone-svg-icons";
import { faRabbitRunning, faStopwatch } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const rideIcon = (
  <FontAwesomeIcon icon={faRabbitRunning} size="3x" className="text-orange" />
);

export const distanceIcon = (
  <FontAwesomeIcon icon={faMap} size="3x" className="text-orange" />
);

export const timeIcon = (
  <FontAwesomeIcon icon={faStopwatch} size="3x" className="text-orange" />
);

export const elevationIcon = (
  <FontAwesomeIcon icon={faMountain} size="3x" className="text-orange" />
);
