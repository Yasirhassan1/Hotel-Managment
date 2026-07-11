import type { FilterType } from "../../types/types";
export const initialFilter: FilterType = {
	searchFilter: {
		value: "",
		placeholder: "Search by name or email",
	},
	filters: [
		{
			id: "role",
			label: "Role",
			defaultValue: "all role",
			options: [
				{ id: "1", value: "all role", display: "All Roles" },
				{ id: "2", value: "admin", display: "Admin" },
				{ id: "3", value: "tour guide", display: "Tour Guide" },
				{ id: "4", value: "driver", display: "Driver" },
				{ id: "5", value: "hotel manager", display: "Hotel Manager" },
			],
		},
		{
			id: "status",
			label: "Status",
			defaultValue: "all status",
			options: [
				{ id: "1", value: "all status", display: "All Status" },
				{ id: "2", value: "active", display: "Active" },
				{ id: "3", value: "inactive", display: "Inactive" },
			],
		},
	],
};
