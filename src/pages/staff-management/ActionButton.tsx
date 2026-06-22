import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	// Modal,
	// Slide,
	Tooltip,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
// import type { TransitionProps } from "@mui/material/transitions";
import type { GridRowId } from "@mui/x-data-grid";
import { GridActionsCell, GridActionsCellItem } from "@mui/x-data-grid";
import { useState } from "react";
import Button from "../../components/Buttons/Button";
import Typography from "../../components/Typography/Typography";
import Box from "../../styled/styled";
import DeleteForm from "./DeleteForm";
import EditForm from "./EditForm";
import ViewForm from "./ViewForm";

// const Transition = React.forwardRef(function Transition(
// 	props: TransitionProps & {
// 		children: React.ReactElement<any, any>;
// 	},
// 	ref: React.Ref<unknown>,
// ) {
// 	return <Slide direction="up" ref={ref} {...props} />;
// });
type Mode = "editForm" | "deleteForm" | "viewForm" | null;

interface DialogModeProp {
	rowId: GridRowId | null;
	mode: Mode;
}
interface RowDataType {
	id: number;
	staffMember: string;
	email: string;
	phone: string;
	role: string;
	status: string;
	joinedDate: string;
}

interface ActionsButtonProps {
	rowId: GridRowId;
	rowData: RowDataType;
	roleMenuItems: string[];
	statusMenuItems: string[];
	onEdit: (formData: FormData, id: number) => void;
	onDelete: (id: number) => void;
}
const ActionButton = ({
	rowId,
	rowData,
	roleMenuItems,
	statusMenuItems,
	onEdit,
	onDelete,
	...params
}: ActionsButtonProps) => {
	const [dialogMode, setDialogMode] = useState<DialogModeProp>({
		rowId: null,
		mode: null,
	});

	function handleClick(rowId: GridRowId, formName: Mode) {
		setDialogMode({
			rowId: rowId,
			mode: formName,
		});
	}
		
	

	return (
		<>
        
			<Box sx={{ display: "flex", gap: 1 }}>
				<GridActionsCellItem
					icon={
						<Tooltip title="View">
							<RemoveRedEyeIcon
								sx={{
									"&:hover": {
										color: "#035fc7",
									},
								}}
							/>
						</Tooltip>
					}
					onClick={() => handleClick(rowId, "viewForm")}
					label="View"
				/>
				<GridActionsCellItem
					icon={
						<Tooltip title="Edit">
							<EditIcon
								sx={{
									"&:hover": {
										color: "#ffae00",
									},
								}}
							/>
						</Tooltip>
					}
					onClick={() => handleClick(rowId, "editForm")}
					label="Edit"
				/>
				<GridActionsCellItem
					icon={
						<Tooltip title="Delete">
							<DeleteIcon
								sx={{
									"&:hover": {
										color: "#d20202",
									},
								}}
							/>
						</Tooltip>
					}
					onClick={() => handleClick(rowId, "deleteForm")}
					label="Delete"
				/>
			
            </Box>

			<Dialog
				open={dialogMode.mode === "viewForm"}
				slots={{}}
				keepMounted
				onClose={() =>
					setDialogMode({
						rowId: null,
						mode: null,
					})
				}
				aria-describedby="alert-dialog-slide-description"
				role="alertdialog"
			>
				<Box
					sx={{
						bgcolor: "background.paper",
						padding: "1rem",
						borderRadius: 3,
						position: "relative",
						display: "flex",
						maxWidth: "500px",
						minWidth: "300px",
						height: "fit-content",
						flexDirection: "column",
						gap: "1rem",
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
						<Typography variant="h3">Staff Details</Typography>
						<IconButton
							onClick={() =>
								setDialogMode({
									rowId: null,
									mode: null,
								})
							}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
					</Box>
					<DialogContent
						sx={{
							paddingTop: 1,
							paddingBottom: 1,
							paddingLeft: 0,
							paddingRight: 0,
						}}
					>
						<DialogContentText id="alert-dialog-slide-description">
							<ViewForm data={rowData} />
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button variant="outlined" type="submit" startIcon={<EditIcon />}>
							Edit
						</Button>
						<Button
							variant="contained"
							onClick={() =>
								setDialogMode({
									rowId: null,
									mode: null,
								})
							}
						>
							Close
						</Button>
					</DialogActions>
				</Box>
			</Dialog>

			<Dialog
				open={dialogMode.mode === "editForm"}
				slots={{}}
				keepMounted
				onClose={() =>
					setDialogMode({
						rowId: null,
						mode: null,
					})
				}
				aria-describedby="alert-dialog-slide-description"
				role="alertdialog"
			>
				<Box
					sx={{
						padding: 1,
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
						<Typography variant="h3">Edit Staff Member</Typography>
						<IconButton
							onClick={() =>
								setDialogMode({
									rowId: null,
									mode: null,
								})
							}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
					</Box>
					<DialogContent>
						<DialogContentText id="alert-dialog-slide-description">
							<EditForm
								rowId={rowId as number}
								rowData={rowData}
								roleMenuItems={roleMenuItems}
								statusMenuItems={statusMenuItems}
								submitEditForm={onEdit}
								closeEditForm={() =>
									setDialogMode({
										rowId: null,
										mode: null,
									})
								}
							/>
						</DialogContentText>
					</DialogContent>
				</Box>
			</Dialog>

			<Dialog
				open={dialogMode.mode === "deleteForm"}
				slots={{}}
				keepMounted
				onClose={() =>
					setDialogMode({
						rowId: null,
						mode: null,
					})
				}
				aria-describedby="alert-dialog-slide-description"
				role="alertdialog"
			>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						<DeleteForm
							staffMember={rowData.staffMember}
							deleteStaff={() => onDelete(rowId as number)}
							closeDeleteForm={() =>
								setDialogMode({
									rowId: null,
									mode: null,
								})
							}
						/>
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default ActionButton;
