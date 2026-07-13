import { Avatar, Dialog } from "@mui/material";
import { memo, useState } from "react";
import Typography from "../../components/Typography/Typography";
import Box from "../../styled/styled";
import { stringAvatar } from "../../utils/avatar-short-name";
import ListItems from "./ListItems";

const ProfilePill = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	return (
		<>
			<Box
				onClick={() => setIsDialogOpen(!isDialogOpen)}
				sx={{
					display: "flex",
					padding: "8px",
					borderRadius: "8px",
					gap: "10px",
					cursor: "pointer",
					alignItems: "center",
					"&:hover": {
						bgcolor: "action.hover",
					},
				}}
			>
				<Avatar
					{...stringAvatar("James Wilson")}
					sx={{
						bgcolor: "primary.main",
						fontSize: "14px",
						width: 40,
						fontWeight: 600,
						height: 40,
					}}
				/>
				{/* Hide textual details on small screens to clear real estate */}
				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						flexDirection: "column",
					}}
				>
					<Typography variant="h3" sx={{ fontSize: "14px" }}>
						James Wilson
					</Typography>
					<Typography variant="caption">Administrator</Typography>
				</Box>
			</Box>
			{isDialogOpen && (
				<Dialog
					open={isDialogOpen}
					onClose={() => setIsDialogOpen(false)}
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
							borderRadius: "15px",
							margin: 0,
						},
					}}
				>
					<ListItems />
				</Dialog>
			)}
		</>
	);
};

export default memo(ProfilePill);
