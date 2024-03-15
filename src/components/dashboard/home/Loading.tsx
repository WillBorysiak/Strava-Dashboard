import { useEffect, useState } from "react";

import {
  faHiking,
  faPersonRunningFast,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () => {
  const [currentIcon, setCurrentIcon] = useState(faPersonRunningFast);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon(
        currentIcon === faPersonRunningFast ? faHiking : faPersonRunningFast,
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIcon]);

  return (
    <div id="loading" className="mb-28 mt-14 flex h-screen flex-col">
      <FontAwesomeIcon
        className="mt-14 animate-bounce text-zinc"
        icon={currentIcon}
        size="5x"
      />
    </div>
  );
};

export default Loading;
