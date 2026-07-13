import NotificationsIcon from "@mui/icons-material/Notifications";
// import { Box, Dialog, List, ListItem, ListItemButton } from "@mui/material";
// import Typography from "@mui/material/Typography";
import { memo, useState } from "react";
import TooltipWithBadge from "../../components/tooltip/ToolTipBadge";

// interface NotificationProps{
//     name: string,
//     time: string,
//     active: boolean
// }
// interface NotificationListProps{
//     notifications: NotificationProps[];

// }
const Notifications = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<TooltipWithBadge
				title="Notifications"
				icon={NotificationsIcon}
				color="error"
				count={3}
				onClick={() => setIsOpen((prev) => !prev)}
			></TooltipWithBadge>
			{/* {isOpen && (
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
							right: "80px",
							margin: 0,
						},
					}}
				>
					<nav aria-label="main mailbox folders">
						<List>
							<ListItem disablePadding>
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
												fontWeight: 600,
											}}
										>
											New Booking
										</Typography>
										<Typography variant="caption">2 min ago</Typography>
									</Box>
									<Box
										sx={{
											width: 10,
											height: 10,
											backgroundColor: "#0068D5",
											borderRadius: 5,
										}}
									></Box>
								</ListItemButton>
							</ListItem>
						</List>
					</nav>
				</Dialog>
			)} */}
		</>
	);
};

export default memo(Notifications);
