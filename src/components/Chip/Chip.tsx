import {
	Chip as MUIChip,
	type ChipProps as MUIChipProps,
	styled,
} from "@mui/material";
import  { memo } from "react";

type chipTypes =
	| "active"
	| "inactive"
	| "available"
	| "unavailable"
	| "pending";

interface ChipProps extends Omit<MUIChipProps, "variant"> {
	variant?: chipTypes;
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

const chipType = {
	active: StyledChipActive,
	inactive: StyledChipInactive,
	available: StyledChipAvailable,
	unavailable: StyledChipUnAvailable,
	pending: StyledChipPending,
	undefined: MUIChip,
};



const Chip = ({ variant, ...props }: ChipProps)=> {
	const Chip = chipType[variant as chipTypes];
	return <Chip {...props}></Chip>;
}
export default memo(Chip)