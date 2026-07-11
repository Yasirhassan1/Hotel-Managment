import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Button from "../../components/Buttons/Button";
import Typography from "../../components/Typography/Typography";
import Box from "../../styled/styled";
import AddForm from "./AddForm";

interface RestaurantHeaderProps {
	dataSize: number;
	onRestaurantAdd: (data: any) => void;
	cuisineMenuItems: string[];
	statusMenuItems: string[];
}
export function RestaurantHeader({
	dataSize,
	onRestaurantAdd,
	cuisineMenuItems,
	statusMenuItems,
}: RestaurantHeaderProps) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					gap: "1rem",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Typography variant="h3">Restaurants &amp; Menus</Typography>
					<Typography variant="caption">
						{dataSize} total restaurants
					</Typography>
				</Box>
				<Button
					onClick={() => setIsOpen(true)}
					variant="contained"
					startIcon={<AddIcon />}
				>
					Add Restaurant
				</Button>
			</Box>
			{isOpen ? (
				<Dialog
					open={isOpen}
					slots={{}}
					keepMounted
					onClose={() => setIsOpen(false)}
					aria-describedby="alert-dialog-slide-description"
					role="alertdialog"
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							padding: 2,
							alignItems: "center",
							gap: "1rem",
						}}
					>
						<Typography variant="h3">Add New Restaurant</Typography>
						<IconButton onClick={() => setIsOpen(false)} aria-label="delete">
							<CloseIcon />
						</IconButton>
					</Box>

					<AddForm
						addRestaurant={onRestaurantAdd}
						closeForm={() => setIsOpen(false)}
						cuisineMenuItems={cuisineMenuItems}
						statusMenuItems={statusMenuItems}
					/>
				</Dialog>
			) : null}
		</>
	);
}
