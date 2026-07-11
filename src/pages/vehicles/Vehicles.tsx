import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { lazy, memo, Suspense, useCallback, useMemo, useState } from "react";
import Chip from "../../components/Chip/Chip";
import Snackbar from "../../components/snackbar/Snackbar";
import Typography from "../../components/Typography/Typography";
import { useSnackbar } from "../../hooks/useSnackbar";
import Box from "../../styled/styled";
import type {
	CarType,
	ChipType,
	FilterType,
	VehicleTableType,
} from "../../types/types";
import "react-phone-input-2/lib/style.css";
import GroupIcon from "@mui/icons-material/Group";
import { useForm } from "react-hook-form";
import { StyledAvatar } from "../../components/Avatar/Avatar";
import ActionButton from "./ActionButton";
import { mockData } from "./config";
import { StaffHeader } from "./StaffHeader";

const DataGrid = lazy(() => import("../../components/table/DataGrid"));

const statusMenuItems = ["All Status", "Available", "Unavailable", "Pending"];

import { Loader } from "../../components/Loader";
import { initialFilter } from "./filterConfig";

const vehicleTypeMenuItems = [
	"All Types",
	"Sedan",
	"Van",
	"Minibus",
	"SUV",
	"Bus",
];

const Vehicles = () => {
	const { reset } = useForm();
	const [rowsData, setRowsData] = useState<VehicleTableType[]>(mockData);

	const [filter, setFilter] = useState<FilterType>(initialFilter);

	const { snackbar, setSnackbar, initializeSnackbar } = useSnackbar();

	const [paginationModel, setPaginationModel] = useState({
		pageSize: 8,
		page: 0,
	});

	const addVehicle = useCallback(
		(data: any) => {
			setRowsData((prev) => [
				...prev,
				{
					id: rowsData.length + 1,
					vehicle: {
						icon: "🚗",
						text: data.vehicleName,
					},
					vehicleType: data.vehicleType,
					registrationNo: data.registrationNo,
					capacity: data.capacity,
					driver: data.driverName,
					priceDay: data.priceDay,
					status: data.status,
				},
			]);

			initializeSnackbar(true, "Staff  Added successfully", 4000, "success");
			reset();
		},
		[rowsData, initializeSnackbar, reset],
	);

	const submitEditForm = useCallback(
		(formData: any, id: number) => {
			setRowsData((prev) =>
				prev.map((vehicle) =>
					vehicle.id === id
						? {
								...vehicle,
								vehicle: {
									...vehicle.vehicle,
									text: formData.vehicleName,
								},
								vehicleType: formData.vehicleType,
								registrationNo: formData.registrationNo,
								capacity: formData.capacity,
								driver: formData.driverName,
								priceDay: formData.priceDay,
								status: formData.status,
							}
						: vehicle,
				),
			);
			initializeSnackbar(true, "Form Edit successfully", 3000, "success");
		},
		[initializeSnackbar],
	);

	const deleteRow = useCallback(
		(id: number) => {
			setRowsData((prevRows) => {
				const restMembers = prevRows.filter((cur) => cur.id !== id);

				return restMembers;
			});
			initializeSnackbar(true, "Vehicle Deleted Successfully", 4000, "success");
		},
		[initializeSnackbar],
	);

	const columns: GridColDef<(typeof rowsData)[number]>[] = useMemo(
		() => [
			{
				field: "vehicle",
				headerName: "VEHICLE",
				type: "string",
				headerClassName: "super-app-theme--header",
				minWidth: 180,
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
						VEHICLE
					</Typography>
				),
				display: "flex",
				renderCell: (params: GridRenderCellParams<VehicleTableType>) => {
					if (!params.value) {
						return null;
					}
					const carType = params.row.vehicleType;
					const icon = params.value?.icon;
					const text = params.value?.text;
					return (
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 2,
							}}
						>
							<StyledAvatar carType={String(carType).toLowerCase() as CarType}>
								{icon}
							</StyledAvatar>
							{/* <Avatar sx={{ bgcolor:  "green"}} >{icon}</Avatar> */}
							<Typography
								variant="h3"
								sx={{
									fontSize: 13,
									whiteSpace: "pre-wrap",
								}}
							>
								{text}
							</Typography>
						</Box>
					);
				},
				editable: false,
			},
			{
				field: "vehicleType",
				headerName: "TYPE",
				headerClassName: "super-app-theme--header",
				minWidth: 100,
				editable: false,
				display: "flex",
				flex: 1,
				valueGetter: (value: ChipType) => value ?? "",

				renderHeader: () => (
					<Typography
						variant="body2"
						sx={{
							color: "#888888",
							fontWeight: 600,
						}}
					>
						TYPE
					</Typography>
				),
				renderCell: (params: GridRenderCellParams<VehicleTableType>) => {
					if (!params.value) return "";

					return (
						<Chip
							chipType={String(params.value).toLowerCase() as ChipType}
							label={params.value}
						/>
					);
				},
			},
			{
				field: "registrationNo",
				headerName: "REGISTRATION",
				type: "string",
				headerClassName: "super-app-theme--header",
				minWidth: 120,
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
						REGISTRATION
					</Typography>
				),
			},
			{
				field: "capacity",
				headerName: "CAPACITY",
				headerClassName: "super-app-theme--header",
				minWidth: 40,
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
						CAPACITY
					</Typography>
				),
				renderCell: (params: GridRenderCellParams<VehicleTableType>) => {
					if (!params.value) return null;
					return (
						<Box
							sx={{
								display: "flex",
								gap: "4px",
								alignItems: "center",
							}}
						>
							<GroupIcon
								sx={{
									width: 18,
									height: 18,
									color: "gray",
								}}
							/>
							<Typography variant="body2">{params.value}</Typography>
						</Box>
					);
				},
			},
			{
				field: "driver",
				headerName: "DRIVER",
				headerClassName: "super-app-theme--header",
				minWidth: 100,
				valueGetter: (value) => value ?? "",
				renderHeader: () => (
					<Typography
						variant="body2"
						sx={{
							color: "#888888",
							fontWeight: 600,
						}}
					>
						DRIVER
					</Typography>
				),

				sortable: false,
				flex: 1,
				renderCell: (params: GridRenderCellParams<VehicleTableType>) => (
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							height: "100%",
						}}
					>
						<Typography
							variant="body1"
							sx={{
								whiteSpace: "pre-wrap",
							}}
						>
							{params.value}
						</Typography>
					</Box>
				),
			},
			{
				field: "priceDay",
				headerName: "PRICE/DAY",
				headerClassName: "super-app-theme--header",
				renderHeader: () => (
					<Typography
						variant="body2"
						sx={{
							color: "#888888",
							fontWeight: 600,
						}}
					>
						PRICE/DAY
					</Typography>
				),
				display: "flex",
				minWidth: 60,
				flex: 1,
				renderCell: (params: GridRenderCellParams<VehicleTableType>) => {
					if (!params.value) return null;
					return (
						<Typography
							variant="body1"
							sx={{
								color: "green",
								fontWeight: 600,
							}}
						>
							${params.value}
						</Typography>
					);
				},
			},
			{
				field: "status",
				headerName: "STATUS",
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
						STATUS
					</Typography>
				),
				display: "flex",
				minWidth: 100,
				flex: 1,
				renderCell: (params: GridRenderCellParams<VehicleTableType>) => {
					if (!params.value) return null;
					return (
						<Chip
							chipType={String(params.value).toLowerCase() as ChipType}
							label={params.value}
						/>
					);
				},
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
						vehicleTypeMenuItems={vehicleTypeMenuItems.slice(1)}
						statusMenuItems={statusMenuItems.slice(1)}
						onEdit={submitEditForm}
						onDelete={deleteRow}
					/>
				),
			},
		],
		[deleteRow, submitEditForm],
	);

	const filteredRows = useMemo(() => {
		const vehicleTypeFilter = filter.filters.find(
			(f) => f.id === "vehicleType",
		);
		const statusFilter = filter.filters.find((f) => f.id === "status");
		return rowsData.filter((row) => {
			const searchMatch =
				filter.searchFilter.value === "" ||
				row.vehicle.text
					.toLowerCase()
					.includes(filter.searchFilter.value.toLowerCase()) ||
				row.vehicleType
					.toLowerCase()
					.includes(filter.searchFilter.value.toLowerCase());

			const vehicleMatch =
				!vehicleTypeFilter ||
				vehicleTypeFilter.defaultValue === "all types" ||
				row.vehicleType.toLowerCase() ===
					vehicleTypeFilter.defaultValue.toLowerCase();

			const statusMatch =
				!statusFilter ||
				statusFilter.defaultValue === "all status" ||
				row.status.toLowerCase() === statusFilter.defaultValue.toLowerCase();

			return searchMatch && vehicleMatch && statusMatch;
		});
	}, [rowsData, filter]);

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
				onVehicleAdd={addVehicle}
				dataSize={rowsData.length}
				vehicleTypeMenuItems={vehicleTypeMenuItems}
				statusMenuItems={statusMenuItems}
			/>
			<Suspense fallback={<Loader />}>
				<DataGrid
					columns={columns}
					rows={filteredRows}
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
			</Suspense>
		</Box>
	);
};

export default memo(Vehicles);
