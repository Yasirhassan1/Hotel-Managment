import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { memo } from "react";
import Button from "../../components/Buttons/Button";
import Typography from "../../components/Typography/Typography";
import Box from "../../styled/styled";

interface DeleteFormProps {
	title: string;
	message: string;
	warningMessage: string;
	targetDelete: string;
	close: () => void;
	remove: () => void;
}

const DeleteForm = ({
	title,
	message,
	targetDelete,
	warningMessage,
	close,
	remove,
}: DeleteFormProps) => {
	console.log("Delete form");
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 1,
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					gap: "1rem",
				}}
			>
				<Typography variant="h3" color="error">
					{title}
				</Typography>
				<IconButton onClick={close} aria-label="delete">
					<CloseIcon />
				</IconButton>
			</Box>
			<Divider />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
				}}
			>
				<Typography variant="body1">
					{message}
					<Typography component={"span"} variant="h3">
						{targetDelete}
					</Typography>{" "}
					? This action cannot be undone.
				</Typography>
				<Box
					sx={{
						padding: 2,
						border: "1px solid #f52828",
						borderRadius: 2,
						bgcolor: "#fddede",
					}}
				>
					<Typography variant="body1">{warningMessage}</Typography>
				</Box>
			</Box>
			<Divider />
			<Box
				sx={{
					display: "flex",
					gap: "0.5rem",
					alignSelf: "end",
					mt: "0.5rem",
				}}
			>
				<Button variant="outlined" onClick={close}>
					Cancel
				</Button>

				<Button
					variant="contained"
					color="error"
					type="submit"
					onClick={remove}
				>
					Delete
				</Button>
			</Box>
		</Box>
	);
};

export default memo(DeleteForm);
