import Avatar from "@mui/material/Avatar";
import Button from "../../components/Buttons/Button";
import Chip from "../../components/Chip/Chip";
import Typography from "../../components/Typography/Typography";
import Box from "../../styled/styled";
import { stringAvatar } from "../../utils/avatar-short-name";

type chipTypes =
	| "active"
	| "inactive"
	| "available"
	| "unavailable"
	| "pending";

const data = [
	{
		id: "activity1",
		title: "New booking confirmed — Tour Package #1089",
		name: "Emily Davis",
		time: "2 minutes ago",
		status: "Active",
	},
	{
		id: "activit2",
		title: "New staff member added — Carlos Rivera",
		name: "James Wilson",
		time: "15 minutes ago",
		status: "Active",
	},
	{
		id: "activit3",
		title: "Vehicle returned — Toyota HiAce (DEF-5678)",
		name: "Michael Chen",
		time: "1 hour ago",
		status: "Active",
	},

	{
		id: "activit4",
		title: "Hotel reservation cancelled — Booking #0987",
		name: "Robert Kim",
		time: "2 hour ago",
		status: "Inactive",
	},
	{
		id: "activit5",
		title: "Menu item updated at Spice Garden",
		name: "Lisa Thompson",
		time: "3 hour ago",
		status: "Active",
	},
	{
		id: "activit6",
		title: "New hotel package added — Riverside Plaza",
		name: "Sarah Johnson",
		time: "5 hours ago",
		status: "Active",
	},
	{
		id: "activit7",
		title: "Vehicle maintenance scheduled — Bus PQR-1234",
		name: "Daniel Lee",
		time: "6 hours ago",
		status: "Pending",
	},
];
export default function RecientActivity() {
	return (
		<Box
			variant="shadow"
			sx={(theme) => ({
				display: "flex",
				flexDirection: "column",
				gap: "10px",
				flex: 2,
				minWidth: "350px",
				bgcolor: theme.palette.background.paper,
				padding: 3,
				borderRadius: 8,
			})}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Typography variant="h3">Recent Activity</Typography>
				<Button variant="text" color="primary">
					View All
				</Button>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "1.4rem",
					marginTop: "10px",
				}}
			>
				{data.map((cur) => (
					<Box
						key={cur.id}
						sx={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
							gap: "1.2rem",
						}}
					>
						<Avatar {...stringAvatar(cur.name)} />
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								flex: 1,
							}}
						>
							<Typography variant="body2">{cur.title}</Typography>
							<Box
								sx={{
									display: "flex",
									gap: "1rem",
								}}
							>
								<Typography variant="caption">{cur.name}</Typography>
								<Typography variant="caption">{cur.time}</Typography>
							</Box>
						</Box>
						<Chip
							label={cur.status}
							variant={cur.status.toLowerCase() as chipTypes}
						/>
					</Box>
				))}
			</Box>
		</Box>
	);
}
