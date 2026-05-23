import { createRoot } from "react-dom/client";
import "./index.css";
import { Suspense } from "react";
import { RouterProvider } from "react-router";
import { Loader } from "./components/Loader.tsx";
import { router } from "./routes/routes.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root not found");
}

const root = createRoot(rootElement);

root.render(
	<Suspense fallback={<Loader />}>
		<RouterProvider router={router} />,
	</Suspense>,
);
