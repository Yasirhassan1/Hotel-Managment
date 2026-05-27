import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import GroupIcon from "@mui/icons-material/Group";
import Box from "@mui/material/Box";
import { memo } from "react";

import Button from "../../components/Buttons/Button";
import Chip from "../../components/Chip/Chip";
import IconButton from "../../components/icon-button/IconButton";
import SummaryCard from "../../components/summary cards/SummaryCard";
import TextField from "../../components/TextFields/TextField";
import Typography from "../../components/Typography/Typography";

// function stringToColor(string: string) {
// 	let hash = 0;
// 	let i;

// 	/* eslint-disable no-bitwise */
// 	for (i = 0; i < string.length; i += 1) {
// 		hash = string.charCodeAt(i) + ((hash << 5) - hash);
// 	}

// 	let color = "#";

// 	for (i = 0; i < 3; i += 1) {
// 		const value = (hash >> (i * 8)) & 0xff;
// 		color += `00${value.toString(16)}`.slice(-2);
// 	}
// 	/* eslint-enable no-bitwise */

// 	return color;
// }
// function stringAvatar(name: string) {
// 	return {
// 		sx: {
// 			bgcolor: stringToColor(name),
// 		},
// 		children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
// 	};
// }
const Dashboard = () => {
	return (
		<Box
			sx={{
				display: "flex",
				gap: "3rem",
				flexDirection: "column",
			}}
		>
			<h2>Dashboard</h2>
			<Box
				sx={{
					display: "flex",
					gap: "1rem",
					flexWrap: "wrap",
				}}
			>
				<Button variant={"contained"} size="small" color="primary">
					Primary Button
				</Button>
				<Button variant={"contained"} size="small" color="secondary">
					Secondary Button
				</Button>
				<Button variant={"outlined"} color="primary">
					Outlined
				</Button>
				<Button variant={"text"} color="primary">
					Text Button
				</Button>
				<Button variant={"contained"} color="error">
					Danger
				</Button>
				<Button variant={"contained"} color="error" disabled>
					Disabled
				</Button>
				<Button variant="contained" startIcon={<AddIcon />}>
					Add
				</Button>
				<Button variant="outlined" startIcon={<EditIcon />}>
					Edit
				</Button>
				<Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
					Edit
				</Button>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					gap: "10px",
				}}
			>
				<TextField
					label="Text Input"
					placeholder="Enter Text"
					variant="rounded-corner"
					fullWidth
				/>
				<TextField
					label="Required Field"
					variant="rounded-corner"
					placeholder="Required"
					required
					fullWidth
				/>
				<TextField
					label="Error State"
					variant="rounded-corner"
					placeholder="Error"
					error
					fullWidth
				/>
				<TextField
					id="outlined-helperText"
					label="Helper text"
					helperText="This field is required"
					error
					variant="rounded-corner"
					fullWidth
				/>

				<TextField
					disabled
					id="outlined-disabled"
					label="Disabled"
					variant="rounded-corner"
					defaultValue="Hello World"
					fullWidth
				/>

				<IconButton variant="app">
					<Delete />
				</IconButton>
				<Typography variant="h1">helllo</Typography>
				<Typography variant="h2">heading 2</Typography>
				<Typography variant="h3">heading 3</Typography>
				<Typography variant="body1">Body1</Typography>
				<Typography variant="body2">Body2</Typography>
				<Typography variant="caption">Body2</Typography>

				<Chip label="Chip Outlined" variant="active" />
				<Chip label="Chip Outlined" variant="available" />
				<Chip label="Chip Outlined" variant="unavailable" />
				<Chip label="Chip Outlined" variant="pending" />
				<Box
					sx={{
						display: "flex",
						gap: "10px",
						width: "100%",
						bgcolor: "hello.danger",
					}}
				>
					<SummaryCard title="Total Staff" count={12} tag="+2 this month">
						<IconButton variant={"static"} bgColor="#a7f9a0">
							<GroupIcon color="primary"></GroupIcon>
						</IconButton>
					</SummaryCard>

					<SummaryCard title="Total Vehicles" count={8} tag="+1 this month">
						<IconButton variant="app">
							<GroupIcon></GroupIcon>
						</IconButton>
					</SummaryCard>
				</Box>
			</Box>
		</Box>
	);
};

export default memo(Dashboard);
