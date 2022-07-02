const Footer = () => {
	return (
		<footer className="mt-3 w-screen bg-zinc  font-oswald font-extrabold text-[#1a1b1c]">
			<div className=" max-w-full px-4 py-2 sm:px-6 md:flex md:items-center md:justify-center lg:px-8">
				<div className="space-x- flex justify-center md:order-2"></div>
				<div className="md:order-1 md:mt-0">
					<p className="text-bold text-dark dark:text-light text-lg">
						&copy; Will Borysiak - 2022. All rights reserved.
					</p>
					<p className="text-dark dark:text-light text-center text-lg">
						Powered by{' '}
						<a href="https://www.strava.com/" target="_blank" rel="noreferrer">
							<span className="text-orange">Strava.</span>
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
