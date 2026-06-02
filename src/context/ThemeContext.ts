import { createContext, createElement, type ReactNode, useState } from "react";

interface ThemeContextType {
	theme: "light" | "dark";
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined,
);

interface ThemeProviderProps {
	children: ReactNode;
}

export function ThemeModeProvider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = useState(
		(localStorage.getItem("mode") as "light" | "dark") || "light",
	);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
        localStorage.setItem("mode", theme === "light"? "dark": "light")
	};

	return createElement(
		ThemeContext.Provider,
		{ value: { theme, toggleTheme } },
		children,
	);
}
