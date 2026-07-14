import MenuIcon from "@mui/icons-material/Menu";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useLocation } from "react-router";
import Typography from "../../components/Typography/Typography";
import { useTheme } from "../../hooks/useTheme";
import Box from "../../styled/styled";
import Notifications from "./Notifications";
import ProfilePill from "./ProfilePill";

const notifications = [
	{
		id: "not1",
		name: "New Booking #0992",
		time: "2min ago",
		active: true,
	},

	{
		id: "not4",
		name: "New Booking #992",
		time: "2min ago",
		active: false,
	},
	{
		id: "not5",
		name: "New Booking #0440",
		time: "16 min ago",
		active: true,
	},
	{
		id: "not4e",
		name: "New Booking #3df",
		time: "16 min ago",
		active: false,
	},
	{
		id: "not6",
		name: "New Booking #9393",
		time: "16 min ago",
		active: true,
	},
];

interface HeaderProps {
	sidebarOpen: boolean;
	setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const routeTitles: Record<string, string> = {
	"/": "Dashboard Overview",
	"/staff-management": "Staff Management",
	"/vehicles": "Vehicle Management",
	"/hotels": "Hotel Management",
	"/restaurants": "Restaurants & Menus",
	"/settings": "Settings",
	"/notifications": "Notifications",
};

export function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
	const { pathname } = useLocation();
	const { theme, toggleTheme } = useTheme();
	const title = routeTitles[pathname] ?? "App";
	console.log("header");
	return (
		<Box
			variant="shadow"
			component="header"
			sx={{
				minHeight: 70,
				bgcolor: "background.paper",
				flexShrink: 0,
				px: "1.4rem",
				py: { xs: "0.8rem", sm: 0 }, // Extra padding on mobile when stacked
				display: "flex",
				alignItems: "center",
				zIndex: 10,
			}}
		>
			<Box
				sx={{
					display: "flex",
					// Stacks elements vertically on mobile, horizontally on tablet/desktop
					flexDirection: { xs: "column", sm: "row" },
					justifyContent: "space-between",
					alignItems: { xs: "stretch", sm: "center" },
					gap: "15px",
					width: "100%",
				}}
			>
				{/* LEFT SIDE: Titles and Breadcrumbs */}
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Typography variant="h3">{title}</Typography>
					<Typography
						variant="caption"
						sx={{
							color: "gray",
						}}
					>
						Dashboard /{" "}
						<Typography
							component="span"
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

				{/* RIGHT SIDE: Interactive Widgets & Mobile Trigger */}
				<Box
					sx={{
						display: "flex",
						gap: "1.3rem",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					{/* Action controls wrapper */}
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: "1.3rem",
							position: "relative", // Absolute dropdown relies on this parent context
						}}
					>
						<Notifications notificationsList={notifications} />

						{/* Profile Pill */}

						<ProfilePill />

						<FormControl size="small" sx={{ minWidth: 90 }}>
							<InputLabel id="theme-select-label">Theme</InputLabel>
							<Select
								labelId="theme-select-label"
								id="theme-select"
								value={theme}
								label="Theme"
								onChange={() => toggleTheme()}
							>
								<MenuItem value="light">Light</MenuItem>
								<MenuItem value="dark">Dark</MenuItem>
							</Select>
						</FormControl>
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
		</Box>
	);
}
