/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.astro'],
	theme: 
	{
		extend: 
		{

			fontFamily: 
			{
				'sans': ['ui-sans-serif', 'system-ui'],
				'serif': ['ui-serif', 'Georgia'],
				'mono': ['ui-monospace', 'SFMono-Regular'],
				'display': ['Oswald'],
				'body': ['"Open Sans"'],
			}
		},
	},
	plugins: [],
}
