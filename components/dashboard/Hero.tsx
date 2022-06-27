const profile = {
	name: 'Ricardo Cooper',
	backgroundImage:
		'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
};

const Hero = () => {
	return (
		<div>
			<div>
				<img className="h-32 w-full object-cover lg:h-48" src={profile.backgroundImage} alt="" />
				<h1 className="mb-5 text-center font-oswald text-7xl font-extrabold text-zinc-200  sm:text-8xl md:mb-10">
					Cycling Dashboard
				</h1>
			</div>
		</div>
	);
};

export default Hero;
