import {
	TextField as MUITextField,
	type TextFieldProps as MUITextFieldProps,
	styled,
} from "@mui/material";

export type InputProps = Omit<MUITextFieldProps, "variant"> & {
	variant?: MUITextFieldProps["variant"] | "rounded-corner";
};

const StyledTextField = styled(MUITextField)(() => ({
	"& .MuiOutlinedInput-root": {
		borderRadius: "10px",
		height: "50px",
	},
}));

export default function TextField({ variant, color, ...props }: InputProps) {
	if (variant === "rounded-corner") {
		return <StyledTextField variant="outlined" color={color} {...props} />;
	}

	return <MUITextField variant={variant} color={color} {...props} />;
}
