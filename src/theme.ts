import type { PaletteMode } from "@mui/material/styles";
export const themeBranding = {
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 50,
					paddingTop: 8,
					paddingBottom: 8,
					paddingLeft: 15,
					paddingRight: 15,
					textTransform: "none",
					height: "fit-content",
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: "8px",
				},
				input: {
					padding: "13px 16px",
				},
			},
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
			fontWeight: 300,
			fontSize: "6rem",
			lineHeight: 1.167,
			letterSpacing: "-0.01562em",
		},
		h2: {
			color: "#3E3432",
			fontWeight: 300,
			fontSize: "3.75rem",
			lineHeight: 1.2,
			letterSpacing: "-0.00833em",
		},
		h3: {
			fontWeight: 400,
			fontSize: "3rem",
			lineHeight: 1.167,
			letterSpacing: "0em",
		},
		h4: {
			fontWeight: 400,
			fontSize: "2.125rem",
			lineHeight: 1.235,
			letterSpacing: "0.00735em",
		},
		body1: {
			fontWeight: 400,
			fontSize: "1rem",
			lineHeight: 1.5,
			letterSpacing: "0.00938em",
		},
		body2: {
			fontWeight: 400,
			fontSize: "0.875rem",
			lineHeight: 1.43,
			letterSpacing: "0.01071em",
		},
		button: {
			borderRadius: 100,
		},
	},
};
