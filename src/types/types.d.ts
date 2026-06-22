export interface Option {
	id: string;
	value: string;
	display: string;
}

export interface FilterField {
	id: string;
	label: string;
	options: Option[];
	defaultValue: string;
}

export interface FilterType {
	searchFilter: {
		value: string;
		placeholder: string;
	};
	filters: FilterField[];
}

export interface FilterBarProps {
	filter: FilterType;
	setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

export type RoleType =
	| "Admin"
	| "Tour Guide"
	| "Driver"
	| "Booking Agent"
	| "Hotel Manager"
	| "Restaurant Manager"
	| "Marketing Officer";

export type ChipType =
	| "active"
	| "inactive"
	| "available"
	| "unavailable"
	| "pending"
	| "admin"
	| "tour guide"
	| "driver"
	| "booking agent"
	| "hotel manager"
	| "restaurant manager"
	| "marketting officer";
