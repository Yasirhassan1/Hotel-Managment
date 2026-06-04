import {
	Typography as MUITypography,
	type TypographyProps as MUITypographyProps,
	styled,
} from "@mui/material";
import { memo } from "react";

type TypoType = "h1" | "h2" | "h3" | "body1" | "body2" | "caption";
interface TypographyProps extends MUITypographyProps {}

const StyledMUITypographyh1 = styled(MUITypography)(({ theme }) => ({
	fontSize: "1.5rem",
	letterSpacing: "0.00938em",
	fontWeight: 700,
	lineHeight: 1.5,
	color: theme.typography.h1.color,
}));

const StyledMUITypographyh2 = styled(MUITypography)(({ theme }) => ({
	fontSize: "1.2rem",
	letterSpacing: "0.00938em",
	fontWeight: 700,
	lineHeight: 1.5,
	color: theme.typography.h2.color,
}));

const StyledMUITypographyh3 = styled(MUITypography)(({ theme }) => ({
	fontSize: "1rem",
	letterSpacing: "0.00938em",
	fontWeight: 700,
	lineHeight: 1.5,
	color: theme.typography.h3.color,
}));

const StyledMUITypographybody1 = styled(MUITypography)(({ theme }) => ({
	fontSize: "0.9rem",
	letterSpacing: "0.00938em",
	fontWeight: 400,
	lineHeight: 1.5,
	color: theme.typography.body1.color,
}));

const StyledMUITypographybody2 = styled(MUITypography)(({ theme }) => ({
	fontSize: "0.82rem",
	letterSpacing: "0.00938em",
	fontWeight: 400,
	lineHeight: 1.5,
	color: theme.typography.body2.color,
}));

const StyledMUITypographyCaption = styled(MUITypography)(({ theme }) => ({
	fontSize: "0.75rem",
	letterSpacing: "0.00938em",
	fontWeight: 500,
	lineHeight: 1.5,
	color: theme.typography.caption.color,
}));

const TypographyType = {
	h1: StyledMUITypographyh1,
	h2: StyledMUITypographyh2,
	h3: StyledMUITypographyh3,
	body1: StyledMUITypographybody1,
	body2: StyledMUITypographybody2,
	caption: StyledMUITypographyCaption,
	undefined: MUITypography,
};

const Typography = ({ variant, children, ...props }: TypographyProps) => {
	const Typography = TypographyType[variant as TypoType];

	return <Typography {...props}>{children}</Typography>;
};
export default memo(Typography);
