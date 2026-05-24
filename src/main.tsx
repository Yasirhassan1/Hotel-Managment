import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { Suspense } from "react";
import { RouterProvider } from "react-router";
import { Loader } from "./components/Loader.tsx";
import { router } from "./routes/routes.tsx";
import { themeBranding } from "./theme.ts";

const theme = createTheme(themeBranding);

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root not found");
}

const root = createRoot(rootElement);

root.render(
	<ThemeProvider theme={theme}>
		<Suspense fallback={<Loader />}>
			<RouterProvider router={router} />,
		</Suspense>
		,
	</ThemeProvider>,
);
