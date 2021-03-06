const defaultTheme = require('tailwindcss/defaultTheme');
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			darkBlue: 'hsl(233, 26%, 24%)',
			limeGreen: 'hsl(136, 65%, 51%)',
			brightCyan: 'hsl(192, 70%, 51%)',
			grayBlue: 'hsl(233, 8%, 62%)',
			lightGrayBlue: 'hsl(220, 16%, 96%)',
			veryLightGray: 'hsl(0, 0%, 98%)',
			white: 'hsl(0,0%,100%)'
		},
		fontFamily: {
			sans: ['Public Sans', ...defaultTheme.fontFamily.sans]
		},
		extend: {}
	},

	plugins: []
};

module.exports = config;
