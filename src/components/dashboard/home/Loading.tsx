import { faPersonRunning } from '@fortawesome/pro-thin-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loading = () => {
	return (
		<div className="mb-28 mt-14 flex flex-col">
			<FontAwesomeIcon className="mt-14 animate-bounce text-zinc" icon={faPersonRunning} size="5x" />
		</div>
	);
};

export default Loading;
