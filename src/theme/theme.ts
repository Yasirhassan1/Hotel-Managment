import { createTheme } from "@mui/material";
import type { PaletteMode } from "@mui/material/styles";
import { darkColors, lightColors } from "./colors";

declare module "@mui/material/styles" {
	interface Palette {
		color: {
			primary: string;
			secondary: string;
			sidebar: string;
			background: string;
			activeNavlinkBgColor: string;
			navlinkHover: string;
			icon: string;
			paper: string;
			textPrimary: string;
			textSecondary: string;
			textDisable: string;
			boxShadow: string;
			h1: string;
			h2: string;
			h3: string;
			body1: string;
			body2: string;
			caption: string;
			scrollbarColor: string,
            scrollbarBgcolor: string,
		};
	}
	interface PaletteOptions {
		color?: Partial<Palette["color"]>;
	}
	interface BreakpointOverrides {
		above1000: true;
	}
}

export const getTheme = (mode: PaletteMode) => {
	const colors = mode === "light" ? lightColors : darkColors;

	return createTheme({
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
			color: colors,

			common: {
				black: "#000",
				white: "#fff",
			},
			primary: {
				main: colors.primary,
				dark: colors.primary,
			},
			secondary: {
				main: colors.secondary,
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
				paper: colors.paper,
				default: colors.background,
			},
			text: {
				primary: colors.textPrimary,
				secondary: colors.textSecondary,
				disabled: colors.textDisable,
			},
			divider: "#f0f0f0",
		},
		typography: {
			fontWeightLight: 300,
			fontWeightRegular: 400,
			fontWeightMedium: 500,
			fontWeightBold: 700,
			h1: {
				color: colors.h1,
			},
			h2: {
				color: colors.h2,
			},
			h3: {
				color: colors.h3,
			},

			body1: {
				color: colors.body1,
			},
			body2: {
				color: colors.body2,
			},
			caption: {
				color: colors.caption,
			},
		},
	});
};
