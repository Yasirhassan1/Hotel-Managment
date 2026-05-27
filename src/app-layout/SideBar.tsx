import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "../components/Typography/Typography";
import NavItem from "./NavItem";
import { data } from "./sidebardata";

const sidebarWidth = "260px";
export function SideBar({ sidebarOpen }: SideBarProps) {
	return (
		<Grid
			sx={{
				bgcolor: "#2A2220",
				flexShrink: 0,
				height: "100vh",

				position: { xs: "absolute", above1000: "relative" },
				zIndex: { xs: 11, above1000: "auto" },
				minWidth: sidebarWidth,
				transform: {
					xs: sidebarOpen ? "translateX(0)" : `translateX(-100%)`,
					above1000: "translateX(0)",
				},
			}}
		>
			<Box
				component={"aside"}
				sx={{
					display: "flex",

					padding: "7px",
					flexDirection: "column",
					gap: "10px",
					minWidth: sidebarWidth,
				}}
			>
				{data.map((cur) => {
					if (cur.type === "text") {
						return (
							<Typography key={cur.id} variant="body2">
								{cur.title}
							</Typography>
						);
					} else {
						return (
							<NavItem key={cur.id} Icon={cur.icon} to={cur.href ?? ""}>
								{cur.title}
							</NavItem>
						);
					}
				})}
			</Box>
		</Grid>
	);
}
