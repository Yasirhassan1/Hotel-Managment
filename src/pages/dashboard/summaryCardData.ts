import ApartmentIcon from "@mui/icons-material/Apartment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GroupIcon from "@mui/icons-material/Group";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
export const summaryCardData = [
	{
		id: "card1",
		title: "Total Staff",
		count: 12,
		tag: {
			text: "+2 this month",
			tagColor: "#177269",
		},
		Icon: {
			iconRef: GroupIcon,
			iconBgColor: "#E3F0FF",
			iconColor: "#006AD8",
		},
	},
	{
		id: "card2",
		title: "Total Vehicles",
		count: 8,
		tag: {
			text: "+1 this month",
			tagColor: "#177269",
		},
		Icon: {
			iconRef: DirectionsCarIcon,
			iconBgColor: "#F3E5F5",
			iconColor: "#7B1FA2",
		},
	},
	{
		id: "card3",
		title: "Total Hotels",
		count: 6,
		tag: {
			text: "No change",
			tagColor: "#2d2d2d",
		},
		Icon: {
			iconRef: ApartmentIcon,
			iconBgColor: "#E0F2F1",
			iconColor: "#177269",
		},
	},

	{
		id: "cardf2",
		title: "Total Restaurants",
		count: 6,
		tag: {
			text: "+1 this month",
			tagColor: "#177269",
		},
		Icon: {
			iconRef: LocalDiningIcon,
			iconBgColor: "#FFF3E0",
			iconColor: "#F57C00",
		},
	},

	{
		id: "caf2",
		title: "Active Bookings",
		count: 247,
		tag: {
			text: "+18 this month",
			tagColor: "#177269",
		},
		Icon: {
			iconRef: BookmarksIcon,
			iconBgColor: "#E3F2FD",
			iconColor: "#1565C0",
		},
	},
	{
		id: "card6",
		title: "Monthly Revenue",
		count: 95000,
		tag: {
			text: "+14.5 vs last month this month",
			tagColor: "#177269",
		},
		Icon: {
			iconRef: AttachMoneyIcon,
			iconBgColor: "#E8F5E9",
			iconColor: "#177269",
		},
	},
];
