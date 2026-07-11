import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import Chip from "../../components/Chip/Chip";
import Box from "../../styled/styled";
import type { HotelTableType } from "../../types/types";

const STAR_KEYS = ["star-1", "star-2", "star-3", "star-4", "star-5"];

interface ViewFormProps {
	data: HotelTableType;
}

export default function ViewForm({ data }: Readonly<ViewFormProps>) {
	const infoCards = [
		{
			id: "1",
			icon: PlaceIcon,
			title: "Location",
			subTitle: data.location,
		},
		{
			id: "2",
			icon: MeetingRoomIcon,
			title: "Rooms",
			subTitle: `${data.rooms} Rooms`,
		},
		{
			id: "3",
			icon: AttachMoneyIcon,
			title: "Price Range",
			subTitle: `$${data.priceRange.min} - $${data.priceRange.max}`,
		},
		{
			id: "4",
			icon: PhoneIcon,
			title: "Contact",
			subTitle: data.contact,
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
				<Typography variant="h1">{data.hotel.icon}</Typography>
				<Typography variant="h4">{data.hotel.text}</Typography>
				<Box sx={{ display: "flex" }}>
					{STAR_KEYS.map((starKey, i) => (
						<StarIcon
							key={starKey}
							sx={{
								width: 18,
								height: 18,
								color: i < data.rating ? "#FFB400" : "#E0E0E0",
							}}
						/>
					))}
				</Box>
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
				<Chip chipType={data.status.toLowerCase() as any} label={data.status} />
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "10px",
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
							backgroundColor: "#E7E7E7",
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
							<Typography variant="body2">{cur.subTitle}</Typography>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
}
