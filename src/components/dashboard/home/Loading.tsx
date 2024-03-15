import { faPersonRunning } from "@fortawesome/pro-thin-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () => {
  return (
    <div id="loading" className="mb-28 mt-14 flex h-screen flex-col">
      <FontAwesomeIcon
        className="mt-14 animate-bounce text-zinc"
        icon={faPersonRunning}
        size="5x"
      />
    </div>
  );
};

export default Loading;
