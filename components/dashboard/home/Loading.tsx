import { faDumbbell } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loading = () => {
	return (
		<div className="mt-15 flex flex-col items-center">
			<FontAwesomeIcon className="mt-28 animate-bounce text-zinc" icon={faDumbbell} size="6x" />
		</div>
	);
};

export default Loading;
