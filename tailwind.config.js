/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./pages/**/*.tsx', './components/**/*.tsx'],
	theme: {
		extend: {
			fontFamily: {
				oswald: ['Oswald', 'san-serif'],
			},
		},
	},
	plugins: [],
};
