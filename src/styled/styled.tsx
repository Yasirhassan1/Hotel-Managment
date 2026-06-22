import type { BoxProps as MUIBoxProps } from "@mui/material";
import { Box as MUIBox, styled } from "@mui/material";

interface StyledBoxProps extends MUIBoxProps {
	variant?: "shadow";
}

const Box = styled(MUIBox, {
	shouldForwardProp: (prop) => prop !== "variant",
})<StyledBoxProps>(({ theme, variant }) => ({
	boxShadow: variant && `2px 4px 10px ${theme.palette.color.boxShadow}`,
}));

export default Box;
