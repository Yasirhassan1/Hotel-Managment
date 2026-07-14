import ApartmentIcon from "@mui/icons-material/Apartment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GroupIcon from "@mui/icons-material/Group";
import NotificationsIcon from "@mui/icons-material/Notifications";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import type { SvgIconProps } from "@mui/material";
import type { ComponentType } from "react";

interface NavItemType {
	id: string;
	type: string;
	title: string;
	href: string;
	icon: ComponentType<SvgIconProps>;
}
export const data: NavItemType[] = [
	{
		id: "dfkj3",
		type: "link",
		title: "Dashboard",
		href: "/",
		icon: DashboardIcon,
	},
	{
		id: "kldjf3",
		type: "link",
		title: "Staff Management",
		href: "/staff-management",
		icon: GroupIcon,
	},

	{
		id: "kldjf3dfe",
		type: "link",
		title: "Vehicles",
		href: "/vehicles",
		icon: DirectionsCarIcon,
	},

	{
		id: "lkdjfdj",
		type: "link",
		title: "Hotels",
		href: "/hotels",
		icon: ApartmentIcon,
	},

	{
		id: "kjfde34",
		type: "link",
		title: "Restaurants & Menus",
		href: "/restaurants",
		icon: RestaurantMenuIcon,
	},
	{
		id: "kjfde3de4",
		type: "link",
		title: "Notifications",
		href: "/notifications",
		icon: NotificationsIcon,
	},
];
