/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						h1: {
							fontFamily: theme('fontFamily.mono'),
						},
						h2: {
							fontFamily: theme('fontFamily.mono'),
						},
						h3: {
							fontFamily: theme('fontFamily.mono'),
						},
						h4: {
							fontFamily: theme('fontFamily.mono'),
						},
						h5: {
							fontFamily: theme('fontFamily.mono'),
						},
					},
				},
			})
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
