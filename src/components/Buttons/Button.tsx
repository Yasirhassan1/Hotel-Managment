import {
	Button as MUIButton,
	type ButtonProps as MUIButtonProps,
	styled,
} from "@mui/material";
import type { ReactNode } from "react";

interface ButtonProps extends MUIButtonProps {
	children: ReactNode;
}

const StyledOutlinedButton = styled(MUIButton)(() => ({
	borderRadius: "50px",
	padding: "8px 16px",
}));

const StyledContainedButton = styled(MUIButton)(() => ({
	borderRadius: "50px",
	padding: "8px 16px",
}));

const StyledTextButton = styled(MUIButton)(() => ({
	borderRadius: "50px",
	padding: "8px 16px",
}));

export default function Button({
	children,
	variant,
	color,
	...props
}: ButtonProps) {
	return variant === "outlined" ? (
		<StyledOutlinedButton variant="outlined" color={color} {...props}>
			{children}
		</StyledOutlinedButton>
	) : variant === "contained" ? (
		<StyledContainedButton variant="contained" color={color} {...props}>
			{children}
		</StyledContainedButton>
	) : variant === "text" ? (
		<StyledTextButton variant="text" color={color} {...props}>
			{children}
		</StyledTextButton>
	) : (
		<MUIButton variant={variant} {...props}>
			{children}
		</MUIButton>
	);
}
