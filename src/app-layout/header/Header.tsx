import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useLocation } from "react-router";
import Typography from "../../components/Typography/Typography";
import TooltipWithBadge from "../../components/tooltip/ToolTipBadge";
import { useTheme } from "../../hooks/useTheme";
import Box from "../../styled/styled";
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
	const { theme, toggleTheme } = useTheme();
	const title = routeTitles[pathname] ?? "App";
	console.log("dashboard");

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
						<TooltipWithBadge
							title="Notifications"
							icon={NotificationsIcon}
							color="error"
							count={3}
						/>

						{/* Profile Pill */}

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

						{/* Dropdown Box position fixed to sit neatly below controls */}
						<Box
							sx={{
								position: "absolute",
								right: 0,
								display: dropDownMenuOpen ? "block" : "none",
								top: "55px",
								zIndex: 20,
							}}
						>
							<ListItems />
						</Box>

						{/* Theme Select Trigger */}
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

					{/* Hamburger Mobile Menu Switcher */}
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
