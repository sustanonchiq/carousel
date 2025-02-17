import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				black: {
					DEFAULT: '#151515',
				},
				purple: {
					DEFAULT: '#A59DFF',
				},
				border: '#D1D1D1',
			},
			boxShadow: {
				activeSlide: '0px 4px 4px 0px rgba(0,0,0, .2)',
			},
			// keyframes: {
			// 	slideInRight: {
			// 		'0%': {
			// 			'-webkit-transform': 'translateX(-100%)',
			// 			transform: 'translateX(0%)',
			// 		},
			// 		'100%': {
			// 			'-webkit-transform': 'translateX(0%)',
			// 			transform: 'translateX(150%)',
			//       width: '0px'
			// 		},
			// 	},
			// 	compressDot: {
			// 		'0%': {
			// 			width: '40px',
			// 		},
			// 		'100%': {
			// 			width: '8px',
			// 		},
			// 	},
			// },
			// animation: {
			// 	slideInRight: 'slideInRight 0.5s ease-out',
			// 	compressDot: 'compressDot 0.5s ease-out 0.5s forwards',
			// },
		},
	},
	plugins: [],
} satisfies Config
