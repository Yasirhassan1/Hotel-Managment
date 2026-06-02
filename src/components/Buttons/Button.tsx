import {
	Button as MUIButton,
	type ButtonProps as MUIButtonProps,
	styled,
} from "@mui/material";
import type { ReactNode } from "react";
import { memo } from "react";

interface ButtonProps extends MUIButtonProps {
	children: ReactNode;
}

type ButtonType = "outlined" | "contained" | "text";

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

const buttonType = {
	outlined: StyledOutlinedButton,
	contained: StyledContainedButton,
	text: StyledTextButton,
	undefined: MUIButton,
};

const Button = ({ children, variant, ...props }: ButtonProps) => {
	const Button = buttonType[variant as ButtonType];
	console.log("button render");
	return (
		<Button variant={variant} {...props}>
			{children}
		</Button>
	);
};
export default memo(Button);
