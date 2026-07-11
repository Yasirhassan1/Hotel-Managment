import type { FilterType } from "../../types/types";

export const initialFilter: FilterType = {
	searchFilter: {
		value: "",
		placeholder: "Search by name or location...",
	},
	filters: [
		{
			id: "cuisine",
			label: "Cuisine",
			defaultValue: "all cuisines",
			options: [
				{ id: "1", value: "all cuisines", display: "All Cuisines" },
				{ id: "2", value: "thai", display: "Thai" },
				{ id: "3", value: "chinese", display: "Chinese" },
				{ id: "4", value: "italian", display: "Italian" },
				{ id: "5", value: "seafood", display: "Seafood" },
				{ id: "6", value: "international", display: "International" },
				{ id: "7", value: "indian", display: "Indian" },
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
