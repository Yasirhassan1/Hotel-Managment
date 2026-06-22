import {
	Chip as MUIChip,
	type ChipProps as MUIChipProps,
	styled,
} from "@mui/material";
import type { ChipType } from "../../types/types";

interface ChipProps extends Omit<MUIChipProps, "variant"> {
	variant?: ChipType;
}

const StyledChipActive = styled(MUIChip)(() => ({
	backgroundColor: "#e8f5e9",
	color: "#2e7d32",
	borderRadius: 5,
	fontWeight: 600,
	fontSize: "0.72rem",
	height: 24,
}));

const StyledChipInactive = styled(MUIChip)(() => ({
	backgroundColor: "#f5f5f5",
	color: "#757575",
	borderRadius: 5,
	fontWeight: 600,
	fontSize: "0.72rem",
	height: 24,
}));

const StyledChipAvailable = styled(MUIChip)(() => ({
	backgroundColor: "#e3f2fd",
	color: "#1565c0",
	borderRadius: 5,
	fontWeight: 600,
	fontSize: "0.72rem",
	height: 24,
}));

const StyledChipUnAvailable = styled(MUIChip)(() => ({
	backgroundColor: "#ffebee",
	color: "#c62828",
	borderRadius: 5,
	fontWeight: 600,
	fontSize: "0.72rem",
	height: 24,
}));

const StyledChipPending = styled(MUIChip)(() => ({
	backgroundColor: "#fff3e0",
	color: "#e65100",
	borderRadius: 5,
	fontWeight: 600,
	fontSize: "0.72rem",
	height: 24,
}));

const StyledChipAdmin = styled(MUIChip)(() => ({
	backgroundColor: "#F4EDF7",
	color: "#782e7d",
	borderRadius: 5,
	fontWeight: 600,
	fontSize: "0.72rem",
	height: 24,
}));
const StyledChipTourGuide = styled(MUIChip)(() => ({
	backgroundColor: "#EAF3FC",
	color: "#006ADA",
	borderRadius: 5,
	fontWeight: 600,
	fontSize: "0.72rem",
	height: 24,
}));

const StyledChipDriver = styled(MUIChip)(() => ({
	backgroundColor: "#FEF4EA",
	color: "#F67C00",
	borderRadius: 5,
	fontWeight: 600,
	fontSize: "0.72rem",
	height: 24,
}));
const StyledChipBookingAgent = styled(MUIChip)(() => ({
	backgroundColor: "#EAF5F4",
	color: "#00897B",
	borderRadius: 5,
	fontWeight: 600,
	fontSize: "0.72rem",
	height: 24,
}));

const StyledChipHotelManager = styled(MUIChip)(() => ({
	backgroundColor: "#ECF2FA",
	color: "#1565C0",
	borderRadius: 5,
	fontWeight: 600,
	fontSize: "0.72rem",
	height: 24,
}));

const StyledChipRestaurantManager = styled(MUIChip)(() => ({
	backgroundColor: "#FAEDED",
	color: "#C62828",
	borderRadius: 5,
	fontWeight: 600,
	fontSize: "0.72rem",
	height: 24,
}));

const StyledChipMarkettingOfficer = styled(MUIChip)(() => ({
	backgroundColor: "#F1F5EE",
	color: "#558B2F",
	borderRadius: 5,
	fontWeight: 600,
	fontSize: "0.72rem",
	height: 24,
}));

const chipType = {
	active: StyledChipActive,
	inactive: StyledChipInactive,
	available: StyledChipAvailable,
	unavailable: StyledChipUnAvailable,
	pending: StyledChipPending,
	admin: StyledChipAdmin,
	driver: StyledChipDriver,
	"tour guide": StyledChipTourGuide,
	"booking agent": StyledChipBookingAgent,
	"hotel manager": StyledChipHotelManager,
	"marketting officer": StyledChipMarkettingOfficer,
	"restaurant manager": StyledChipRestaurantManager,
	undefined: MUIChip,
};

export default function Chip({ variant, ...props }: ChipProps) {
	const Chip = chipType[variant as ChipType];
	return <Chip {...props}></Chip>;
}
// export default memo(Chip);
