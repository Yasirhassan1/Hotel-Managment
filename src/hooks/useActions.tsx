import type { GridRowId } from "@mui/x-data-grid";
import { useState } from "react";

interface RowDataType {
	id: GridRowId | undefined;
	staffMember: string;
	email: string;
	phone: string;
	role: string;
	status: string;
	joinedDate: string;
}
export function useActions(rowsData: RowDataType[]) {
	const [tableData, setTableData] = useState(rowsData);

	function create(data: any) {
		setTableData((prev) => [
			...prev,
			{
				id: tableData.length + 1,
				staffMember: data.fullName,
				email: data.email,
				phone: data.phoneNo,
				role: data.role.charAt(0).toUpperCase() + data.role.slice(1),
				status: data.status.charAt(0).toUpperCase() + data.status.slice(1),
				joinedDate: data.joinedDate,
			},
		]);
	}

	function update(rowId: number, data: RowDataType) {
		setTableData((prev) =>
			prev.map((member) =>
				member.id === rowId
					? {
							...member,
							staffMember: data.staffMember,
							email: data.email,
							phone: data.phone,
							role: data.role,
							status: data.status,
							joinedDate: data.joinedDate,
						}
					: member,
			),
		);
	}

	return { create, update };
}
