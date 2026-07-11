import {
	Chip as MUIChip,
	type ChipProps as MUIChipProps,
	styled,
} from "@mui/material";
import { memo } from "react";
import type { ChipType } from "../../types/types";

interface ChipProps extends Omit<MUIChipProps, "chipType"> {
	chipType?: ChipType;
}

// const StyledChipActive = styled(MUIChip)(() => ({
// 	backgroundColor: "#e8f5e9",
// 	color: "#2e7d32",
// 	borderRadius: 5,
// 	fontWeight: 600,
// 	fontSize: "0.72rem",
// 	height: 24,
// }));

// const StyledChipInactive = styled(MUIChip)(() => ({
// 	backgroundColor: "#f5f5f5",
// 	color: "#757575",
// 	borderRadius: 5,
// 	fontWeight: 600,
// 	fontSize: "0.72rem",
// 	height: 24,
// }));

// const StyledChipAvailable = styled(MUIChip)(() => ({
// 	backgroundColor: "#e3f2fd",
// 	color: "#1565c0",
// 	borderRadius: 5,
// 	fontWeight: 600,
// 	fontSize: "0.72rem",
// 	height: 24,
// }));

// const StyledChipUnAvailable = styled(MUIChip)(() => ({
// 	backgroundColor: "#ffebee",
// 	color: "#c62828",
// 	borderRadius: 5,
// 	fontWeight: 600,
// 	fontSize: "0.72rem",
// 	height: 24,
// }));

// const StyledChipPending = styled(MUIChip)(() => ({
// 	backgroundColor: "#fff3e0",
// 	color: "#e65100",
// 	borderRadius: 5,
// 	fontWeight: 600,
// 	fontSize: "0.72rem",
// 	height: 24,
// }));

// const StyledChipAdmin = styled(MUIChip)(() => ({
// 	backgroundColor: "#F4EDF7",
// 	color: "#782e7d",
// 	borderRadius: 5,
// 	fontWeight: 600,
// 	fontSize: "0.72rem",
// 	height: 24,
// }));
// const StyledChipTourGuide = styled(MUIChip)(() => ({
// 	backgroundColor: "#EAF3FC",
// 	color: "#006ADA",
// 	borderRadius: 5,
// 	fontWeight: 600,
// 	fontSize: "0.72rem",
// 	height: 24,
// }));

// const StyledChipDriver = styled(MUIChip)(() => ({
// 	backgroundColor: "#FEF4EA",
// 	color: "#F67C00",
// 	borderRadius: 5,
// 	fontWeight: 600,
// 	fontSize: "0.72rem",
// 	height: 24,
// }));
// const StyledChipBookingAgent = styled(MUIChip)(() => ({
// 	backgroundColor: "#EAF5F4",
// 	color: "#00897B",
// 	borderRadius: 5,
// 	fontWeight: 600,
// 	fontSize: "0.72rem",
// 	height: 24,
// }));

// const StyledChipHotelManager = styled(MUIChip)(() => ({
// 	backgroundColor: "#ECF2FA",
// 	color: "#1565C0",
// 	borderRadius: 5,
// 	fontWeight: 600,
// 	fontSize: "0.72rem",
// 	height: 24,
// }));

// const StyledChipRestaurantManager = styled(MUIChip)(() => ({
// 	backgroundColor: "#FAEDED",
// 	color: "#C62828",
// 	borderRadius: 5,
// 	fontWeight: 600,
// 	fontSize: "0.72rem",
// 	height: 24,
// }));

// const StyledChipMarkettingOfficer = styled(MUIChip)(() => ({
// 	backgroundColor: "#F1F5EE",
// 	color: "#558B2F",
// 	borderRadius: 5,
// 	fontWeight: 600,
// 	fontSize: "0.72rem",
// 	height: 24,
// }));

// const chipType = {
// 	active: StyledChipActive,
// 	inactive: StyledChipInactive,
// 	available: StyledChipAvailable,
// 	unavailable: StyledChipUnAvailable,
// 	pending: StyledChipPending,
// 	admin: StyledChipAdmin,
// 	driver: StyledChipDriver,
// 	"tour guide": StyledChipTourGuide,
// 	"booking agent": StyledChipBookingAgent,
// 	"hotel manager": StyledChipHotelManager,
// 	"marketting officer": StyledChipMarkettingOfficer,
// 	"restaurant manager": StyledChipRestaurantManager,
// 	sedan: StyledChipTourGuide,
// 	van: StyledChipAdmin,
// 	minibus: StyledChipDriver,
// 	suv: StyledChipBookingAgent,
// 	bus: StyledChipTourGuide,
// 	undefined: MUIChip,
// };
const chipColors: Record<string, { bgColor: string; color?: string }> = {
	active: {
		bgColor: "#e8f5e9",
		color: "#2e7d32",
	},

	inactive: {
		bgColor: "#f5f5f5",
		color: "#757575",
	},

	available: {
		bgColor: "#e3f2fd",
		color: "#1565c0",
	},
	unavailable: {
		bgColor: "#ffebee",
		color: "#c62828",
	},
	pending: {
		bgColor: "#fff3e0",
		color: "#e65100",
	},
	admin: {
		bgColor: "#F4EDF7",
		color: "#782e7d",
	},
	driver: {
		bgColor: "#FEF4EA",
		color: "#F67C00",
	},
	"tour guide": {
		bgColor: "#EAF3FC",
		color: "#006ADA",
	},
	"booking agent": {
		bgColor: "#EAF5F4",
		color: "#00897B",
	},

	"hotel manager": {
		bgColor: "#ECF2FA",
		color: "#1565C0",
	},
	"marketting officer": {
		bgColor: "#F1F5EE",
		color: "#558B2F",
	},
	"restaurant manager": {
		bgColor: "#FAEDED",
		color: "#C62828",
	},

	sedan: {
		bgColor: "#EAF3FC",
		color: "#006ADA",
	},

	van: {
		bgColor: "#F4EDF7",
		color: "#782e7d",
	},

	minibus: {
		bgColor: "#FEF4EA",
		color: "#F67C00",
	},

	suv: {
		bgColor: "#EAF5F4",
		color: "#00897B",
	},

	bus: {
		bgColor: "#EAF3FC",
		color: "#006ADA",
	},
};

const Chip = styled(MUIChip)<ChipProps>(
	({ chipType }: { chipType?: ChipType }) => {
		const bgColor = chipType ? chipColors[String(chipType)]?.bgColor : "";
		const color = chipType ? chipColors[String(chipType)]?.color : "";

		return {
			borderRadius: 5,
			fontWeight: 600,
			fontSize: "0.72rem",
			height: 24,
			backgroundColor: bgColor,
			color: color,
		};
	},
);
export default memo(Chip);
