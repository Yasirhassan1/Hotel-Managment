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
import type { RestaurantTableType } from "../../types/types";

interface EditFormProps {
	rowId: number;
	rowData: RestaurantTableType;
	cuisineMenuItems: string[];
	statusMenuItems: string[];
	submitEditForm: (formData: any, id: number) => void;
	closeEditForm: () => void;
}

export default function EditForm({
	rowId,
	rowData,
	cuisineMenuItems,
	statusMenuItems,
	submitEditForm,
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
									id="restaurantName"
									label="Restaurant Name"
									defaultValue={rowData.restaurant.text}
									{...register("restaurantName", { required: true })}
									type="text"
									size="small"
								></TextField>
								{errors.restaurantName && (
									<Typography sx={{ color: "red" }} variant="body2">
										This field is required
									</Typography>
								)}
							</Box>
							<Box>
								<TextField
									sx={{ flex: 1 }}
									id="location"
									label="Location"
									defaultValue={rowData.location}
									type="text"
									{...register("location", {
										required: "This field is required",
									})}
									size="small"
								></TextField>
								{errors.location && (
									<Typography sx={{ color: "red" }} variant="body2">
										This field is required
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
									sx={{ flex: 1 }}
									id="contact"
									label="Contact"
									defaultValue={rowData.contact}
									type="text"
									{...register("contact", {
										required: "This field is required",
									})}
									size="small"
								></TextField>
								{errors.contact && (
									<Typography sx={{ color: "red" }} variant="body2">
										This field is required
									</Typography>
								)}
							</Box>

							<FormControl sx={{ flex: 1 }}>
								<InputLabel id="cuisine-label">Cuisine</InputLabel>
								<Select
									label="Cuisine"
									defaultValue={rowData.cuisine}
									labelId="cuisine-label"
									size="small"
									{...register("cuisine")}
								>
									{cuisineMenuItems.map((cur) => (
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
									sx={{ flex: 1 }}
									id="menuItemsCount"
									label="Menu Items"
									type="number"
									defaultValue={rowData.restaurant.menuItemsCount}
									{...register("menuItemsCount", {
										required: "This field is required",
									})}
									size="small"
								></TextField>
								{errors.menuItemsCount && (
									<Typography sx={{ color: "red" }} variant="body2">
										This field is required
									</Typography>
								)}
							</Box>

							<FormControl sx={{ flex: 1 }}>
								<InputLabel id="status">Status</InputLabel>
								<Select
									label="Status"
									defaultValue={rowData.status}
									labelId="status"
									{...register("status")}
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

						<Box
							sx={{
								display: "flex",
								gap: "0.8rem",
								flexWrap: "wrap",
							}}
						>
							<Box>
								<TextField
									sx={{ flex: 1 }}
									id="openingTime"
									label="Opening Time"
									defaultValue={rowData.openingHours.open}
									type="text"
									{...register("openingTime", {
										required: "This field is required",
									})}
									size="small"
								></TextField>
								{errors.openingTime && (
									<Typography sx={{ color: "red" }} variant="body2">
										This field is required
									</Typography>
								)}
							</Box>

							<Box>
								<TextField
									sx={{ flex: 1 }}
									id="closingTime"
									label="Closing Time"
									defaultValue={rowData.openingHours.close}
									type="text"
									{...register("closingTime", {
										required: "This field is required",
									})}
									size="small"
								></TextField>
								{errors.closingTime && (
									<Typography sx={{ color: "red" }} variant="body2">
										This field is required
									</Typography>
								)}
							</Box>
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
