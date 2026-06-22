import { Snackbar as MUiSnackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import type { SnackbarCloseReason } from "@mui/material/Snackbar";
import type { SetStateAction } from "react";

interface setOpenProps {
	isOpen: boolean;
	message: string;
	duration: number;
	severity: "error" | "info" | "success" | "warning";
}

interface SnackbarProps {
	message: string;
	severity: "error" | "info" | "success" | "warning";
	variant: "filled" | "outlined" | "standard";
	duration: number;
	open: boolean;
	setOpen: React.Dispatch<SetStateAction<setOpenProps>>;
}

export default function Snackbar({
	message,
	variant,
	severity,
	duration,
	open,
	setOpen,
}: SnackbarProps) {
	const handleClose = (
		event: React.SyntheticEvent | Event,
		reason?: SnackbarCloseReason,
	) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen((prev) => ({ ...prev, isOpen: false }));
	};
	return (
		<MUiSnackbar
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			open={open}
			onClose={handleClose}
			autoHideDuration={duration}
		>
			<Alert severity={severity} variant={variant} sx={{ width: "100%" }}>
				{message}
			</Alert>
		</MUiSnackbar>
	);
}
