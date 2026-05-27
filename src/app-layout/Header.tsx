import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
export function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
	return (
		<Box
			component={"header"}
			sx={{
				height: 70,
				bgcolor: "background.paper",
				flexShrink: 0,
				px: "10px",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			Header
			<MenuIcon
				onClick={() => setSidebarOpen(!sidebarOpen)}
				sx={{ display: { xs: "block", above1000: "none" }, cursor: "pointer" }}
			/>
		</Box>
	);
}
