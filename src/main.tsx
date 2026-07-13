import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Loader } from "./components/Loader.tsx";
import { ThemeModeProvider } from "./context/ThemeContext.ts";
import { router } from "./routes/routes.tsx";
import AppTheme from "./theme/AppTheme.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root not found");
}

const root = createRoot(rootElement);

const queryClient = new QueryClient();

root.render(
	<ThemeModeProvider>
		<AppTheme>
			<Suspense fallback={<Loader />}>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={router} />,
				</QueryClientProvider>
			</Suspense>
		</AppTheme>
	</ThemeModeProvider>,
);
