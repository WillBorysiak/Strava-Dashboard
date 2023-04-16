import { faPersonRunning } from '@fortawesome/pro-thin-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loading = () => {
	return (
		<div className="mt-15 flex flex-col items-center">
			<FontAwesomeIcon className="mt-28 animate-bounce text-zinc" icon={faPersonRunning} size="5x" />
		</div>
	);
};

export default Loading;
