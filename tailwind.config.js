/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				greenWedding: "#fff1e6",
				wedding: "#e9edc9",
			},
			fontFamily: {
				npmedium: ["NoirProMedium"],
				npregular: ["NoirProRegular"],
				aauxblack: ["AauxNBlack"],
				aauxbold: ["AauxNBold"],
				aauxmedium: ["AauxNMedium"],
				aauxlight: ["AauxNLight"],
			},
		},
	},
	plugins: [],
};
