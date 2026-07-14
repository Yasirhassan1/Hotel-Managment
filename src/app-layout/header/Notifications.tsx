import NotificationsIcon from "@mui/icons-material/Notifications";
import {
	Box,
	Dialog,
	DialogTitle,
	Divider,
	List,
	ListItem,
	ListItemButton,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { memo, useMemo, useState } from "react";
import Button from "../../components/Buttons/Button";
import TooltipWithBadge from "../../components/tooltip/ToolTipBadge";
import { NavLink } from "react-router";

interface NotificationProps {
	id: string;
	name: string;
	time: string;
	active: boolean;
}
interface NotificationListProps {
	notificationsList: NotificationProps[];
}

const Notifications = ({ notificationsList }: NotificationListProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [notifications, setNotifications] = useState(notificationsList);

	const sortedNotifications = useMemo(() => {
		return notifications.toSorted(
			(cur, next) => Number(next.active) - Number(cur.active),
		);
	}, [notifications]);

	function readAllNotification() {
		const temp = notifications.map((cur) => ({
			...cur,
			active: false,
		}));
		setNotifications(temp);
	}

	return (
		<>
			<TooltipWithBadge
				title="Notifications"
				icon={NotificationsIcon}
				color="error"
				count={3}
				onClick={() => setIsOpen((prev) => !prev)}
			></TooltipWithBadge>
			{isOpen && (
				<Dialog
					open={isOpen}
					onClose={() => setIsOpen(false)}
					hideBackdrop={true}
					sx={{
						"& .MuiDialog-container": {
							alignItems: "flex-start", // Allows top positioning
							justifyContent: "flex-end", // Allows right positioning
						},
						"& .MuiPaper-root": {
							position: "absolute",
							top: "60px",
							right: "290px",
							minWidth: "300px",
							borderRadius: "15px",

							margin: 0,
						},
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							gap: "10px",
							alignItems: "center",
						}}
					>
						<DialogTitle sx={{ m: 0, p: 2, fontSize: 16, fontWeight: 600 }}>
							Notifications
						</DialogTitle>
						<Button
							variant="text"
							sx={{ textTransform: "none" }}
							disableRipple
							onClick={readAllNotification}
						>
							Mark all read
						</Button>
					</Box>
					<Divider />
					<nav aria-label="main mailbox folders">
						<List>
							{notificationsList.length === 0 && (
								<ListItem>
									<Typography variant="caption">No any Notification</Typography>
								</ListItem>
							)}

							{sortedNotifications.map((cur) => (
								<ListItem disablePadding key={cur.id}>
									<ListItemButton
										sx={{
											display: "flex",
											justifyContent: "space-between",
											gap: "10px",
										}}
									>
										<Box
											sx={{
												display: "flex",
												flexDirection: "column",
											}}
										>
											<Typography
												variant="body1"
												sx={{
													fontWeight: cur.active ? 600 : 300,
												}}
											>
												{cur.name}
											</Typography>
											<Typography variant="caption">{cur.time}</Typography>
										</Box>
										{cur.active && (
											<Box
												sx={{
													width: 7,
													height: 7,
													backgroundColor: "#0068D5",
													borderRadius: 5,
													alignSelf: "start",
												}}
											></Box>
										)}
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</nav>
					<Divider />
					<NavLink
					  style={{
						textDecoration: "none",
						alignSelf:"center",
						padding: "10px",
						color: "#006ad8"
					  }}
						
						
						to="/notifications"
					>
						View all notifications
					</NavLink>
				</Dialog>
			)}
		</>
	);
};

export default memo(Notifications);
