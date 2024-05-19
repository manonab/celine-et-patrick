/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				greenWedding: "#448B71",
				wedding: "#e9edc9",
				chocolat: "#7B3F00",
				hotChocolate: "#3E1F00",
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
