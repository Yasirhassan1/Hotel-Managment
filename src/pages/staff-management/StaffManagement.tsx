import Avatar from "@mui/material/Avatar";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { memo, useEffect, useState } from "react";
import Chip from "../../components/Chip/Chip";
import Snackbar from "../../components/snackbar/Snackbar";
import Typography from "../../components/Typography/Typography";
import DataGrid from "../../components/table/DataGrid";
import { useSnackbar } from "../../hooks/useSnackbar";
import Box from "../../styled/styled";
import type { FilterType } from "../../types/types";
import { stringAvatar } from "../../utils/avatar-short-name";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";
import type { ChipType } from "../../types/types";
import ActionButton from "./ActionButton";
import { mockData } from "./config";
import { StaffHeader } from "./StaffHeader";

type StatusType = "all-status" | "active" | "inactive" | "pending";

const statusMenuItems = ["All Status", "Active", "Inactive"];
const roleMenuItems = [
	"All roles",
	"Admin",
	"Tour Guide",
	"Driver",
	"Booking Agent",
	"Hotel Manager",
	"Restaurant Manager",
	"Marketting Officer",
];

interface RowDataType {
	id: number;
	staffMember: string;
	email: string;
	phone: string;
	role: string;
	status: string;
	joinedDate: string;
}
const StaffManagement = () => {
	const { reset } = useForm();

	console.log("staff page re-render");

	const addStaffMembers = (data: any) => {
		setRowsData((prev) => [
			...prev,
			{
				id: rowsData.length + 1,
				staffMember: data.fullName,
				email: data.email,
				phone: data.phoneNo,
				role: data.role.charAt(0).toUpperCase() + data.role.slice(1),
				status: data.status.charAt(0).toUpperCase() + data.status.slice(1),
				joinedDate: data.joinedDate,
			},
		]);

		setBackup((prev) => [
			...prev,
			{
				id: rowsData.length + 1,
				staffMember: data.fullName,
				email: data.email,
				phone: data.phoneNo,
				role: data.role.charAt(0).toUpperCase() + data.role.slice(1),
				status: data.status.charAt(0).toUpperCase() + data.status.slice(1),
				joinedDate: data.joinedDate,
			},
		]);

		initializeSnackbar(true, "Staff  Added successfully", 4000, "success");
		reset();
	};

	const initialFilter: FilterType = {
		searchFilter: {
			value: "",
			placeholder: "Search by name or email",
		},
		filters: [
			{
				id: "role",
				label: "Role",
				defaultValue: "all role",
				options: [
					{ id: "1", value: "all role", display: "All Roles" },
					{ id: "2", value: "admin", display: "Admin" },
					{ id: "3", value: "tour guide", display: "Tour Guide" },
					{ id: "4", value: "driver", display: "Driver" },
					{ id: "5", value: "hotel manager", display: "Hotel Manager" },
				],
			},
			{
				id: "status",
				label: "Status",
				defaultValue: "all status",
				options: [
					{ id: "1", value: "all status", display: "All Status" },
					{ id: "2", value: "active", display: "Active" },
					{ id: "3", value: "inactive", display: "Inactive" },
				],
			},
		],
	};

	const [filter, setFilter] = useState<FilterType>(initialFilter);

	const { snackbar, setSnackbar, initializeSnackbar } = useSnackbar();

	const [paginationModel, setPaginationModel] = useState({
		pageSize: 8,
		page: 0,
	});

	const [rowsData, setRowsData] = useState<RowDataType[]>(mockData);

	const [backup, setBackup] = useState(rowsData);

	function submitEditForm(formData: FormData, id: number) {
		const fullName = String(formData.get("fullName"));
		const email = String(formData.get("email"));
		const phoneNo = String(formData.get("phoneNo"));
		const role = String(formData.get("role"));
		const status = String(formData.get("status"));
		const joinedDate = String(formData.get("joinedDate"));
		const password = String(formData.get("password"));

		setRowsData((prev) =>
			prev.map((member) =>
				member.id === id
					? {
							...member,
							staffMember: fullName,
							email: email,
							phone: phoneNo,
							role: role,
							status: status,
							joinedDate: joinedDate,
						}
					: member,
			),
		);
		initializeSnackbar(true, "Form Edit successfully", 3000, "success");
	}

	function deleteStaff(id: number) {
		const restMembers = rowsData.filter((cur) => {
			if (cur.id !== id) {
				return cur;
			}
			return null;
		});

		setRowsData(restMembers);
		initializeSnackbar(true, "Staff Deleted Successfully", 4000, "success");
	}

	const columns: GridColDef<(typeof rowsData)[number]>[] = [
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
			valueGetter: (value: string) => value ?? "",
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
			renderCell: (params: GridRenderCellParams<any | string>) => {
				if (!params.value) return null;
				return (
					<Chip
						variant={String(params.value).toLowerCase() as ChipType}
						label={params.value}
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
					variant={String(params.value).toLowerCase() as ChipType}
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
				<ActionButton
					{...params}
					rowId={params.id}
					rowData={params.row}
					roleMenuItems={roleMenuItems}
					statusMenuItems={statusMenuItems}
					onEdit={submitEditForm}
					onDelete={deleteStaff}
				/>
			),
		},
	];

	useEffect(() => {
		const roleFilter = filter.filters.find((f) => f.id === "role");
		const statusFilter = filter.filters.find((f) => f.id === "status");
		const filtered = backup.filter((row) => {
			const searchMatch =
				filter.searchFilter.value === "" ||
				row.staffMember
					.toLowerCase()
					.includes(filter.searchFilter.value.toLowerCase()) ||
				row.email
					.toLowerCase()
					.includes(filter.searchFilter.value.toLowerCase());

			const roleMatch =
				!roleFilter ||
				roleFilter.defaultValue === "all role" ||
				row.role.toLowerCase() === roleFilter.defaultValue.toLowerCase();

			const statusMatch =
				!statusFilter ||
				statusFilter.defaultValue === "all status" ||
				row.status.toLowerCase() === statusFilter.defaultValue.toLowerCase();

			return searchMatch && roleMatch && statusMatch;
		});

		setRowsData(filtered);
	}, [filter, backup]);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "1.5rem",
				marginTop: 3,
			}}
		>
			<Snackbar
				message={snackbar.message}
				variant="filled"
				severity={snackbar.severity}
				duration={snackbar.duration}
				open={snackbar.isOpen}
				setOpen={setSnackbar}
			></Snackbar>

			<StaffHeader
				onStaffAdd={addStaffMembers}
				dataSize={rowsData.length}
				roleMenuItems={roleMenuItems}
				statusMenuItems={statusMenuItems}
			/>

			<DataGrid
				columns={columns}
				rows={rowsData}
				filter={filter}
				setFilter={setFilter}
				columnHeaderHeight={56}
				rowHeight={65}
				pagination
				paginationModel={paginationModel}
				onPaginationModelChange={setPaginationModel}
				disableColumnSorting
				disableColumnFilter
				disableColumnResize
				disableColumnSelector
				disableColumnMenu
				disableRowSelectionOnClick
			/>
		</Box>
	);
};

export default memo(StaffManagement);
