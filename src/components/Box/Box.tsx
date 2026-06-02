import {
	Box as MUIBox,
	type BoxProps as MUIBoxProps,
	styled,
} from "@mui/material";
import type { ReactNode } from "react";

interface BoxProps extends MUIBoxProps {
	variant?: "shadow";
	children?: ReactNode;
}
type boxType = "shadow" | "undefined";

const StyledShadowBox = styled(MUIBox)(({ theme }) => ({
	boxShadow: `2px 4px 10px ${theme.palette.color.boxShadow}`,
}));
const BoxType = {
	shadow: StyledShadowBox,
	undefined: MUIBox,
};
export default function Box({ variant, children, ...props }: BoxProps) {
	const Box = BoxType[variant as boxType];
	return <Box {...props}>{children}</Box>;
}
