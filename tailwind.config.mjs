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
	plugins: [function ({ addUtilities }) {
		const newUtilities = {
		  '.MySlate-text': {
			textAlign: 'center',
			padding: '0.5rem',
			fontSize: '1.875rem', // equivalente a text-3xl en Tailwind CSS
			fontWeight: '700', // equivalente a font-bold en Tailwind CSS
			color: 'rgb(203 213 225)', // equivalente a text-slate-300 en Tailwind CSS
		  },
		};
  
		addUtilities(newUtilities, ['responsive', 'hover', 'focus']);
	  },],
}
