import type { FilterType } from "../../types/types";

export const initialFilter: FilterType = {
	searchFilter: {
		value: "",
		placeholder: "Search by name or location...",
	},
	filters: [
		{
			id: "location",
			label: "Location",
			defaultValue: "all locations",
			options: [
				{ id: "1", value: "all locations", display: "All Locations" },
				{ id: "2", value: "bangkok", display: "Bangkok" },
				{ id: "3", value: "phuket", display: "Phuket" },
				{ id: "4", value: "chiang mai", display: "Chiang Mai" },
				{ id: "5", value: "krabi", display: "Krabi" },
				{ id: "6", value: "pattaya", display: "Pattaya" },
				{ id: "7", value: "koh samui", display: "Koh Samui" },
			],
		},
		{
			id: "rating",
			label: "Rating",
			defaultValue: "all ratings",
			options: [
				{ id: "1", value: "all ratings", display: "All Ratings" },
				{ id: "2", value: "5", display: "5 Stars" },
				{ id: "3", value: "4", display: "4 Stars" },
				{ id: "4", value: "3", display: "3 Stars" },
				{ id: "5", value: "2", display: "2 Stars" },
				{ id: "6", value: "1", display: "1 Star" },
			],
		},
		{
			id: "status",
			label: "Status",
			defaultValue: "all",
			options: [
				{ id: "1", value: "all", display: "All" },
				{ id: "2", value: "active", display: "Active" },
				{ id: "3", value: "inactive", display: "Inactive" },
				{ id: "4", value: "pending", display: "Pending" },
			],
		},
	],
};