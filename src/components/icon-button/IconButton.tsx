import {
	IconButton as MUIIconButton,
	type IconButtonProps as MUIIconButtonProps,
	styled,
} from "@mui/material";
import type { ReactNode } from "react";
import { memo } from "react";

interface IconButtonProps extends Omit<MUIIconButtonProps, "color"> {
	color?: string;
	bgColor?: string;
	variant?: "app" | "static";
	children: ReactNode;
}

const StyledIconButton = styled(MUIIconButton)(({ theme }) => ({
	backgroundColor: "#ececec",
	borderRadius: "15px",
	height: "fit-content",
	"&:hover": {
		color: theme.palette.primary.main,
		backgroundColor: "#dde9fc",
	},
}));

const StyledIconButtonStatic = styled(MUIIconButton)<{ bgColor?: string }>(
	() => ({
		"&:hover": {
			color: "#bb2929",
		},
	}),
);
const IconButton = ({
	variant,
	color,
	bgColor,
	children,
	...props
}: IconButtonProps) => {
	if (variant === "app") {
		return <StyledIconButton {...props}>{children}</StyledIconButton>;
	} else if (variant === "static") {
		<StyledIconButtonStatic bgColor={bgColor} {...props}>
			{children}
		</StyledIconButtonStatic>;
	}
	return (
		<MUIIconButton
			{...props}
			sx={{
				height: "fit-content",
				bgcolor: bgColor ?? color,
				// preserve any sx passed in props
				...(props.sx as object),
			}}
		>
			{children}
		</MUIIconButton>
	);
};

export default memo(IconButton);
