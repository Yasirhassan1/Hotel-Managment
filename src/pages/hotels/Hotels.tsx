import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { lazy, memo, Suspense, useCallback, useMemo, useState } from "react";
import Chip from "../../components/Chip/Chip";
import Snackbar from "../../components/snackbar/Snackbar";
import Typography from "../../components/Typography/Typography";
import { useSnackbar } from "../../hooks/useSnackbar";
import Box from "../../styled/styled";
import type { FilterType } from "../../types/types";
import type { HotelTableType } from "../../types/types";
import PlaceIcon from "@mui/icons-material/Place";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import StarIcon from "@mui/icons-material/Star";
import { useForm } from "react-hook-form";
import ActionButton from "./ActionButton";
import { mockData } from "./config";
import { HotelHeader } from "./HotelHeader";

const DataGrid = lazy(() => import("../../components/table/DataGrid"));

const statusMenuItems = ["All", "Active", "Inactive", "Pending"];
const ratingMenuItems = ["5", "4", "3", "2", "1"];
const STAR_KEYS = ["star-1", "star-2", "star-3", "star-4", "star-5"];

import { Loader } from "../../components/Loader";
import { initialFilter } from "./filterConfig";

const Hotels = () => {
	const { reset } = useForm();
	const [rowsData, setRowsData] = useState<HotelTableType[]>(mockData);

	const [filter, setFilter] = useState<FilterType>(initialFilter);

	const { snackbar, setSnackbar, initializeSnackbar } = useSnackbar();

	const [paginationModel, setPaginationModel] = useState({
		pageSize: 8,
		page: 0,
	});

	const addHotel = useCallback(
		(data: any) => {
			setRowsData((prev) => [
				...prev,
				{
					id: rowsData.length + 1,
					hotel: {
						icon: "🏨",
						text: data.hotelName,
					},
					location: data.location,
					contact: data.contact,
					rooms: Number(data.rooms),
					priceRange: {
						min: Number(data.priceMin),
						max: Number(data.priceMax),
					},
					rating: Number(data.rating),
					status: data.status,
				},
			]);

			initializeSnackbar(true, "Hotel Added successfully", 4000, "success");
			reset();
		},
		[rowsData, initializeSnackbar, reset],
	);

	const submitEditForm = useCallback(
		(formData: any, id: number) => {
			setRowsData((prev) =>
				prev.map((hotel) =>
					hotel.id === id
						? {
								...hotel,
								hotel: {
									...hotel.hotel,
									text: formData.hotelName,
								},
								location: formData.location,
								contact: formData.contact,
								rooms: Number(formData.rooms),
								priceRange: {
									min: Number(formData.priceMin),
									max: Number(formData.priceMax),
								},
								rating: Number(formData.rating),
								status: formData.status,
							}
						: hotel,
				),
			);
			initializeSnackbar(true, "Hotel Edited successfully", 3000, "success");
		},
		[initializeSnackbar],
	);

	const deleteRow = useCallback(
		(id: number) => {
			setRowsData((prevRows) => {
				const restMembers = prevRows.filter((cur) => cur.id !== id);

				return restMembers;
			});
			initializeSnackbar(true, "Hotel Deleted Successfully", 4000, "success");
		},
		[initializeSnackbar],
	);

	const columns: GridColDef<(typeof rowsData)[number]>[] = useMemo(
		() => [
			{
				field: "hotel",
				headerName: "HOTEL",
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
						HOTEL
					</Typography>
				),
				display: "flex",
				renderCell: (params: GridRenderCellParams<HotelTableType>) => {
					if (!params.value) {
						return null;
					}
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
							<Box
								sx={{
									width: 36,
									height: 36,
									borderRadius: "50%",
									backgroundColor: "#EAF2FF",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: 18,
								}}
							>
								{icon}
							</Box>
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
				field: "location",
				headerName: "LOCATION",
				headerClassName: "super-app-theme--header",
				minWidth: 120,
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
				renderCell: (params: GridRenderCellParams<HotelTableType>) => {
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
				field: "rooms",
				headerName: "ROOMS",
				headerClassName: "super-app-theme--header",
				minWidth: 60,
				flex: 1,
				valueGetter: (value: number) => value ?? "",
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
						ROOMS
					</Typography>
				),
				renderCell: (params: GridRenderCellParams<HotelTableType>) => {
					if (!params.value) return null;
					return (
						<Box
							sx={{
								display: "flex",
								gap: "4px",
								alignItems: "center",
							}}
						>
							<MeetingRoomIcon
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
				field: "priceRange",
				headerName: "PRICE RANGE",
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
						PRICE RANGE
					</Typography>
				),
				display: "flex",
				minWidth: 110,
				flex: 1,
				sortable: false,
				renderCell: (params: GridRenderCellParams<HotelTableType>) => {
					if (!params.value) return null;
					return (
						<Typography variant="body1" sx={{ fontWeight: 600 }}>
							${params.value.min} - ${params.value.max}
						</Typography>
					);
				},
			},
			{
				field: "rating",
				headerName: "RATING",
				headerClassName: "super-app-theme--header",
				renderHeader: () => (
					<Typography
						variant="body2"
						sx={{
							color: "#888888",
							fontWeight: 600,
						}}
					>
						RATING
					</Typography>
				),
				display: "flex",
				minWidth: 110,
				flex: 1,
				sortable: false,
				renderCell: (params: GridRenderCellParams<HotelTableType>) => {
					if (!params.value) return null;
					return (
						<Box sx={{ display: "flex" }}>
							{STAR_KEYS.map((starKey, i) => (
								<StarIcon
									key={starKey}
									sx={{
										width: 18,
										height: 18,
										color: i < params.value ? "#FFB400" : "#E0E0E0",
									}}
								/>
							))}
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
				renderCell: (params: GridRenderCellParams<HotelTableType>) => {
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
						statusMenuItems={statusMenuItems.slice(1)}
						ratingMenuItems={ratingMenuItems}
						onEdit={submitEditForm}
						onDelete={deleteRow}
					/>
				),
			},
		],
		[deleteRow, submitEditForm],
	);

	const filteredRows = useMemo(() => {
		const locationFilter = filter.filters.find((f) => f.id === "location");
		const ratingFilter = filter.filters.find((f) => f.id === "rating");
		const statusFilter = filter.filters.find((f) => f.id === "status");
		return rowsData.filter((row) => {
			const searchMatch =
				filter.searchFilter.value === "" ||
				row.hotel.text
					.toLowerCase()
					.includes(filter.searchFilter.value.toLowerCase()) ||
				row.location
					.toLowerCase()
					.includes(filter.searchFilter.value.toLowerCase());

			const locationMatch =
				!locationFilter ||
				locationFilter.defaultValue === "all locations" ||
				row.location.toLowerCase() ===
					locationFilter.defaultValue.toLowerCase();

			const ratingMatch =
				!ratingFilter ||
				ratingFilter.defaultValue === "all ratings" ||
				String(row.rating) === ratingFilter.defaultValue;

			const statusMatch =
				!statusFilter ||
				statusFilter.defaultValue === "all" ||
				row.status.toLowerCase() === statusFilter.defaultValue.toLowerCase();

			return searchMatch && locationMatch && ratingMatch && statusMatch;
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

			<HotelHeader
				onHotelAdd={addHotel}
				dataSize={rowsData.length}
				statusMenuItems={statusMenuItems}
				ratingMenuItems={ratingMenuItems}
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

export default memo(Hotels);