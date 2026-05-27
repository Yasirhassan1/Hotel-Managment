import ApartmentIcon from "@mui/icons-material/Apartment";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GroupIcon from "@mui/icons-material/Group";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import SettingsIcon from "@mui/icons-material/Settings";
import WindowIcon from "@mui/icons-material/Window";
import type { SvgIconProps } from "@mui/material";
import type { ComponentType } from "react";

interface NavItemType {
	id: string;
	type: string;
	title: string;
	href?: string;
	icon?: ComponentType<SvgIconProps>;
}
export const data: NavItemType[] = [
	{
		id: "23ds",
		type: "text",
		title: "MAIN MENU",
	},
	{
		id: "dfkj3",
		type: "link",
		title: "Dashboard",
		href: "/",
		icon: WindowIcon,
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
		id: "kdjf43",
		type: "text",
		title: "SYSTEM",
	},

	{
		id: "kdjf333",
		type: "link",
		title: "Settings",
		href: "/settings",
		icon: SettingsIcon,
	},
];
