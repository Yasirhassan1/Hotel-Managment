import AddIcon from "@mui/icons-material/Add";
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
import "react-phone-input-2/lib/style.css";
import { InputAdornment, OutlinedInput } from "@mui/material";

interface AddFormProps {
	addVehicle: (data: any) => void;
	closeForm: () => void;
	vehicleType: string[];
	statusMenuItems: string[];
}

export default function AddForm({
	addVehicle,
	vehicleType,
	closeForm,
	statusMenuItems,
}: AddFormProps) {
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
				padding: "1rem",
				borderRadius: 3,
				position: "relative",
				display: "flex",
				maxWidth: "860px",
				minWidth: "300px",
				height: "fit-content",
				flexDirection: "column",
				gap: "1rem",
			}}
		>
			<form
				onSubmit={handleSubmit(addVehicle)}
				// action={addStaff}
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
									defaultValue={"Sedan"}
									labelId="demo-simple-select-label"
									size="small"
									{...register("vehicleType")}
									// name="role"
									//  onChange={(e)=>inputChange(e)}
								>
									{vehicleType.map((cur) => (
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
									defaultValue={"Available"}
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
					<Button variant="outlined" onClick={closeForm}>
						Cancel
					</Button>
					<Button variant="contained" type="submit" startIcon={<AddIcon />}>
						Add Vehicle
					</Button>
				</Box>
			</form>
		</Box>
	);
}
