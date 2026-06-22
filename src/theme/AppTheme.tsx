import { CssBaseline, ThemeProvider } from "@mui/material";
import { useTheme } from "../hooks/useTheme";
import { getTheme } from "./theme";

export default function AppTheme({ children }: { children: React.ReactNode }) {
	const { theme } = useTheme();
	const currentTheme = getTheme(theme);

	return (
		<ThemeProvider theme={currentTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
