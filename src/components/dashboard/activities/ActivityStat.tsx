import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ActivityStatProps {
  title: string;
  value: string;
  icon: IconDefinition;
  iconColour: string;
}

const ActivityStat = (props: ActivityStatProps) => {
  const { title, value, icon, iconColour } = props;

  return (
    <p className="font-bold italic">
      <span className="mr-2">{title}</span>
      <FontAwesomeIcon
        icon={icon}
        size="1x"
        className={"mr-2 ml-2 " + iconColour}
      />
      <span className="mr-2 ml-2">-</span>
      <span>{value}</span>
    </p>
  );
};

export default ActivityStat;
