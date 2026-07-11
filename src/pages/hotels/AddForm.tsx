import AddIcon from "@mui/icons-material/Add";
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

interface AddFormProps {
	addHotel: (data: any) => void;
	closeForm: () => void;
	statusMenuItems: string[];
	ratingMenuItems: string[];
}

export default function AddForm({
	addHotel,
	closeForm,
	statusMenuItems,
	ratingMenuItems,
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
				onSubmit={handleSubmit(addHotel)}
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
									defaultValue={"5"}
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
									defaultValue={"Active"}
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
					<Button variant="outlined" onClick={closeForm}>
						Cancel
					</Button>
					<Button variant="contained" type="submit" startIcon={<AddIcon />}>
						Add Hotel
					</Button>
				</Box>
			</form>
		</Box>
	);
}