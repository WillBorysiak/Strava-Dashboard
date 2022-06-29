import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTire } from '@fortawesome/pro-thin-svg-icons';

const Loading = () => {
	return (
		<div className="mt-20 flex h-screen flex-col items-center">
			<FontAwesomeIcon className="mt-28 animate-spin text-zinc-200" icon={faTire} size="5x" />
		</div>
	);
};

export default Loading;
