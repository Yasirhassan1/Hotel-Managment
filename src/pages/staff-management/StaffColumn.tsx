import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Avatar from "@mui/material/Avatar";
import type {
	GridColDef,
	GridRenderCellParams,
	GridRowId,
} from "@mui/x-data-grid";
import { GridActionsCell, GridActionsCellItem } from "@mui/x-data-grid";
import type React from "react";
import type { SetStateAction } from "react";
import Chip from "../../components/Chip/Chip";
import Typography from "../../components/Typography/Typography";
import Box from "../../styled/styled";
import { stringAvatar } from "../../utils/avatar-short-name";

interface FormProps {
	rowId: GridRowId | undefined;
	showForm: boolean;
}
type chipTypes =
	| "active"
	| "inactive"
	| "available"
	| "unavailable"
	| "pending";

interface RoleValue {
	text: string;
	color: string;
	bgColor: string;
}
type StatusType = "all-status" | "active" | "inactive" | "pending";
interface RowDataType {
	id: number;
	staffMember: string;
	email: string;
	phone: string;
	role: { text: string; color: string; bgColor: string };
	status: string;
	joinedDate: string;
}

interface StaffColumnProps {
	openViewForm: () => void;
	openEditForm: () => void;
	openDeleteForm: () => void;
	setViewForm: React.Dispatch<SetStateAction<FormProps>>;
	setEditForm: React.Dispatch<SetStateAction<FormProps>>;
	setDeleteForm: React.Dispatch<SetStateAction<FormProps>>;
}
export const getStaffColumns = ({
	openViewForm,
	openEditForm,
	openDeleteForm,
	setViewForm,
	setEditForm,
	setDeleteForm,
}: StaffColumnProps): GridColDef<RowDataType[][number]>[] => {
	return [
		{
			field: "staffMember",
			headerName: "STAFF MEMBER",
			headerClassName: "super-app-theme--header",

			minWidth: 140,
			flex: 1,
			valueGetter: (value: string) => value ?? "",

			renderHeader: () => (
				<Typography
					variant="body2"
					sx={{
						color: "#888888",
						fontWeight: 600,
						whiteSpace: "pre-wrap",
					}}
				>
					STAFF MEMBER
				</Typography>
			),
			display: "flex",

			renderCell: (params: GridRenderCellParams<any | string>) => (
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 2,
					}}
				>
					<Avatar {...stringAvatar(params.value)} />
					<Typography
						variant="h3"
						sx={{
							fontSize: 13,
							whiteSpace: "pre-wrap",
						}}
					>
						{params.value}
					</Typography>
				</Box>
			),
			editable: false,
		},
		{
			field: "email",
			headerName: "EMAIL",
			headerClassName: "super-app-theme--header",
			minWidth: 170,
			editable: false,
			display: "flex",
			flex: 1,
			valueGetter: (value: string) => value,

			renderHeader: () => (
				<Typography
					variant="body2"
					sx={{
						color: "#888888",
						fontWeight: 600,
					}}
				>
					EMAIL
				</Typography>
			),
		},
		{
			field: "phone",
			headerName: "PHONE",
			type: "string",
			headerClassName: "super-app-theme--header",
			minWidth: 130,
			flex: 1,
			editable: false,
			renderHeader: () => (
				<Typography
					variant="body2"
					sx={{
						color: "#888888",
						fontWeight: 600,
					}}
				>
					PHONE
				</Typography>
			),
		},
		{
			field: "role",
			headerName: "ROLE",
			headerClassName: "super-app-theme--header",

			minWidth: 160,
			flex: 1,
			valueGetter: (value: RoleValue) => ({
				text: value?.text,
				color: value?.color,
				bgColor: value?.bgColor,
			}),

			sortable: false,
			display: "flex",
			renderHeader: () => (
				<Typography
					variant="body2"
					sx={{
						color: "#888888",
						fontWeight: 600,
					}}
				>
					ROLE
				</Typography>
			),
			renderCell: (params: GridRenderCellParams<any | RoleValue>) => {
				if (!params.value?.text) return null;
				return (
					<Chip
						variant="active"
						label={params.value.text}
						sx={{
							color: params.value.color,
							bgcolor: params.value.bgColor,
							borderRadius: 2,
							fontWeight: 600,
							fontSize: "0.72rem",
							height: 24,
						}}
					/>
				);
			},
		},
		{
			field: "status",
			headerName: "STATUS",
			headerClassName: "super-app-theme--header",
			valueGetter: (value: StatusType) => value ?? "",

			renderHeader: () => (
				<Typography
					variant="body2"
					sx={{
						color: "#888888",
						fontWeight: 600,
					}}
				>
					STATUS
				</Typography>
			),

			sortable: false,
			minWidth: 100,
			flex: 1,
			renderCell: (params: GridRenderCellParams<any | string>) => (
				<Chip
					variant={String(params.value).toLowerCase() as chipTypes}
					label={params.value}
				/>
			),
		},
		{
			field: "joinedDate",
			headerName: "JOINED DATE",
			headerClassName: "super-app-theme--header",
			renderHeader: () => (
				<Typography
					variant="body2"
					sx={{
						color: "#888888",
						fontWeight: 600,
						whiteSpace: "pre-wrap",
					}}
				>
					JOINED DATE
				</Typography>
			),
			display: "flex",
			minWidth: 100,
			flex: 1,
		},
		{
			field: "action",
			headerName: "ACTIONS",
			headerClassName: "super-app-theme--header",
			width: 137,

			type: "actions",
			display: "flex",

			renderHeader: () => (
				<Typography
					variant="body2"
					sx={{
						color: "#888888",
						fontWeight: 600,
					}}
				>
					ACTIONS
				</Typography>
			),

			renderCell: (params) => (
				<GridActionsCell {...params}>
					<GridActionsCellItem
						icon={<RemoveRedEyeIcon />}
						onClick={() => {
							openViewForm();
							setViewForm((prev) => ({ ...prev, rowId: params.id }));
						}}
						label="View"
					/>
					<GridActionsCellItem
						icon={<EditIcon />}
						onClick={() => {
							openEditForm();
							setEditForm((prev) => ({ ...prev, rowId: params.id }));
						}}
						label="Edit"
					/>
					<GridActionsCellItem
						icon={<DeleteIcon />}
						onClick={() => {
							openDeleteForm();
							setDeleteForm((prev) => ({ ...prev, rowId: params.id }));
						}}
						label="Delete"
					/>
				</GridActionsCell>
			),
		},
	];
};
