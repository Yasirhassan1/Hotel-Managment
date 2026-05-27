import type { PaletteMode } from "@mui/material/styles";
import "@mui/material/styles";
declare module "@mui/material/styles" {
	interface BreakpointOverrides {
		above1000: true;
	}
	// 	interface Theme {
	//     status: {
	//       danger: string;
	//     };
	//   }
}

export const themeBranding = {
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			above1000: 1000,
			lg: 1200,
			xl: 1536,
		},
	},

	palette: {
		mode: "light" as PaletteMode,

		common: {
			black: "#000",
			white: "#fff",
		},
		primary: {
			main: "#006ad8",
			dark: "#006ad8",
		},
		secondary: {
			main: "#3e3432",
		},
		error: {
			main: "#c62828",
			dark: "#c62828",
		},
		warning: {
			main: "#e65100",
		},
		info: {
			main: "#1565c0",
		},
		success: {
			main: "#2e7d32",
		},
		background: {
			paper: "#ffffff",
			default: "#f4f6f9",
		},
		text: {
			primary: "#000000de",
			secondary: "#888888",
			disabled: "#00000061",
		},
		divider: "#f0f0f0",
	},
	typography: {
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		h1: {
			color: "#3E3432",
		},
		h2: {
			color: "#3E3432",
		},
		h3: {
			color: "#3E3432",
		},

		body1: {
			color: "#444444",
		},
		body2: {
			color: "#666666",
		},
		caption: {
			color: "#999999",
		},
		button: {
			borderRadius: 100,
		},
	},
};
