// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router";
import {router} from "./routes/routes.tsx"
import { Suspense } from "react";
import { Loader } from "./components/Loader.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root not found");
}

const root = createRoot(rootElement);

root.render(
	<Suspense fallback={<Loader/>}>
	 <RouterProvider router={router} />,
	 </Suspense>
);
