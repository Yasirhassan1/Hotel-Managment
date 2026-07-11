import { InputAdornment, OutlinedInput } from "@mui/material";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";
import Button from "../../components/Buttons/Button";
import TextField from "../../components/TextFields/TextField";
import Typography from "../../components/Typography/Typography";
import Box from "../../styled/styled";
import type { VehicleTableType } from "../../types/types";

interface EditFormProps {
	rowId: number;
	rowData: VehicleTableType;
	vehicleTypeMenuItems: string[];
	statusMenuItems: string[];
	submitEditForm: (formData: any, id: number) => void;
	closeEditForm: () => void;
}

export default function EditForm({
	rowId,
	rowData,
	vehicleTypeMenuItems,
	submitEditForm,
	statusMenuItems,
	closeEditForm,
}: EditFormProps) {
	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm();
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
			// onClick={(e) => e.stopPropagation()}
		>
			<form
				onSubmit={handleSubmit((formData) => submitEditForm(formData, rowId))}
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
						<Box
							sx={{
								display: "flex",
								gap: 1,
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
								}}
							>
								<TextField
									id="vehicleName"
									label="Vehicle Name"
									defaultValue={rowData.vehicle.text}
									// name="fullName"
									// required
									// onChange={(e)=>inputChange(e)}
									{...register("vehicleName", { required: true })}
									type="text"
									size="small"
								></TextField>
								{errors.vehicleName && (
									<Typography sx={{ color: "red" }} variant="body2">
										This field is required
									</Typography>
								)}
							</Box>
							<FormControl sx={{ flex: 1 }}>
								<InputLabel id="demo-simple-select-label">
									Vehicle Type
								</InputLabel>
								<Select
									label="Vehicle Type"
									id="vehicleType"
									defaultValue={rowData.vehicleType}
									labelId="demo-simple-select-label"
									size="small"
									{...register("vehicleType")}
									// name="role"
									//  onChange={(e)=>inputChange(e)}
								>
									{vehicleTypeMenuItems.map((cur) => (
										<MenuItem key={cur} value={cur}>
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
							<Box>
								<TextField
									sx={{
										flex: 1,
									}}
									id="registrationNo"
									label="Registration No"
									defaultValue={rowData.registrationNo}
									type="text"
									{...register("registrationNo", {
										required: "This field is required",
									})}
									size="small"
								></TextField>
								{errors.registrationNo && (
									<Typography sx={{ color: "red" }} variant="body2">
										This Field is required
									</Typography>
								)}
							</Box>

							<Box>
								<TextField
									sx={{
										flex: 1,
									}}
									id="capacity"
									label="Capacity"
									type="number"
									defaultValue={rowData.capacity}
									{...register("capacity", {
										required: "This field is required",
									})}
									size="small"
								></TextField>
								{errors.capacity && (
									<Typography sx={{ color: "red" }} variant="body2">
										This Field is required
									</Typography>
								)}
							</Box>
						</Box>
						<Box
							sx={{
								display: "flex",
								gap: "0.8rem",
								flexWrap: "wrap",
							}}
						>
							<Box>
								<TextField
									sx={{
										flex: 1,
									}}
									id="driverName"
									label="Driver Name"
									defaultValue={rowData.driver}
									type="text"
									{...register("driverName", {
										required: "This field is required",
									})}
									size="small"
								></TextField>
								{errors.driverName && (
									<Typography sx={{ color: "red" }} variant="body2">
										This Field is required
									</Typography>
								)}
							</Box>

							<Box>
								<TextField
									sx={{
										flex: 1,
									}}
									id="driverContact"
									label="Driver Contact"
									defaultValue={rowData.driver}
									type="text"
									{...register("driverContact", {
										required: "This field is required",
									})}
									size="small"
								></TextField>
								{errors.driverContact && (
									<Typography sx={{ color: "red" }} variant="body2">
										This Field is required
									</Typography>
								)}
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								gap: "0.8rem",
								flexWrap: "wrap",
							}}
						>
							<Box>
								<FormControl>
									<InputLabel htmlFor={`input`}>Price Per Day</InputLabel>
									<OutlinedInput
										sx={{
											flex: 1,
										}}
										id="priceDay"
										label="Price Per Day"
										type="number"
										defaultValue={rowData.priceDay}
										startAdornment={
											<InputAdornment position="start">$</InputAdornment>
										}
										{...register("priceDay", {
											required: "This field is required",
										})}
										size="small"
									></OutlinedInput>
								</FormControl>
								{errors.priceDay && (
									<Typography sx={{ color: "red" }} variant="body2">
										This Field is required
									</Typography>
								)}
							</Box>

							<FormControl sx={{ flex: 1 }}>
								<InputLabel id="status">Status</InputLabel>
								<Select
									label="Status"
									defaultValue={rowData.status}
									labelId="status"
									// name="status"
									{...register("status")}
									// onChange={(e)=>inputChange(e)}
									size="small"
								>
									{statusMenuItems.map((cur) => (
										<MenuItem key={cur} value={cur}>
											{cur}
										</MenuItem>
									))}
								</Select>
							</FormControl>
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
