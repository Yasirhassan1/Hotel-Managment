import {
	Box as MUIBox,
	type BoxProps as MUIBoxProps,
	styled,
} from "@mui/material";

interface BoxProps extends MUIBoxProps {
	variant?: "shadow";
}

const StyledShadowBox = styled(MUIBox)(() => ({
	boxShadow: "2px 4px 10px #cdcdcd9a",
}));

export default function Box({ variant, ...props }: BoxProps) {
	if (variant) {
		return <StyledShadowBox {...props}></StyledShadowBox>;
	}
	return <MUIBox {...props}></MUIBox>;
}
