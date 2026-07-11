type StatusType = "Active" | "Inactive" | "Pending";

export const mockData = [
	{
		id: 1,
		hotel: {
			icon: "🏨",
			text: "Grand Horizon Hotel",
		},
		location: "Bangkok",
		contact: "+66 2 123 4567",
		rooms: 250,
		priceRange: { min: 120, max: 800 },
		rating: 5,
		status: "Active" as StatusType,
	},
	{
		id: 2,
		hotel: {
			icon: "🏝️",
			text: "Oceanview Resort",
		},
		location: "Phuket",
		contact: "+66 7 234 5678",
		rooms: 180,
		priceRange: { min: 200, max: 1200 },
		rating: 5,
		status: "Active" as StatusType,
	},
	{
		id: 3,
		hotel: {
			icon: "🏔️",
			text: "Mountain Breeze Lodge",
		},
		location: "Chiang Mai",
		contact: "+66 5 345 6789",
		rooms: 90,
		priceRange: { min: 80, max: 450 },
		rating: 4,
		status: "Active" as StatusType,
	},
	{
		id: 4,
		hotel: {
			icon: "🏢",
			text: "Krabi Cliffside Inn",
		},
		location: "Krabi",
		contact: "+66 7 456 7890",
		rooms: 60,
		priceRange: { min: 100, max: 500 },
		rating: 4,
		status: "Pending" as StatusType,
	},
	{
		id: 5,
		hotel: {
			icon: "🌅",
			text: "Pattaya Beachfront Suites",
		},
		location: "Pattaya",
		contact: "+66 3 567 8901",
		rooms: 140,
		priceRange: { min: 90, max: 600 },
		rating: 3,
		status: "Inactive" as StatusType,
	},
	{
		id: 6,
		hotel: {
			icon: "🏖️",
			text: "Koh Samui Palm Resort",
		},
		location: "Koh Samui",
		contact: "+66 7 678 9012",
		rooms: 110,
		priceRange: { min: 150, max: 900 },
		rating: 5,
		status: "Active" as StatusType,
	},
];
