import SettingsIcon from "@mui/icons-material/Settings";
import Grid from "@mui/material/Grid";
import Logo from "../../components/logo/Logo";
import Typography from "../../components/Typography/Typography";
import Box from "../../styled/styled";
import NavItem from "./NavItem";
import { data } from "./sidebardata";

const sidebarWidth = "260px";

const systemMenu = [
	{
		id: "kdjf333",
		type: "link",
		title: "Settings",
		href: "/settings",
		icon: SettingsIcon,
	},
];
export function SideBar({ sidebarOpen }: {sidebarOpen: boolean}) {
	console.log("sidebar render");
	return (
		<Grid
			sx={({ palette }) => ({
				bgcolor: palette.color.sidebar,
				flexShrink: 0,
				height: "100vh",

				position: { xs: "absolute", above1000: "relative" },
				zIndex: { xs: 11, above1000: "auto" },
				width: sidebarWidth,
				transition: "all 0.3s ease",
				transform: {
					xs: sidebarOpen ? "translateX(0)" : `translateX(-100%)`,
					above1000: "translateX(0)",
				},
			})}
		>
			<Box
				component={"aside"}
				sx={{
					display: "flex",

					justifyContent: "space-between",
					height: "100%",
					padding: "11px",
					flexDirection: "column",
					// bgcolor: "darkblue",
					gap: "8px",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						marginLeft: "6px",
						// bgcolor: "orange",
						alignItems: "center",
						padding: "9px",

						gap: "14px",
					}}
				>
					<Logo />
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						<Typography variant="h3" sx={{ color: "white" }}>
							TourAdmin
						</Typography>
						<Typography variant="caption">Management System</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "8px",
						// bgcolor: "green",
						height: "400px",
						overflow: "auto",
						flex: "3",
						paddingTop: "1rem",
						paddingBottom: "1rem",
						borderTop: 1,
						borderBottom: 1,
						borderColor: "#453c3c",
					}}
				>
					<Typography
						key={"kjde"}
						variant="caption"
						sx={{
							fontWeight: 700,
							marginLeft: "13px",
							color: "#746F6E",
						}}
					>
						MAIN MENU
					</Typography>

					{data.map((cur) => {
						if (cur.type === "text") {
							return (
								<Typography
									key={cur.id}
									variant="caption"
									sx={{
										fontWeight: 700,
										marginLeft: "13px",
										color: "#746F6E",
									}}
								>
									{cur.title}
								</Typography>
							);
						} else {
							return (
								<NavItem
									key={cur.id}
									title={cur.title}
									Icon={cur.icon}
									to={cur.href ?? ""}
								>
									{cur.title}
								</NavItem>
							);
						}
					})}
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						// bgcolor: "purple",
						flex: "1",
						mt: "10px",
						gap: "7px",
					}}
				>
					<Typography
						key={"kdjf"}
						variant="caption"
						sx={{
							fontWeight: 700,
							marginLeft: "13px",
							color: "#746F6E",
						}}
					>
						SYSTEM
					</Typography>
					{systemMenu.map((cur) => (
						<NavItem
							key={cur.id}
							title={cur.title}
							Icon={cur.icon}
							to={cur.href ?? ""}
						>
							{cur.title}
						</NavItem>
					))}
				</Box>
			</Box>
		</Grid>
	);
}
