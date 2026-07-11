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
import type { HotelTableType } from "../../types/types";

interface EditFormProps {
	rowId: number;
	rowData: HotelTableType;
	statusMenuItems: string[];
	ratingMenuItems: string[];
	submitEditForm: (formData: any, id: number) => void;
	closeEditForm: () => void;
}

export default function EditForm({
	rowId,
	rowData,
	statusMenuItems,
	ratingMenuItems,
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
									id="hotelName"
									label="Hotel Name"
									defaultValue={rowData.hotel.text}
									{...register("hotelName", { required: true })}
									type="text"
									size="small"
								></TextField>
								{errors.hotelName && (
									<Typography sx={{ color: "red" }} variant="body2">
										This field is required
									</Typography>
								)}
							</Box>
							<Box>
								<TextField
									sx={{
										flex: 1,
									}}
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
										This Field is required
									</Typography>
								)}
							</Box>

							<Box>
								<TextField
									sx={{
										flex: 1,
									}}
									id="rooms"
									label="Rooms"
									type="number"
									defaultValue={rowData.rooms}
									{...register("rooms", {
										required: "This field is required",
									})}
									size="small"
								></TextField>
								{errors.rooms && (
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
									<InputLabel htmlFor="priceMin">Min Price</InputLabel>
									<OutlinedInput
										sx={{
											flex: 1,
										}}
										id="priceMin"
										label="Min Price"
										type="number"
										defaultValue={rowData.priceRange.min}
										startAdornment={
											<InputAdornment position="start">$</InputAdornment>
										}
										{...register("priceMin", {
											required: "This field is required",
										})}
										size="small"
									></OutlinedInput>
								</FormControl>
								{errors.priceMin && (
									<Typography sx={{ color: "red" }} variant="body2">
										This Field is required
									</Typography>
								)}
							</Box>

							<Box>
								<FormControl>
									<InputLabel htmlFor="priceMax">Max Price</InputLabel>
									<OutlinedInput
										sx={{
											flex: 1,
										}}
										id="priceMax"
										label="Max Price"
										type="number"
										defaultValue={rowData.priceRange.max}
										startAdornment={
											<InputAdornment position="start">$</InputAdornment>
										}
										{...register("priceMax", {
											required: "This field is required",
										})}
										size="small"
									></OutlinedInput>
								</FormControl>
								{errors.priceMax && (
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
							<FormControl sx={{ flex: 1 }}>
								<InputLabel id="rating-label">Rating</InputLabel>
								<Select
									label="Rating"
									defaultValue={String(rowData.rating)}
									labelId="rating-label"
									size="small"
									{...register("rating")}
								>
									{ratingMenuItems.map((cur) => (
										<MenuItem key={cur} value={cur}>
											{cur} Star{cur === "1" ? "" : "s"}
										</MenuItem>
									))}
								</Select>
							</FormControl>

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