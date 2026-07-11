import { Avatar as MUIAvatar, styled } from "@mui/material";
import type { AvatarProps as MUIAvatarProps } from "@mui/material/Avatar";
import type { CarType } from "../../types/types";

// Note: Fixed typo in interface name from 'AvatarPros' to 'AvatarProps'
interface AvatarProps extends Omit<MUIAvatarProps, "variant"> {
	carType?: CarType;
}

// Pass the custom interface as a generic type here:
export const StyledAvatar = styled(MUIAvatar)<AvatarProps>(({ carType }) => {
	const backgroundColors: Record<CarType, string> = {
		sedan: "#E7F1FB",
		van: "#F3EAF6",
		minibus: "#FEF3E7",
		suv: "#E7F4F3",
		bus: "#E9F1F9",
	};

	return {
		backgroundColor: carType ? backgroundColors[carType] : "#fff",
	};
});
