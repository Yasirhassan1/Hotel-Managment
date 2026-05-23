import { lazy } from "react";
import { createBrowserRouter, redirect } from "react-router";
import AppLayout from "../app-layout/AppLayout";
import { NotFound } from "../components/NotFount";
import Dashboard from "../pages/dashboard/Dashboard";

export const router = createBrowserRouter([
	{
		path: "/",
		loader: () => {
			return redirect("/dashboard");
		},
	},

	{
		path: "/",
		Component: AppLayout,
		children: [
			{
				path: "/dashboard",
				Component: Dashboard,
			},

			{
				path: "staff-management",
				Component: lazy(
					() => import("../pages/staff-management/StaffManagement"),
				),
			},
			{
				path: "vehicles",
				Component: lazy(() => import("../pages/vehicles/Vehicles")),
			},
			{
				path: "hotels",
				Component: lazy(() => import("../pages/hotels/Hotels")),
			},
			{
				path: "restaurants",
				Component: lazy(() => import("../pages/restaurants/Restaurants")),
			},
			{
				path: "settings",
				Component: lazy(() => import("../pages/settings/Settings")),
			},
		],
	},
	{
		path: "*",
		Component: NotFound,
	},
]);
