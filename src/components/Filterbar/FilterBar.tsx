import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { memo, useCallback, useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import type { FilterBarProps } from "../../types/types";
import TextField from "../TextFields/TextField";

const FilterBar = ({ filter, setFilter }: FilterBarProps) => {
	const [searchTerm, setSearchTerm] = useState("");
	const debounceValue = useDebounce(searchTerm, 1000);

	useEffect(() => {
		setFilter((prev) => ({
			...prev,
			searchFilter: { ...prev.searchFilter, value: debounceValue },
		}));
	}, [debounceValue, setFilter]);

	// useEffect(()=>{
	// 	const timer = setTimeout(() => {
	// 		setFilter((prev) => ({
	// 					...prev,
	// 					searchFilter: { ...prev.searchFilter, value: searchTerm },
	// 				}))
	// 	}, 2000);

	// 	return () => {
	// 		clearTimeout(timer);
	// 	};
	// }, [searchTerm])
	console.log("filter bar re-render");

	const handleFilterChange = useCallback(
		(filterId: string, newValue: string) => {
			setFilter((prev) => ({
				...prev,
				filters: prev.filters.map((f) =>
					f.id === filterId ? { ...f, defaultValue: newValue } : f,
				),
			}));
		},
		[setFilter],
	);

	const handleReset = useCallback(() => {
		setFilter((prev) => ({
			...prev,
			searchFilter: {
				...prev.searchFilter,
				value: "",
			},
			filters: prev.filters.map((f) => ({
				...f,
				defaultValue: f.options[0]?.value ?? "",
			})),
		}));
	}, [setFilter]);

	return (
		<Box
			sx={({ palette }) => ({
				display: "flex",
				alignItems: "center",
				flexWrap: "wrap",
				gap: 2,
				bgcolor: palette.background.paper,
				padding: 2,
				borderRadius: 3,
				boxShadow: "0px 1px 4px rgba(0,0,0,0.08)",
			})}
		>
			<TextField
				size="small"
				placeholder={filter.searchFilter.placeholder}
				value={searchTerm}
				onChange={(e) =>
					// setFilter((prev) => ({
					// 	...prev,
					// 	searchFilter: { ...prev.searchFilter, value: e.target.value },
					// }))
					setSearchTerm(e.target.value)
				}
				sx={{
					flex: 1,
					height: "45px",
					minWidth: 180,
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
			/>

			{filter.filters.map((cur) => (
				<FormControl key={cur.id} size="small" sx={{ minWidth: 150 }}>
					<InputLabel>{cur.label}</InputLabel>
					<Select
						label={cur.label}
						value={cur.defaultValue}
						onChange={(e) => handleFilterChange(cur.id, e.target.value)}
						sx={{ borderRadius: "10px" }}
					>
						{cur.options.map((item) => (
							<MenuItem key={item.id} value={item.value}>
								{item.display}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			))}

			<Button
				variant="text"
				size="small"
				color="secondary"
				onClick={handleReset}
				sx={{
					borderRadius: "10px",
					height: 40,
					fontSize: "13px",
					whiteSpace: "nowrap",
				}}
			>
				Reset
			</Button>
		</Box>
	);
};

export default memo(FilterBar);
