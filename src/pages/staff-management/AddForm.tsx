import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Controller, useForm } from "react-hook-form";
import PhoneInputProps from "react-phone-input-2";
import Button from "../../components/Buttons/Button";
import TextField from "../../components/TextFields/TextField";
import Typography from "../../components/Typography/Typography";
import Box from "../../styled/styled";
import "react-phone-input-2/lib/style.css";

const PhoneInput = (PhoneInputProps as any).default || PhoneInputProps;

interface AddFormProps {
	addStaffMembers: (data: any) => void;
	closeForm: () => void;
	rolemenuItems: string[];
	statusMenuItems: string[];
}

export default function AddForm({
	addStaffMembers,
	rolemenuItems,
	closeForm,
	statusMenuItems,
}: AddFormProps) {
	const {
		register,
		handleSubmit,
		control,
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
				maxWidth: "660px",
				minWidth: "300px",
				height: "fit-content",
				flexDirection: "column",
				gap: "1rem",
			}}
		>
			<form
				onSubmit={handleSubmit(addStaffMembers)}
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
								flexDirection: "column",
							}}
						>
							<TextField
								id="full-name"
								label="Full Name"
								// name="fullName"
								// required
								// onChange={(e)=>inputChange(e)}
								{...register("fullName", { required: true })}
								type="text"
								size="small"
							></TextField>
							{errors.fullName && (
								<Typography sx={{ color: "red" }} variant="body2">
									This field is required
								</Typography>
							)}
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: "0.8rem",
								flexWrap: "wrap",
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexWrap: "wrap",

									gap: "0.8rem",
								}}
							>
								<Box>
									<TextField
										id="email-address"
										label="Email Address"
										// name="email"
										// onChange={(e)=>inputChange(e)}
										{...register("email", {
											required: "This field is required",
											pattern: {
												value: /\S+@\S+\.\S+/,
												message: "Entered value does not match email format",
											},
										})}
										type="email"
										size="small"
									></TextField>
									{errors.email && (
										<Typography sx={{ color: "red" }} variant="body2">
											{errors.email.message as string}
										</Typography>
									)}
								</Box>
								<Box>
									{/* <TextField
										// variant="rounded-corner"
										id="phone-no"
										label="Phone Number"
										// value={inputs.phoneNo}
										// onChange={(e)=>inputChange(e)}
										{...register("phoneNo", { required: true })}
										type="tel"
										size="small"
									></TextField> */}
									<Controller
										name="phoneNo"
										control={control} // 'control' comes from useForm()
										rules={{ required: true }}
										render={({ field: { onChange, value } }) => (
											<PhoneInput
												country={"pk"}
												value={value}
												onChange={onChange}
											/>
										)}
									/>
									{errors.phoneNo && (
										<Typography sx={{ color: "red" }} variant="body2">
											This field is required
										</Typography>
									)}
								</Box>
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
								<InputLabel id="demo-simple-select-label">Role</InputLabel>
								<Select
									label="Role"
									defaultValue={"admin"}
									labelId="demo-simple-select-label"
									size="small"
									{...register("role")}
									// name="role"
									//  onChange={(e)=>inputChange(e)}
								>
									{rolemenuItems.map((cur) => (
										<MenuItem key={cur} value={cur.toLowerCase()}>
											{cur}
										</MenuItem>
									))}
								</Select>
							</FormControl>

							<FormControl sx={{ flex: 1 }}>
								<InputLabel id="status">Status</InputLabel>
								<Select
									label="Status"
									defaultValue={"active"}
									labelId="status"
									// name="status"
									{...register("status")}
									// onChange={(e)=>inputChange(e)}
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
								// name="joinedDate"
								label="Joined Date"
								defaultValue={"2022-01-15"}
								// onChange={(e)=>inputChange(e)}
								type="date"
								{...register("joinedDate")}
								size="small"
							></TextField>
							<Box>
								<TextField
									sx={{
										flex: 1,
									}}
									id="password"
									label="Password"
									type="password"
									{...register("password", {
										required: "This field is required",
										pattern: {
											value: /^.{8,}$/,
											message: "Password must contain 8 characters",
										},
									})}
									size="small"
								></TextField>
								{errors.password && (
									<Typography sx={{ color: "red" }} variant="body2">
										{errors.password.message as string}
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
					<Button variant="outlined" onClick={closeForm}>
						Cancel
					</Button>
					<Button variant="contained" type="submit" startIcon={<AddIcon />}>
						Add Staff Member
					</Button>
				</Box>
			</form>
		</Box>
	);
}
