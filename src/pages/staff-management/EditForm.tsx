import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import Button from "../../components/Buttons/Button";

import TextField from "../../components/TextFields/TextField";

import Box from "../../styled/styled";

interface RowDataType {
	id: number;
	staffMember: string;
	email: string;
	phone: string;
	role: string;
	status: string;
	joinedDate: string;
}
interface EditFormProps {
	rowId: number;
	rowData: RowDataType;
	roleMenuItems: string[];
	statusMenuItems: string[];
	submitEditForm: (formData: FormData, id: number) => void;
	closeEditForm: () => void;
}

export default function EditForm({
	rowId,
	rowData,
	roleMenuItems,
	submitEditForm,
	statusMenuItems,
	closeEditForm,
}: Readonly<EditFormProps>) {
	return (
		<Box
			className="overlay-content"
			sx={{
				bgcolor: "background.paper",
				borderRadius: 3,
				position: "relative",
				display: "flex",
				maxWidth: "500px",

				minWidth: "300px",
				height: "fit-content",
				flexDirection: "column",
				gap: "1rem",
			}}
		>
			<form
				action={(formData: FormData) => submitEditForm(formData, rowId)}
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Divider />
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
						height: "260px",
						overflowY: "auto",
					}}
				>
					<FormControl
						sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
					>
						<TextField
							id="full-name"
							label="Full Name"
							name="fullName"
							defaultValue={rowData.staffMember}
							required
							type="text"
							size="small"
						></TextField>

						<Box
							sx={{
								display: "flex",
								gap: "0.8rem",
								flexWrap: "wrap",
							}}
						>
							<TextField
								id="email-address"
								label="Email Address"
								name="email"
								defaultValue={rowData.email}
								// onChange={(e)=>inputChange(e)}
								type="email"
								required
								size="small"
							></TextField>
							<TextField
								// variant="rounded-corner"
								id="phone-no"
								label="Phone Number"
								required
								name="phoneNo"
								defaultValue={rowData.phone}
								// value={inputs.phoneNo}
								// onChange={(e)=>inputChange(e)}
								type="tel"
								size="small"
							></TextField>
						</Box>
						<Box
							sx={{
								display: "flex",
								gap: "0.8rem",
								flexWrap: "wrap",
							}}
						>
							<FormControl sx={{ flex: 1 }}>
								<InputLabel id="demo-simple-select-label">Role</InputLabel>
								<Select
									label="Role"
									defaultValue={rowData.role.toLowerCase()}
									labelId="demo-simple-select-label"
									size="small"
									name="role"
								>
									{roleMenuItems.map((cur) => (
										<MenuItem key={cur} value={cur.toLocaleLowerCase()}>
											{cur}
										</MenuItem>
									))}
								</Select>
							</FormControl>

							<FormControl sx={{ flex: 1 }}>
								<InputLabel id="status">Status</InputLabel>
								<Select
									label="Status"
									labelId="status"
									name="status"
									defaultValue={rowData.status.toLowerCase()}
									size="small"
								>
									{statusMenuItems.map((cur) => (
										<MenuItem key={cur} value={cur.toLowerCase()}>
											{cur}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Box>
						<Box
							sx={{
								display: "flex",
								gap: "0.8rem",
								flexWrap: "wrap",
							}}
						>
							<TextField
								sx={{
									flex: 1,
								}}
								id="joined-date"
								name="joinedDate"
								label="Joined Date"
								value={"2022-01-15"}
								defaultValue={rowData.joinedDate}
								// onChange={(e)=>inputChange(e)}
								type="date"
								required
								size="small"
							></TextField>
							<TextField
								sx={{
									flex: 1,
								}}
								id="password"
								name="password"
								// onChange={(e)=>inputChange(e)}
								// value={inputs.password}
								label="Password"
								type="password"
								required
								size="small"
							></TextField>
						</Box>
					</FormControl>
				</Box>
				<Divider />
				<Box
					sx={{
						display: "flex",
						gap: "0.5rem",
						alignSelf: "end",
						mt: "0.5rem",
					}}
				>
					<Button variant="outlined" onClick={closeEditForm}>
						Cancel
					</Button>
					<Button variant="contained" type="submit">
						Save Changes
					</Button>
				</Box>
			</form>
		</Box>
	);
}
