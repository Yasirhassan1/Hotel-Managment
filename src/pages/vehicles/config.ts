type StatusType = "All Status" | "Available" | "Unavailable" | "Pending";
export const mockData = [
	{
		id: 1,
		vehicle: {
			icon: "🚗",
			text: "Toyota Camry 2023",
		},
		vehicleType: "Sedan",
		registrationNo: "ABC-1234",
		capacity: 4,
		driver: "Michael Chen",
		priceDay: 85,
		status: "Available" as StatusType,
	},

	{
		id: 2,
		vehicle: {
			icon: "🚐",
			text: "Toyota HiAce",
		},
		vehicleType: "Van",
		registrationNo: "DEF-5678",
		capacity: 12,
		driver: "Daniel Lee",
		priceDay: 150,
		status: "Available" as StatusType,
	},

	{
		id: 3,
		vehicle: {
			icon: "🚗",
			text: "Mercedes-Benz S-Class",
		},
		vehicleType: "Sedan",
		registrationNo: "GHI-9012",
		capacity: 4,
		driver: "James Wilson",
		priceDay: 250,
		status: "Unavailable" as StatusType,
	},

	{
		id: 4,
		vehicle: {
			icon: "🚌",
			text: "Mitsubishi Rosa",
		},
		vehicleType: "Minibus",
		registrationNo: "JKL-3456",
		capacity: 26,
		driver: "Robert Kim",
		priceDay: 300,
		status: "Available" as StatusType,
	},
	{
		id: 5,
		vehicle: {
			icon: "🚙",
			text: "Toyota Land Cruiser",
		},
		vehicleType: "SUV",
		registrationNo: "MNO-7890",
		capacity: 8,
		driver: "David Martinez",
		priceDay: 200,
		status: "Available" as StatusType,
	},
	{
		id: 6,
		vehicle: {
			icon: "🚎",
			text: "Baiyun Tour Bus",
		},
		vehicleType: "Bus",
		registrationNo: "PQR-1234",
		capacity: 50,
		driver: "Sarah Johnson",
		priceDay: 500,
		status: "Pending" as StatusType,
	},
];
