import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { lazy, memo, Suspense, useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Chip from "../../components/Chip/Chip";
import Snackbar from "../../components/snackbar/Snackbar";
import Typography from "../../components/Typography/Typography";
import { useSnackbar } from "../../hooks/useSnackbar";
import Box from "../../styled/styled";
import type {
	ChipType,
	FilterType,
	RestaurantTableType,
} from "../../types/types";
import ActionButton from "./ActionButton";
import { mockData } from "./config";
import { RestaurantHeader } from "./RestaurantHeader";

const DataGrid = lazy(() => import("../../components/table/DataGrid"));

const cuisineMenuItems = [
	"All Cuisines",
	"Thai",
	"Chinese",
	"Italian",
	"Japanese",
	"Mexican",
	"Indian",
];
const statusMenuItems = ["All", "Active", "Inactive", "Pending"];

import { Loader } from "../../components/Loader";
import { initialFilter } from "./filterConfig";

const Restaurants = () => {
	const { reset } = useForm();
	const [rowsData, setRowsData] = useState<RestaurantTableType[]>(mockData);

	const [filter, setFilter] = useState<FilterType>(initialFilter);

	const { snackbar, setSnackbar, initializeSnackbar } = useSnackbar();

	const [paginationModel, setPaginationModel] = useState({
		pageSize: 8,
		page: 0,
	});

	const addRestaurant = useCallback(
		(data: any) => {
			setRowsData((prev) => [
				...prev,
				{
					id: prev.length ? Math.max(...prev.map((r) => r.id)) + 1 : 1,
					restaurant: {
						icon: "🍽️",
						text: data.restaurantName,
						menuItemsCount: Number(data.menuItemsCount) || 0,
					},
					location: data.location,
					contact: data.contact,
					cuisine: data.cuisine,
					openingHours: {
						open: data.openingTime,
						close: data.closingTime,
					},
					status: data.status,
				},
			]);

			initializeSnackbar(
				true,
				"Restaurant Added successfully",
				4000,
				"success",
			);
			reset();
		},
		[initializeSnackbar, reset],
	);

	const submitEditForm = useCallback(
		(formData: any, id: number) => {
			setRowsData((prev) =>
				prev.map((restaurant) =>
					restaurant.id === id
						? {
								...restaurant,
								restaurant: {
									...restaurant.restaurant,
									text: formData.restaurantName,
									menuItemsCount:
										Number(formData.menuItemsCount) ||
										restaurant.restaurant.menuItemsCount,
								},
								location: formData.location,
								contact: formData.contact,
								cuisine: formData.cuisine,
								openingHours: {
									open: formData.openingTime,
									close: formData.closingTime,
								},
								status: formData.status,
							}
						: restaurant,
				),
			);
			initializeSnackbar(
				true,
				"Restaurant Edited successfully",
				3000,
				"success",
			);
		},
		[initializeSnackbar],
	);

	const deleteRow = useCallback(
		(id: number) => {
			setRowsData((prevRows) => {
				const restMembers = prevRows.filter((cur) => cur.id !== id);

				return restMembers;
			});
			initializeSnackbar(
				true,
				"Restaurant Deleted Successfully",
				4000,
				"success",
			);
		},
		[initializeSnackbar],
	);

	const columns: GridColDef<(typeof rowsData)[number]>[] = useMemo(
		() => [
			{
				field: "restaurant",
				headerName: "RESTAURANT",
				type: "string",
				headerClassName: "super-app-theme--header",
				minWidth: 200,
				flex: 1.2,
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
						RESTAURANT
					</Typography>
				),
				display: "flex",
				renderCell: (params: GridRenderCellParams<RestaurantTableType>) => {
					if (!params.value) {
						return null;
					}
					const icon = params.value?.icon;
					const text = params.value?.text;
					const menuItemsCount = params.value?.menuItemsCount;
					return (
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 2,
							}}
						>
							<Box
								sx={{
									width: 36,
									height: 36,
									borderRadius: "50%",
									backgroundColor: "#F3E8FF",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: 18,
								}}
							>
								{icon}
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
								}}
							>
								<Typography
									variant="h3"
									sx={{
										fontSize: 13,
										whiteSpace: "pre-wrap",
									}}
								>
									{text}
								</Typography>
								<Typography
									variant="caption"
									sx={{
										color: "#888888",
									}}
								>
									{menuItemsCount} menu items
								</Typography>
							</Box>
						</Box>
					);
				},
				editable: false,
			},
			{
				field: "location",
				headerName: "LOCATION",
				headerClassName: "super-app-theme--header",
				minWidth: 110,
				editable: false,
				display: "flex",
				flex: 1,
				valueGetter: (value: string) => value ?? "",
				renderHeader: () => (
					<Typography
						variant="body2"
						sx={{
							color: "#888888",
							fontWeight: 600,
						}}
					>
						LOCATION
					</Typography>
				),
				renderCell: (params: GridRenderCellParams<RestaurantTableType>) => {
					if (!params.value) return "";
					return (
						<Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
							<PlaceIcon sx={{ width: 18, height: 18, color: "gray" }} />
							<Typography variant="body2">{params.value}</Typography>
						</Box>
					);
				},
			},
			{
				field: "contact",
				headerName: "CONTACT",
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
						CONTACT
					</Typography>
				),
			},
			{
				field: "cuisine",
				headerName: "CUISINE",
				headerClassName: "super-app-theme--header",
				minWidth: 110,
				flex: 1,
				display: "flex",
				sortable: false,
				renderHeader: () => (
					<Typography
						variant="body2"
						sx={{
							color: "#888888",
							fontWeight: 600,
						}}
					>
						CUISINE
					</Typography>
				),
				renderCell: (params: GridRenderCellParams<RestaurantTableType>) => {
					if (!params.value) return null;
					const value = String(params.value);
					// const style = getCuisineChipStyle(params.value);
					return (
						<Chip chipType={value.toLowerCase() as ChipType} label={value} />
					);
				},
			},
			{
				field: "openingHours",
				headerName: "OPENING HOURS",
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
						OPENING HOURS
					</Typography>
				),
				display: "flex",
				minWidth: 170,
				flex: 1.2,
				sortable: false,
				renderCell: (params: GridRenderCellParams<RestaurantTableType>) => {
					if (!params.value) return null;
					return (
						<Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
							<AccessTimeIcon sx={{ width: 18, height: 18, color: "gray" }} />
							<Typography variant="body2">
								{params.value.open} &ndash; {params.value.close}
							</Typography>
						</Box>
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
				renderCell: (params: GridRenderCellParams<RestaurantTableType>) => {
					if (!params.value) return null;
					return (
						<Chip
							chipType={String(params.value).toLowerCase() as any}
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
						cuisineMenuItems={cuisineMenuItems.slice(1)}
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
		const cuisineFilter = filter.filters.find((f) => f.id === "cuisine");
		const statusFilter = filter.filters.find((f) => f.id === "status");
		return rowsData.filter((row) => {
			const searchMatch =
				filter.searchFilter.value === "" ||
				row.restaurant.text
					.toLowerCase()
					.includes(filter.searchFilter.value.toLowerCase()) ||
				row.location
					.toLowerCase()
					.includes(filter.searchFilter.value.toLowerCase());

			const cuisineMatch =
				!cuisineFilter ||
				cuisineFilter.defaultValue === "all cuisines" ||
				row.cuisine.toLowerCase() === cuisineFilter.defaultValue.toLowerCase();

			const statusMatch =
				!statusFilter ||
				statusFilter.defaultValue === "all" ||
				row.status.toLowerCase() === statusFilter.defaultValue.toLowerCase();

			return searchMatch && cuisineMatch && statusMatch;
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

			<RestaurantHeader
				onRestaurantAdd={addRestaurant}
				dataSize={rowsData.length}
				cuisineMenuItems={cuisineMenuItems}
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

export default memo(Restaurants);
