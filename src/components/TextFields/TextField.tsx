import {
	TextField as MUITextField,
	type TextFieldProps as MUITextFieldProps,
	type SxProps,
	styled,
	type Theme,
} from "@mui/material";

export type InputProps = Omit<MUITextFieldProps, "variant"> & {
	variant?: MUITextFieldProps["variant"] | "rounded-corner" | "full-rounded";
	sx?: SxProps<Theme>;
};

const StyledTextField = styled(MUITextField)(() => ({
	"& .MuiOutlinedInput-root": {
		borderRadius: "10px",
		height: "50px",
	},

}));

const StyledTextFieldFullRounded = styled(MUITextField)(() => ({
	"& .MuiOutlinedInput-root": {
		borderRadius: "50px",
		height: "50px",
		border: "none",
	},
		
}));

export default function TextField({
	sx,
	variant,
	color,
	...props
}: InputProps) {
	if (variant === "rounded-corner") {
		return (
			<StyledTextField sx={sx} variant="outlined" color={color} {...props} />
		);
	} else if (variant === "full-rounded") {
		return (
			<StyledTextFieldFullRounded
				sx={sx}
				{...props}
			></StyledTextFieldFullRounded>
		);
	}

	return <MUITextField sx={sx} variant={variant} color={color} {...props} />;
}
