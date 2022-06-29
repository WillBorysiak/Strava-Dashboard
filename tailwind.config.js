/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./pages/**/*.tsx', './components/**/*.tsx'],
	theme: {
		extend: {
			fontFamily: {
				oswald: ['Oswald', 'san-serif'],
			},
			colors: {
				orange: '#ea580c',
				zinc: '#e4e4e7',
			},
		},
	},
	plugins: [],
};
