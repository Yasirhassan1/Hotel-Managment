import SearchIcon from "@mui/icons-material/Search";
import { gridClasses } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import type {
	GridFilterModel,
	DataGridProps as MuiDataGridProps,
} from "@mui/x-data-grid";
import { DataGrid as MuiDataGrid } from "@mui/x-data-grid";
import React, { memo, type SetStateAction, useEffect } from "react";
import Box from "../../styled/styled";
import TextField from "../TextFields/TextField";
import Pagination from "./Pagination";

interface DataGridProps extends MuiDataGridProps {
	search: string;
	setSearch: React.Dispatch<SetStateAction<string>>;
	filters: GridFilterModel;
	setFilters: React.Dispatch<SetStateAction<GridFilterModel>>;
}

const DataGrid = ({
	search,
	setSearch,
	filters,
	setFilters,
	...props
}: DataGridProps) => {
	useEffect(() => {
		const delayInputTimeoutId = setTimeout(() => {
			setFilters((prev) => ({
				...prev,

				items: prev.items.map((item) => {
					if (item.field === "staffMember") {
						return { ...item, value: search };
					}

					if (item.field === "email") {
						return { ...item, value: search };
					}
					return item;
				}),
			}));
		}, 1000);

		return () => clearTimeout(delayInputTimeoutId);
	}, [search, setFilters]);

	function updateFilter(e: any, field: string) {
		const value = String(e.target.value).toLowerCase();

		setFilters((prev) => ({
			...prev,

			items: prev.items.map((item) => {
				if (item.field === field) {
					return { ...item, value: value };
				}

				return item;
			}),
		}));
	}

	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				flexDirection: "column",

				gap: 3,
			}}
		>
			<Box
				variant="shadow"
				sx={({ palette }) => ({
					display: "flex",
					gap: 2,
					bgcolor: palette.background.paper,
					padding: 2,
					borderRadius: 5,
				})}
			>
				<TextField
					id={`input`}
					onChange={(e) => setSearch(e.target.value)}
					sx={{
						flex: 1,

						borderRadius: "40px",
						"& .MuiInputBase-root": {
							height: "40px",
						},
					}}
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						},
					}}
					variant="rounded-corner"
					placeholder="Search"
				/>
				<Select
					label="Role"
					id="jdf"
					value={filters.items[0]?.value}
					onChange={(e) => updateFilter(e, "role")}
					size="small"
					sx={{
						borderRadius: "10px",
					}}
				>
					<MenuItem value="all-role">All Roles</MenuItem>
					<MenuItem value="admin">Admin</MenuItem>
					<MenuItem value="tour guide">Tour Guide</MenuItem>
					<MenuItem value="driver">Driver</MenuItem>
				</Select>

				<Select
					label="Status"
					id="jj"
					value={filters.items[1]?.value}
					onChange={(e) => updateFilter(e, "status")}
					size="small"
					sx={{
						borderRadius: "10px",
					}}
				>
					<MenuItem value="all-status">All Status</MenuItem>
					<MenuItem value="active">Active</MenuItem>
					<MenuItem value="inactive">Inactive</MenuItem>
					<MenuItem value="pending">Pending</MenuItem>
				</Select>
			</Box>

			<Box
				variant="shadow"
				sx={({ palette }) => ({
					display: "flex",
					flexDirection: "column",
					gap: 2,
					borderRadius: 6,
					pb: 3,
					bgcolor: palette.color.tableHead,
					alignItems: "center",
				})}
			>
				<MuiDataGrid
					{...props}
					sx={{
						width: "100%",
						borderRadius: 6,
						[`& .${gridClasses.root}:focus, & .${gridClasses.root}:focus-within`]:
							{
								outline: "none",
							},
						"& .super-app-theme--header": {
							backgroundColor: "palatte.colors.tableHead",
						},

						"& .MuiDataGrid-row": {
							borderBottom: "1px solid #0000001a",
						},
					}}
					slotProps={{
						basePagination: {
							material: {
								ActionsComponent: Pagination,
							},
							style: {
								display: "flex",
								justifyContent: "center",
							},
						},
					}}
				></MuiDataGrid>
			</Box>
		</Box>
	);
};

export default memo(DataGrid);
