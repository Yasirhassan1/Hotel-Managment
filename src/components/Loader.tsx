import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
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
