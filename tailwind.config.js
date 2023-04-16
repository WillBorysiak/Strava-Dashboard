/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				oswald: ['Oswald', 'san-serif'],
			},
			colors: {
				orange: '#ea580c',
				zinc: '#e4e4e7',
				transparentBg: 'rgba(0, 0, 0, 0.25)',
				darkerTransparentBg: 'rgba(0, 0, 0, 0.5)',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
