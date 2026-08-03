import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import GroupIcon from "@mui/icons-material/Group";
import Typography from "@mui/material/Typography";
import Chip from "../../components/Chip/Chip";
import Box from "../../styled/styled";
import type { ChipType, StatusType } from "../../types/types";

interface ViewFormProps {
	data: {
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
	};
}

export default function ViewForm({ data }: Readonly<ViewFormProps>) {
	const infoCards = [
		{
			id: "1",
			icon: DriveEtaIcon,
			title: "Registration",
			subTitle: data.registrationNo,
		},
		{
			id: "2",
			icon: GroupIcon,
			title: "Capacity",
			subTitle: `${data.capacity} Seats`,
		},
		{
			id: "3",
			icon: AttachMoneyIcon,
			title: "Price Per Day",
			subTitle: `$ ${data.priceDay}`,
		},
	];

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				alignItems: "center",
				height: "260px",
				overflowY: "auto",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "10px",
				}}
			>
				<Typography variant="h1">{data.vehicle.icon}</Typography>
				<Typography variant="h4">{data.vehicle.text}</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					gap: "10px",
					backgroundColor: "#F7FAFE",
					padding: 3,
					justifyContent: "center",
					width: "100%",
				}}
			>
				<Chip
					chipType={data.vehicleType.toLowerCase() as ChipType}
					label={data.vehicleType}
				/>
				<Chip
					chipType={data.vehicleType.toLowerCase() as ChipType}
					label={data.status}
				/>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					gap: "10px",
					flexWrap: "wrap",
					width: "100%",
				}}
			>
				{infoCards.map((cur) => (
					<Box
						key={cur.id}
						sx={{
							display: "flex",
							gap: "10px",
							flexWrap: "wrap",
							flex: 1,
							minWidth: "200px",
							backgroundColor: "#F8F9FA",
							padding: 2,
							borderRadius: "10px",
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: "2px",
							}}
						>
							<cur.icon color="primary" />
							<Typography variant="body2">{cur.title}</Typography>
							<Typography
								variant="body2"
								sx={{
									fontWeight: 700,
								}}
							>
								{cur.subTitle}
							</Typography>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
}
