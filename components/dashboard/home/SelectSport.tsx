import { faPersonBiking, faPersonRunning } from '@fortawesome/pro-thin-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

import SubHeading from '../../typography/SubHeading';
import { scrollAnimationVariants } from '../../utils/scrollAnimationVariants';

const SelectSport = (props: { state: string; selectSport: any }) => {
	return (
		<motion.section
			initial="hidden"
			animate="visible"
			variants={scrollAnimationVariants}
			className={
				props.state === ''
					? 'mt-15 flex h-96 flex-row items-start font-oswald'
					: 'mt-15 flex h-full flex-row items-start font-oswald'
			}
		>
			<div className="flex h-full w-1/2 flex-col items-center justify-center">
				<div
					className={props.state === 'running' ? 'text-orange' : 'text-zinc hover:scale-110 hover:text-orange'}
					onClick={() => {
						props.selectSport('running');
					}}
				>
					<SubHeading text="Running" />
					<FontAwesomeIcon className="mt-10 " icon={faPersonRunning} size="7x" />
				</div>
			</div>
			<div className="flex h-full w-1/2 flex-col items-center justify-center  text-zinc  hover:text-orange">
				<div
					className={props.state === 'cycling' ? 'text-orange' : 'text-zinc hover:scale-110 hover:text-orange'}
					onClick={() => {
						props.selectSport('cycling');
					}}
				>
					<SubHeading text="Cycling" />
					<FontAwesomeIcon className="mt-10 " icon={faPersonBiking} size="7x" />
				</div>
			</div>
		</motion.section>
	);
};

export default SelectSport;
