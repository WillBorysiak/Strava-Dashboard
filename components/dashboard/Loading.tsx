import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBiking } from '@fortawesome/pro-thin-svg-icons';

const Loading = () => {
	return (
		<div className="mt-15 flex h-screen flex-col items-center">
			<FontAwesomeIcon className="mt-28 animate-bounce text-zinc" icon={faPersonBiking} size="6x" />
		</div>
	);
};

export default Loading;
