import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "../../components/Buttons/Button";
import Typography from "../../components/Typography/Typography";
import Box from "../../styled/styled";

interface DeleteFormProps {
	staffMember: string;
	closeDeleteForm: () => void;
	deleteStaff: () => void;
}

export default function DeleteForm({
	staffMember,
	closeDeleteForm,
	deleteStaff,
}: DeleteFormProps) {
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
					Delete Staff Member
				</Typography>
				<IconButton onClick={closeDeleteForm} aria-label="delete">
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
					Are you sure you want to delete{" "}
					<Typography component={"span"} variant="h3">
						{staffMember}
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
					<Typography variant="body1">
						This will permanently remove the staff member and all associated
						data.
					</Typography>
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
				<Button variant="outlined" onClick={closeDeleteForm}>
					Cancel
				</Button>

				<Button
					variant="contained"
					color="error"
					type="submit"
					onClick={deleteStaff}
				>
					Delete
				</Button>
			</Box>
		</Box>
	);
}
