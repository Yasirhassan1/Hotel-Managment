import type { FilterType } from "../../types/types";
export const initialFilter: FilterType = {
	searchFilter: {
		value: "",
		placeholder: "Search by name, registration, driver...",
	},
	filters: [
		{
			id: "vehicleType",
			label: "Vehicle Type",
			defaultValue: "all types",
			options: [
				{ id: "1", value: "all types", display: "All Types" },
				{ id: "2", value: "sedan", display: "Sedan" },
				{ id: "3", value: "van", display: "Van" },
				{ id: "4", value: "minibus", display: "Minibus" },
				{ id: "5", value: "suv", display: "SUV" },
				{ id: "6", value: "bus", display: "Bus" },
			],
		},
		{
			id: "status",
			label: "Status",
			defaultValue: "all status",
			options: [
				{ id: "1", value: "all status", display: "All Status" },
				{ id: "2", value: "available", display: "Available" },
				{ id: "3", value: "unavailable", display: "Unavailable" },
				{ id: "4", value: "pending", display: "Pending" },
			],
		},
	],
};
