import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import Typography from "@mui/material/Typography";
import Chip from "../../components/Chip/Chip";
import Box from "../../styled/styled";
import type { ChipType, RestaurantTableType } from "../../types/types";

interface ViewFormProps {
	data: RestaurantTableType;
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
			icon: AccessTimeIcon,
			title: "Opening Hours",
			subTitle: `${data.openingHours.open} – ${data.openingHours.close}`,
		},
		{
			id: "3",
			icon: MenuBookIcon,
			title: "Menu Items",
			subTitle: `${data.restaurant.menuItemsCount} Items`,
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
				<Typography variant="h1">{data.restaurant.icon}</Typography>
				<Typography variant="h4">{data.restaurant.text}</Typography>
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
					chipType={data.cuisine.toLowerCase() as ChipType}
					label={data.cuisine}
				/>

				<Chip
					chipType={data.status.toLowerCase() as ChipType}
					label={data.status}
				/>
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
