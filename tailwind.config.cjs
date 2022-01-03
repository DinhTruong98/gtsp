const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: '#ffffff',
				darkblue: '#041C32',
				blue: '#04293A',
				lightblue:'#064663',
				orange: '#ECB365'
			},
		}
	},

	plugins: []
};

module.exports = config;
