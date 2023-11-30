import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
		colors: {
			"purple": "#2A2FAF",
			"light-purple": "#A99EFF",
			"dark": "#222A33",
			"white": "#FFFFFF",
			"yellow": "#FFE70E"
		},
		extend: {
			backgroundImage: {
				"gradient-main": "linear-gradient(135deg, #0E141B 7%, #1D1A33 38.14%, #2F2A55 67.03%)",
				"gradient-left-button": "linear-gradient(90deg, #6369F1 0%, #2C32B5 100%)",
				"gradient-right-button": "linear-gradient(270deg, #6369F1 0%, #2C32B5 100%)"
			},
			backgroundColor: {
				"white-transparent": "rgba(255, 255, 255, 0.84)"
			},
			boxShadow: {
        "smooth": "0 0 16px rgba(0, 0, 0, 0.16), 0 4px 32px rgba(0, 0, 0, 0.24)"
      },
			minHeight: {
				"card-small": "240px",
				"card": "320px"
			},
			width: {
				"card": "32%"	
			}
		},
		screens: {
      "xs": { "min": "375px" },
      "sm": { "min": "425px" },
			"md": { "min": "768px" },
      "lg": { "min": "1024px" }
    }
  },
  plugins: []
};

export default config;
