import { Badge, Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import { memo } from "react";
import ListItems from "../../app-layout/header/ListItems";
import Button from "../../components/Buttons/Button";
import Chip from "../../components/Chip/Chip";
import Icon from "../../components/icon/Icon";
import IconButton from "../../components/icon-button/IconButton";
import SummaryCard from "../../components/summary cards/SummaryCard";
import TextField from "../../components/TextFields/TextField";
import Typography from "../../components/Typography/Typography";
import { summaryCardData } from "./summaryCardData";

const Dashboard = () => {
	return (
		<Box
			sx={{
				display: "flex",
				gap: "3rem",
				// bgcolor: "green",
				marginTop: 4,
				flexDirection: "column",
			}}
		>
			<Box
				sx={{
					display: "flex",
					gap: 2,
					width: "100%",
					flexWrap: "wrap",
				}}
			>
				{summaryCardData.map((cur) => (
					<SummaryCard
						key={cur.id}
						title={cur.title}
						count={cur.count}
						tag={cur.tag}
						icon={cur.Icon}
					></SummaryCard>
				))}
			</Box>
			<Box
				sx={{
					display: "flex",
					gap: "1rem",
					flexWrap: "wrap",
				}}
			>
				<Icon Icon={Badge} />

				<Button variant="contained" size="small" color="primary" sx={{}}>
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

				<ListItems />
				<Typography variant="h3" color="primary">
					hello{" "}
				</Typography>
			</Box>
		</Box>
	);
};

export default memo(Dashboard);
