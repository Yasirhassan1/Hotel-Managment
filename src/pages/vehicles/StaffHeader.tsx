import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Button from "../../components/Buttons/Button";
import Typography from "../../components/Typography/Typography";
import Box from "../../styled/styled";
import AddForm from "./AddForm";

interface TestProps {
	dataSize: number;
	onVehicleAdd: (data: any) => void;
	vehicleTypeMenuItems: string[];
	statusMenuItems: string[];
}
export function StaffHeader({
	dataSize,
	onVehicleAdd,
	vehicleTypeMenuItems,
	statusMenuItems,
}: TestProps) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					gap: "1rem",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Typography variant="h3">Vehicle Management</Typography>
					<Typography variant="caption">{dataSize} total vehicles</Typography>
				</Box>
				<Button
					onClick={() => setIsOpen(true)}
					variant="contained"
					startIcon={<AddIcon />}
				>
					Add Vehicles
				</Button>
			</Box>
			{isOpen ? (
				<Dialog
					open={isOpen}
					slots={{}}
					keepMounted
					onClose={() => setIsOpen(false)}
					aria-describedby="alert-dialog-slide-description"
					role="alertdialog"
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							padding: 2,
							alignItems: "center",
							gap: "1rem",
						}}
					>
						<Typography variant="h3">Add New Vehicle</Typography>
						<IconButton onClick={() => setIsOpen(false)} aria-label="delete">
							<CloseIcon />
						</IconButton>
					</Box>

					<AddForm
						addVehicle={onVehicleAdd}
						closeForm={() => setIsOpen(false)}
						vehicleType={vehicleTypeMenuItems}
						statusMenuItems={statusMenuItems}
					/>
				</Dialog>
			) : null}
		</>
	);
}
