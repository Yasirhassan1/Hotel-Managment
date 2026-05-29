import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { useLocation } from "react-router";
import Avatar from "../../components/avatars/Avatar";
import Box from "../../components/Box/Box";
import TextField from "../../components/TextFields/TextField";
import Typography from "../../components/Typography/Typography";
import TooltipWithBadge from "../../components/tooltip/ToolTipBadge";
import { stringAvatar } from "../../utils/avatar-short-name";
import ListItems from "./ListItems";

interface HeaderProps {
	sidebarOpen: boolean;
	setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
	dropDownMenuOpen: boolean;
	setDropDownMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const routeTitles: Record<string, string> = {
	"/": "Dashboard Overview",
	"/staff-management": "Staff Management",
	"/vehicles": "Vehicle Management",
	"/hotels": "Hotel Management",
	"/restaurants": "Restaurants & Menus",
	"/settings": "Settings",
};

export function Header({
	sidebarOpen,
	setSidebarOpen,
	dropDownMenuOpen,
	setDropDownMenuOpen,
}: HeaderProps) {
	const { pathname } = useLocation();
	const title = routeTitles[pathname] ?? "App";
	return (
		<Box
			variant="shadow"
			component={"header"}
			sx={{
				minHeight: 70,
				bgcolor: "background.paper",
				flexShrink: 0,
				px: "23px",

				display: "flex",
				alignItems: "center",
				flexWrap: "wrap",
				justifyContent: "space-between",
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					// bgcolor: "green",
					flexWrap: "wrap",
					gap: "10px",
					alignItems: "center",
					width: "100%",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Typography variant="h3" sx={{}}>
						{title}
					</Typography>
					<Typography
						variant="caption"
						sx={{
							color: "gray",
						}}
					>
						Dashboard /{" "}
						<Typography
							component={"span"}
							variant="caption"
							sx={{
								color: "primary.main",
								fontWeight: 600,
							}}
						>
							{title}
						</Typography>
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						gap: "1.3rem",
						// bgcolor: "green",
						alignItems: "center",
					}}
				>
					<TextField
						
						id={`input`}
						sx={{
							bgcolor: "#F4F6F9",
							borderRadius: "40px",
							'& .MuiInputBase-root': {
								height: '40px',
							}
						}}
						slotProps={{
							input: {
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon />
									</InputAdornment>
								),
							},
						}}
						variant="full-rounded"
						placeholder="Search"
					/>
					<TooltipWithBadge
						title="Notifications"
						Icon={NotificationsIcon}
						color="error"
						count={3}
					></TooltipWithBadge>
					<Box
						onClick={() => setDropDownMenuOpen(!dropDownMenuOpen)}
						sx={{
							display: "flex",
							padding: "8px",
							borderRadius: "8px",
							gap: "10px",
							cursor: "pointer",
							alignItems: "center",
							"&:hover": {
								bgcolor: "#e7e7e779",
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
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Typography variant="h3">James Wilson</Typography>
							<Typography variant="caption">Administrator</Typography>
						</Box>
					</Box>

					<Box
						sx={{
							position: "absolute",
							right: "30px",
							display: dropDownMenuOpen ? "block" : "none",
							top: "75px",
							zIndex: 20,
						}}
					>
						<ListItems />
					</Box>
				</Box>
				<MenuIcon
					onClick={() => setSidebarOpen(!sidebarOpen)}
					sx={{
						display: { xs: "block", above1000: "none" },
						cursor: "pointer",
					}}
				/>
			</Box>
		</Box>
	);
}
