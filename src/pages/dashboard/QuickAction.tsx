import ApartmentIcon from "@mui/icons-material/Apartment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Group from "@mui/icons-material/Group";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import Divider from "@mui/material/Divider";
import Box from "../../components/Box/Box";
import Button from "../../components/Buttons/Button";
import Typography from "../../components/Typography/Typography";

const quickActions = [
	{
		id: "btn1",
		icon: Group,
		title: "Add Staff",
		color: "primary",
	},
	{
		id: "btn2",
		icon: DirectionsCarIcon,
		title: "Add Vehicle",
		color: "secondary",
	},

	{
		id: "btn3",
		icon: ApartmentIcon,
		title: "Add Hotel",
		color: "success",
	},
	{
		id: "btn4",
		icon: LocalDiningIcon,
		title: "Add Restaurant",
		color: "warning",
	},
	{
		id: "btn5",
		icon: BookmarkAddedIcon,
		title: "New Booking",
		color: "primary",
	},
	{
		id: "btn6",
		icon: AssessmentIcon,
		title: "Generate Report",
		color: "error",
	},
];
export default function QuickAction() {
	return (
		<Box
			variant="shadow"
			sx={(theme) => ({
				display: "flex",
				flex: 1,
				minWidth: "300px",
				flexDirection: "column",
				gap: "10px",
				bgcolor: theme.palette.background.paper,
				borderRadius: 8,
				padding: 3,
			})}
		>
			<Typography variant="h3">Quick Actions</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 2,
					marginTop: "10px",
				}}
			>
				{quickActions.map((cur) => (
					<Button
						key={cur.id}
						variant="outlined"
						color={
							cur.color as
								| "primary"
								| "secondary"
								| "success"
								| "error"
								| "info"
								| "warning"
						}
						sx={{
							display: "flex",
							justifyContent: "start",
							textTransform: "none",
						}}
						startIcon={<cur.icon />}
					>
						{cur.title}
					</Button>
				))}
			</Box>
			<Divider />
			<Box
				sx={{
					bgcolor: "#F4F6F9",
					display: "flex",
					alignSelf: "center",
					textAlign: "center",
					flexDirection: "column",
					padding: 1,
					borderRadius: 3,
					flex: 1,
					width: "100%",
				}}
			>
				<Typography variant="caption">Total Revenue This Year</Typography>
				<Typography variant="h2">$816,000</Typography>
				<Typography variant="caption">+22.3% vs last year</Typography>
			</Box>
		</Box>
	);
}
