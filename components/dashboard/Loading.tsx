import Heading from '../typography/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTire } from '@fortawesome/pro-thin-svg-icons';

const Loading = () => {
	return (
		<div className="mt-20 flex flex-col items-center">
			<Heading text="The data is on its descent..." />
			<FontAwesomeIcon className="mt-10 animate-spin text-zinc-200" icon={faTire} size="5x" />
		</div>
	);
};

export default Loading;
