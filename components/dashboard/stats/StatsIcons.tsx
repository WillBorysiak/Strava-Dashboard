import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/pro-solid-svg-icons';
import { faRoad } from '@fortawesome/pro-solid-svg-icons';
import { faStopwatch } from '@fortawesome/pro-solid-svg-icons';
import { faMountains } from '@fortawesome/pro-solid-svg-icons';
import { faMedal } from '@fortawesome/pro-solid-svg-icons';
import { faChartLine } from '@fortawesome/pro-solid-svg-icons';

export const rideIcon = <FontAwesomeIcon icon={faBicycle} size="2x" className="text-stone-200" />;
export const distanceIcon = <FontAwesomeIcon icon={faRoad} size="2x" className="text-stone-200" />;
export const timeIcon = <FontAwesomeIcon icon={faStopwatch} size="2x" className="text-stone-200" />;
export const elevationIcon = <FontAwesomeIcon icon={faChartLine} size="2x" className="text-stone-200" />;
export const longestRideIcon = <FontAwesomeIcon icon={faMedal} size="2x" className="text-stone-200" />;
export const biggestClimbIcon = <FontAwesomeIcon icon={faMountains} size="2x" className="text-stone-200" />;
