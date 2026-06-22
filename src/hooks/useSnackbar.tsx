import { useState } from "react";

type Severity = "error" | "info" | "success" | "warning";

export function useSnackbar(isOpen = false, message = "") {
	const [snackbar, setSnackbar] = useState({
		isOpen: isOpen,
		message: message,
		duration: 0,
		severity: "success" as Severity,
	});

	function initializeSnackbar(
		isOpen: boolean,
		message: string,
		duration: number,
		severity: Severity,
	) {
		setSnackbar((prev) => ({
			...prev,
			isOpen: isOpen,
			message: message,
			duration: duration,
			severity: severity,
		}));
	}

	return { snackbar, setSnackbar, initializeSnackbar };
}
