import MuiPagination from "@mui/material/Pagination";
import type { TablePaginationProps } from "@mui/material/TablePagination";
import {
	gridPageCountSelector,
	useGridApiContext,
	useGridSelector,
} from "@mui/x-data-grid";
export default function Pagination({
	page,
	onPageChange,
	className,
}: Pick<TablePaginationProps, "page" | "onPageChange" | "className">) {
	const apiRef = useGridApiContext();
	const pageCount = useGridSelector(apiRef, gridPageCountSelector);

	return (
		<MuiPagination
			color="primary"
			className={className}
			count={pageCount}
			page={page + 1}
			onChange={(event, newPage) => {
				onPageChange(event as any, newPage - 1);
			}}
		/>
	);
}
