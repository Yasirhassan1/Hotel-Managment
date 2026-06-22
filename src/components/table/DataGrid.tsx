import { gridClasses } from "@mui/material";
import type { DataGridProps as MuiDataGridProps } from "@mui/x-data-grid";
import { DataGrid as MuiDataGrid } from "@mui/x-data-grid";
import React, { memo, type SetStateAction } from "react";
import Box from "../../styled/styled";
import type { FilterType } from "../../types/types";
import Filterbar from "../Filterbar/FilterBar";
import Pagination from "./Pagination";

interface DataGridProps extends MuiDataGridProps {
	filter: FilterType;
	setFilter: React.Dispatch<SetStateAction<FilterType>>;
}

const DataGrid = ({ filter, setFilter, ...props }: DataGridProps) => {
	console.log("data grid re-render");
	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				gap: 3,
			}}
		>
			<Filterbar filter={filter} setFilter={setFilter} />

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
