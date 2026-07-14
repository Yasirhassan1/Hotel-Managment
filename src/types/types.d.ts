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
	| "marketting officer"
	| "sedan"
	| "van"
	| "minibus"
	| "suv"
	| "bus"
	| "indian"
	| "italian"
	| "thai"
	| "chinese"
	| "seafood"
	| "international"
	| undefined;
export type CarType = "sedan" | "van" | "minibus" | "suv" | "bus";

// export type StatusType = "all-status" | "available" | "unavailable" | "pending";
export type StatusType = "All Status" | "Available" | "Unavailable" | "Pending";

export interface StaffTableType {
	id: number;
	staffMember: string;
	email: string;
	phone: string;
	role: string;
	status: string;
	joinedDate: string;
}

export interface VehicleTableType {
	id: number;
	vehicle: {
		icon: string;
		text: string;
	};
	vehicleType: string;
	registrationNo: string;
	capacity: number;
	driver: string;
	priceDay: number;
	status: StatusType;
}

export type HotelStatusType = "Active" | "Inactive" | "Pending";

export interface HotelTableType {
	id: number;
	hotel: {
		icon: string;
		text: string;
	};
	location: string;
	contact: string;
	rooms: number;
	priceRange: {
		min: number;
		max: number;
	};
	rating: number;
	status: HotelStatusType;
}

export type RestaurantStatusType = "Active" | "Inactive" | "Pending";

export interface RestaurantTableType {
	id: number;
	restaurant: {
		icon: string;
		text: string;
		menuItemsCount: number;
	};
	location: string;
	contact: string;
	cuisine: string;
	openingHours: {
		open: string;
		close: string;
	};
	status: RestaurantStatusType;
}


export interface NotificationType{
	id: string,
	name: string,
	time: string,
	active: boolean
}