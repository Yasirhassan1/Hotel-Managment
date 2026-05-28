import { GlobalStyles } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Outlet } from "react-router";

import { Header } from "./Header";
import { SideBar } from "./sidebar/SideBar";

const AppLayout = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<>
			<GlobalStyles
				styles={{
					"html, body, #root": {
						margin: 0,
						padding: 0,
						overflow: "hidden",
						height: "100%",
					},
					"*": {
						transition: "all 0.3s ease",
					},
				}}
			/>

			<Grid
				container
				direction="row"
				sx={{
					height: "100vh",
					overflow: "hidden",
					bgcolor: "background.default",
				}}
			>
				{sidebarOpen && (
					<Box
						onClick={() => setSidebarOpen(false)}
						sx={{
							display: { xs: "block", above1000: "none" },
							position: "absolute",
							inset: 0,
							bgcolor: "rgba(0,0,0,0.4)",
							zIndex: 10,
						}}
					/>
				)}

				<SideBar sidebarOpen={sidebarOpen} />
				<Grid
					sx={{
						flex: 1,
						display: "flex",
						flexDirection: "column",
						height: "100vh",
						overflow: "hidden",
					}}
				>
					<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

					<Box sx={{ flex: 1, overflowY: "auto", px: "1.5rem", pb: "1.5rem" }}>
						<Outlet />
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default AppLayout;
