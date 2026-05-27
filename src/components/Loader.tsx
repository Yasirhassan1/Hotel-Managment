import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
export function Loader() {
	return (
		<Box
			sx={{
				position: "fixed",
				top: "50%",
				left: "50%",
			}}
		>
			<CircularProgress color="primary" aria-label="Loading…" />
		</Box>
	);
}
