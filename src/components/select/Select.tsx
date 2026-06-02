import type { SelectChangeEvent } from "@mui/material";
import { FormControl, Select as MuiSelect } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";

interface SelectProp {
	id: string;
	value: string | number | undefined;
	label: string;
	onChange: (event: SelectChangeEvent<string | number>) => void;
	children: React.ReactNode;
}
export default function Select({
	id,
	value,
	label,
	onChange,
	children,
	...props
}: SelectProp) {
	return (
		<FormControl>
			<InputLabel>{label}</InputLabel>
			<MuiSelect
				{...props}
				id={id}
				value={value}
				label={label}
				onChange={onChange}
			>
				{children}
			</MuiSelect>
		</FormControl>
	);
}
