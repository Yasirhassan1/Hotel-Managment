import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import AppWithTheme from "./AppWithTheme.tsx";
import { Loader } from "./components/Loader.tsx";

import { ThemeModeProvider } from "./context/ThemeContext.ts";
import { router } from "./routes/routes.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root not found");
}

const root = createRoot(rootElement);

root.render(
	<ThemeModeProvider>
		<AppWithTheme>
			<Suspense fallback={<Loader />}>
				<RouterProvider router={router} />,
			</Suspense>
		</AppWithTheme>
	</ThemeModeProvider>,
);
