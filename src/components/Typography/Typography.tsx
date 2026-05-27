import {
	Typography as MUITypography,
	type TypographyProps as MUITypographyProps,
	styled,
} from "@mui/material";

interface TypographyProps extends MUITypographyProps {
	fontSize?: string;
}

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

export default function Typography({
	variant,
	fontSize,
	children,
	...props
}: TypographyProps) {
	if (variant === "h1") {
		return (
			<StyledMUITypographyh1 variant="h1" {...props}>
				{children}
			</StyledMUITypographyh1>
		);
	} else if (variant === "h2") {
		return (
			<StyledMUITypographyh2 variant="h2" {...props}>
				{children}
			</StyledMUITypographyh2>
		);
	} else if (variant === "h3") {
		return (
			<StyledMUITypographyh3 variant="h3" {...props}>
				{children}
			</StyledMUITypographyh3>
		);
	} else if (variant === "body1") {
		return (
			<StyledMUITypographybody1 variant="body1" {...props}>
				{children}
			</StyledMUITypographybody1>
		);
	} else if (variant === "body2") {
		return (
			<StyledMUITypographybody2 variant="body2" {...props}>
				{children}
			</StyledMUITypographybody2>
		);
	} else if (variant === "caption") {
		return (
			<StyledMUITypographyCaption variant="caption" {...props}>
				{children}
			</StyledMUITypographyCaption>
		);
	} else {
		return (
			<MUITypography
				{...props}
				sx={{
					fontSize: fontSize,
				}}
			>
				{children}
			</MUITypography>
		);
	}
}
