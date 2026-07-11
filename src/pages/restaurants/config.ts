type StatusType = "Active" | "Inactive" | "Pending";

export const mockData = [
	{
		id: 1,
		restaurant: {
			icon: "🍽️",
			text: "Spice Garden",
			menuItemsCount: 5,
		},
		location: "Bangkok",
		contact: "+66 2 123 4567",
		cuisine: "Thai",
		openingHours: { open: "11:00 AM", close: "11:00 PM" },
		status: "Active" as StatusType,
	},
	{
		id: 2,
		restaurant: {
			icon: "🥢",
			text: "Dragon Palace",
			menuItemsCount: 3,
		},
		location: "Bangkok",
		contact: "+66 2 234 5678",
		cuisine: "Chinese",
		openingHours: { open: "10:00 AM", close: "10:00 PM" },
		status: "Active" as StatusType,
	},
	{
		id: 3,
		restaurant: {
			icon: "🍝",
			text: "La Bella Vita",
			menuItemsCount: 4,
		},
		location: "Phuket",
		contact: "+66 7 345 6789",
		cuisine: "Italian",
		openingHours: { open: "6:00 PM", close: "11:00 PM" },
		status: "Active" as StatusType,
	},
	{
		id: 4,
		restaurant: {
			icon: "🍣",
			text: "Sushi Zen",
			menuItemsCount: 6,
		},
		location: "Bangkok",
		contact: "+66 2 456 7890",
		cuisine: "Seafood",
		openingHours: { open: "12:00 PM", close: "10:00 PM" },
		status: "Pending" as StatusType,
	},
	{
		id: 5,
		restaurant: {
			icon: "🌮",
			text: "Taco Fiesta",
			menuItemsCount: 7,
		},
		location: "Pattaya",
		contact: "+66 3 567 8901",
		cuisine: "Indian",
		openingHours: { open: "11:00 AM", close: "9:00 PM" },
		status: "Inactive" as StatusType,
	},
	{
		id: 6,
		restaurant: {
			icon: "🍛",
			text: "Curry House",
			menuItemsCount: 8,
		},
		location: "Chiang Mai",
		contact: "+66 5 678 9012",
		cuisine: "International",
		openingHours: { open: "11:30 AM", close: "10:30 PM" },
		status: "Active" as StatusType,
	},
];
